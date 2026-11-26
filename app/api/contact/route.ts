import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* ---------- Basic in-memory rate limit (per server instance) ----------
 * Good enough to blunt casual abuse. On serverless (Vercel) each instance has
 * its own memory, so for stricter limits swap in Upstash/Vercel KV.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
  }
  return recent.length > MAX_REQUESTS;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  // Same-origin check
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ error: "Invalid request origin." }, 403);
    } catch {
      return json({ error: "Invalid request origin." }, 403);
    }
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Unsupported content type." }, 415);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return json({ error: "Too many enquiries. Please try again in a few minutes." }, 429);
  }

  const raw = await request.text();
  if (raw.length > 20_000) return json({ error: "Request too large." }, 413);

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return json({ error: parsed.error.issues[0]?.message ?? "Please check the form and try again." }, 400);
  }
  const data = parsed.data;

  // Spam protection: honeypot filled, or submitted faster than a person could. Pretend success.
  const elapsed = Date.now() - data.startedAt;
  if (data.website.trim() !== "" || elapsed < 3000) {
    return json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[contact] Email delivery is not configured (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL).");
    return json(
      { error: "The enquiry form is not available right now." },
      503,
    );
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Business", data.businessName || "—"],
    ["Service", data.service],
    ["Budget", data.budget || "—"],
    ["Timeline", data.timeline || "—"],
  ];
  const html = `<div style="font-family:system-ui,sans-serif;max-width:600px">
<h2>New C-DESIGN enquiry</h2>
<table cellpadding="6">${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("")}</table>
<h3>Project description</h3>
<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p></div>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New enquiry: ${oneLine(data.service)} — ${oneLine(data.name)}`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
      return json({ error: "We couldn't send your enquiry. Please try again or contact us directly." }, 502);
    }
  } catch (err) {
    console.error("[contact] Delivery failed", err);
    return json({ error: "We couldn't send your enquiry. Please try again or contact us directly." }, 502);
  }

  return json({ ok: true });
}
