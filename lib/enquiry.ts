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
