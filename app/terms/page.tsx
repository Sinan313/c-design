import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the C-DESIGN website and enquiries.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms", title: "Terms of Service | C-DESIGN", description: "Terms governing use of the C-DESIGN website and enquiries." },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-24 sm:px-8 md:pt-44">
      <p className="font-mono text-xs tracking-[0.2em] text-primary-hover">LEGAL</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Terms of Service</h1>
      <p className="mt-4 text-sm text-muted">Template — have this reviewed against the laws that apply to your business before launch.</p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white">
        <section>
          <h2>Use of this website</h2>
          <p>By using this website you agree to use it lawfully and not to attempt to disrupt it, submit spam or misuse the enquiry form.</p>
        </section>
        <section>
          <h2>Enquiries are not contracts</h2>
          <p>Submitting an enquiry does not create an agreement. Any project is governed by a separate written proposal or agreement that sets out scope, timeline, fees and deliverables.</p>
        </section>
        <section>
          <h2>Portfolio and concept projects</h2>
          <p>Projects labelled as concepts are self-initiated and use fictional brands. They are shown to illustrate our design and development approach and do not represent real clients or results.</p>
        </section>
        <section>
          <h2>Intellectual property</h2>
          <p>The content, design and code of this website belong to C-DESIGN unless stated otherwise. Ownership of work delivered to clients is defined in the project agreement.</p>
        </section>
        <section>
          <h2>Liability</h2>
          <p>This website is provided as is. To the extent permitted by law, C-DESIGN is not liable for losses arising from its use.</p>
        </section>
        <section>
          <h2>Changes</h2>
          <p>We may update these terms from time to time. Continued use of the site means you accept the updated terms.</p>
        </section>
      </div>
    </article>
  );
}
