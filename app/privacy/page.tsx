import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How C-DESIGN collects and uses information submitted through this website.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: "Privacy Policy | C-DESIGN", description: "How C-DESIGN collects and uses information submitted through this website." },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-24 sm:px-8 md:pt-44">
      <p className="font-mono text-xs tracking-[0.2em] text-primary-hover">LEGAL</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Template — have this reviewed against the laws that apply to your business before launch.</p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white">
        <section>
          <h2>Who we are</h2>
          <p>C-DESIGN is an independent web design and development studio. This policy explains how information is handled when you use this website.</p>
        </section>
        <section>
          <h2>Information we collect</h2>
          <p>
            When you use the enquiry form, you choose how to send it. &ldquo;Send via Email&rdquo; delivers your details (your name, email address, optional business name, the service you need, optional budget and timeline, and your project description) to our inbox through FormSubmit, a third-party form-to-email service. &ldquo;Send via WhatsApp&rdquo; prepares the same message in WhatsApp, and we receive it only if you press send. This website does not otherwise store your details. If you contact us directly by email or WhatsApp, we receive the information you send.
          </p>
        </section>
        <section>
          <h2>How we use it</h2>
          <p>We use this information only to respond to your enquiry and to discuss and deliver potential work. We do not sell your information.</p>
        </section>
        <section>
          <h2>Service providers</h2>
          <p>The website is hosted on Vercel, and email enquiries from the form are relayed by FormSubmit. Messages sent by WhatsApp pass through WhatsApp. These providers process data under their own privacy policies.</p>
        </section>
        <section>
          <h2>Retention</h2>
          <p>We keep enquiry details for as long as needed to respond and manage any resulting project, and delete them on request where we are not required to keep them.</p>
        </section>
        <section>
          <h2>Your rights</h2>
          <p>You may ask to access, correct or delete the personal information we hold about you.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            {site.email ? (
              <>
                Questions about this policy: <a className="text-primary-hover underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
              </>
            ) : (
              <>Questions about this policy can be sent through the enquiry form on the home page.</>
            )}
          </p>
        </section>
      </div>
    </article>
  );
}
