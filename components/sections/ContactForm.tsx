"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactSchema, serviceOptions, type ContactValues } from "@/lib/validation";
import { site } from "@/lib/site";
import { whatsappEnquiryUrl } from "@/lib/enquiry";
import { WhatsappIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";


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

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", businessName: "", service: "", budget: "", timeline: "", message: "" },
  });

  const aria = (name: keyof ContactValues) => ({
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const waAvailable = Boolean(site.whatsappNumber);

  function sendWhatsApp() {
    return handleSubmit((values) => {
      const url = whatsappEnquiryUrl(values);
      if (url) window.open(url, "_blank", "noopener,noreferrer");
      setSent(true);
    });
  }

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-2xl border border-primary/50 bg-card p-8">
        <CheckCircle2 className="size-8 text-primary-hover" aria-hidden="true" />
        <h3 className="text-2xl font-semibold tracking-tight">
          Your WhatsApp message is ready.
        </h3>
        <p className="text-muted">
          WhatsApp should have opened with your enquiry filled in. Press send there to deliver it to {site.founder.name}. Nothing is sent until you do.
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            reset();
            setSent(false);
          }}
        >
          Start a new enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} noValidate className="space-y-5 rounded-2xl border border-line bg-card p-6 md:p-8">
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

      <div className="space-y-3 pt-1">
        <div className="flex flex-col gap-3 sm:flex-row">
          {waAvailable && (
            <Button type="button" size="lg" onClick={sendWhatsApp()} className="w-full sm:w-auto">
              <WhatsappIcon className="size-4" /> Send via WhatsApp
            </Button>
          )}
        </div>
        <p className="text-sm text-muted">
          {waAvailable
            ? "WhatsApp opens with your enquiry prefilled, so you can review it before sending."
            : `WhatsApp enquiries are not available right now. Please email ${site.email}.`}
        </p>
      </div>
    </form>
  );
}
