import { z } from "zod";
import { services } from "@/lib/services";

export const serviceOptions = services.map((s) => s.title);

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100, "Name is too long."),
  email: z.email("Please enter a valid email address.").max(200),
  businessName: z.string().trim().max(120, "Business name is too long."),
  service: z
    .string()
    .refine((v) => serviceOptions.includes(v) || v === "Not sure yet", "Please choose a service."),
  budget: z.string().max(60),
  timeline: z.string().max(60),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail (at least 20 characters).")
    .max(4000, "Please keep your message under 4,000 characters."),
  /** Honeypot — real users never fill this in. */
  website: z.string().max(200),
  /** Timestamp (ms) set when the form was rendered; used to reject instant bot submissions. */
  startedAt: z.number(),
});

export type ContactValues = z.infer<typeof contactSchema>;
