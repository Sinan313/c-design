"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Info, Loader2, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSchema, serviceOptions, type ContactValues } from "@/lib/validation";
import { site, whatsappLink } from "@/lib/site";
import { WhatsappIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-white placeholder:text-muted/70 transition-colors focus:border-primary-hover focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-primary-hover/30 aria-[invalid=true]:border-red-400";

function Field({
  label,
  required,
  error,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label} {required ? <span className="text-primary-hover" aria-hidden="true">*</span> : <span className="text-muted font-normal">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ deliveryConfigured = true }: { deliveryConfigured?: boolean }) {
  const wa = whatsappLink();
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", businessName: "", service: "", budget: "", timeline: "", message: "", website: "", startedAt: 0 },
  });

  useEffect(() => {
    setValue("startedAt", Date.now());
  }, [setValue]);

  const aria = (name: keyof ContactValues) => ({
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  async function onSubmit(values: ContactValues) {
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      reset();
      setValue("startedAt", Date.now());
      setStatus("success");
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-2xl border border-primary/50 bg-card p-8">
        <CheckCircle2 className="size-8 text-primary-hover" aria-hidden="true" />
        <h3 className="text-2xl font-semibold tracking-tight">Thanks, your enquiry has been sent.</h3>
        <p className="text-muted">
          {site.founder.name} will review the details and reply to the email address you provided.
          {wa && (
            <>
              {" "}In a hurry? You can also{" "}
              <a href={wa} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-primary-hover">
                message on WhatsApp
              </a>
              .
            </>
          )}
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-2xl border border-line bg-card p-6 md:p-8">
      {!deliveryConfigured && (
        <div role="note" className="flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm text-muted">
          <Info className="mt-0.5 size-4 shrink-0 text-primary-hover" aria-hidden="true" />
          <p>
            Online enquiries aren&apos;t switched on yet. Please contact us directly
            {wa ? (
              <>
                {" "}on{" "}
                <a href={wa} target="_blank" rel="noopener noreferrer" className="font-medium text-white underline underline-offset-4">
                  WhatsApp
                </a>
              </>
            ) : null}
            {site.email ? (
              <>
                {wa ? " or by email at " : " at "}
                <a href={`mailto:${site.email}`} className="font-medium text-white underline underline-offset-4">
                  {site.email}
                </a>
              </>
            ) : null}
            .
          </p>
        </div>
      )}

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required htmlFor="name" error={errors.name?.message}>
          <input id="name" type="text" autoComplete="name" className={field} {...aria("name")} {...register("name")} />
        </Field>
        <Field label="Email" required htmlFor="email" error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className={field} {...aria("email")} {...register("email")} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Business name" htmlFor="businessName" error={errors.businessName?.message}>
          <input id="businessName" type="text" autoComplete="organization" className={field} {...aria("businessName")} {...register("businessName")} />
        </Field>
        <Field label="Service required" required htmlFor="service" error={errors.service?.message}>
          <select id="service" className={cn(field, "appearance-none")} {...aria("service")} {...register("service")}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget range" htmlFor="budget">
          <select id="budget" className={cn(field, "appearance-none")} {...register("budget")}>
            <option value="">Select a range</option>
            {site.budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project timeline" htmlFor="timeline">
          <select id="timeline" className={cn(field, "appearance-none")} {...register("timeline")}>
            <option value="">Select a timeline</option>
            {site.timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project description" required htmlFor="message" error={errors.message?.message}>
        <textarea id="message" rows={5} className={cn(field, "resize-y")} placeholder="Tell us about your business, goals and what you need." {...aria("message")} {...register("message")} />
      </Field>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-300">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            {serverError}
            {wa && (
              <>
                {" "}You can also reach us on{" "}
                <a href={wa} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  WhatsApp
                </a>
                {site.email ? <> or at <a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a></> : null}.
              </>
            )}
          </span>
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Send enquiry <Send className="size-4" aria-hidden="true" />
          </>
        )}
      </Button>
      {wa && (
        <p className="text-sm text-muted">
          Prefer to chat?{" "}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-white underline-offset-4 hover:text-primary-hover hover:underline"
          >
            <WhatsappIcon className="size-4" /> WhatsApp us
          </a>
        </p>
      )}
      </div>
    </form>
  );
}
