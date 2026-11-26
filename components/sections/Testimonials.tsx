import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="border-t border-line bg-bg-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="testimonials-heading" label="CLIENT FEEDBACK" title="Words from the people we work with." />
        </Reveal>

        {testimonials.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mt-12 flex items-start gap-4 rounded-2xl border border-dashed border-line bg-card/50 p-8 md:items-center">
              <Quote className="mt-1 size-6 shrink-0 text-primary-hover md:mt-0" aria-hidden="true" />
              <p className="max-w-2xl leading-relaxed text-muted">
                C-DESIGN is a new studio, so there are no client testimonials yet. We only publish genuine feedback from real clients, with their permission.
              </p>
            </div>
          </Reveal>
        ) : (
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={`${t.name}-${t.company}`} className="rounded-2xl border border-line bg-card p-8">
                <blockquote className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <p className="mt-6 text-sm font-medium">{t.name}</p>
                <p className="text-sm text-muted">
                  {t.role}, {t.company}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
