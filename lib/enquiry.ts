import { site } from "@/lib/site";
import type { ContactValues } from "@/lib/validation";

/** Plain-text enquiry used for both WhatsApp and email. */
export function enquiryText(v: ContactValues) {
  const lines = [
    "New project enquiry via C-DESIGN website",
    "",
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    v.businessName ? `Business: ${v.businessName}` : null,
    `Service: ${v.service}`,
    v.budget ? `Budget: ${v.budget}` : null,
    v.timeline ? `Timeline: ${v.timeline}` : null,
    "",
    "Project description:",
    v.message,
  ];
  return lines.filter((l): l is string => l !== null).join("\n");
}

export function whatsappEnquiryUrl(v: ContactValues) {
  if (!site.whatsappNumber) return undefined;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(enquiryText(v))}`;
}

export function emailEnquiryUrl(v: ContactValues) {
  if (!site.email) return undefined;
  const subject = `Project enquiry: ${v.service}${v.businessName ? ` (${v.businessName})` : ""}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryText(v))}`;
}

/**
 * Sends the enquiry straight to the studio inbox through FormSubmit (formsubmit.co),
 * a free form-to-email service that needs no API key. The first-ever submission
 * triggers a one-time activation email to the inbox owner.
 */
export async function sendEnquiryByEmail(v: ContactValues): Promise<void> {
  if (!site.email) throw new Error("Email is not configured.");
  const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `Project enquiry: ${v.service}${v.businessName ? ` (${v.businessName})` : ""}`,
      _template: "table",
      _captcha: "false",
      _honey: "",
      Name: v.name,
      email: v.email,
      Business: v.businessName || "-",
      Service: v.service,
      Budget: v.budget || "-",
      Timeline: v.timeline || "-",
      Message: v.message,
    }),
  });
  const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
  if (!res.ok || String(data.success) !== "true") throw new Error("Email delivery failed.");
}
