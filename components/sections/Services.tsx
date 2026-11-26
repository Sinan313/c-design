import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services, differentiators } from "@/lib/services";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="services-heading" label="WHAT WE DO" title="Digital solutions built around your business." />
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, i) => (
            <li key={title} className="group relative bg-card p-7 transition-colors duration-300 hover:bg-bg-2 md:p-8">
              <Reveal delay={i * 0.05}>
                <span className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-bg text-primary-hover transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{description}</p>
              </Reveal>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary-hover transition-transform duration-500 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section id="why" aria-labelledby="why-heading" className="border-t border-line bg-bg-2 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <SectionHeading
            id="why-heading"
            label="WHY C-DESIGN?"
            title="A focused studio, built for clarity."
            description="Working with a small independent studio means direct communication and careful attention to every detail."
            className="lg:sticky lg:top-28"
          />
        </Reveal>
        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {differentiators.map(({ title, description, icon: Icon }, i) => (
            <li key={title} className="border-t border-line pt-6">
              <Reveal delay={(i % 2) * 0.08}>
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-primary-hover" aria-hidden="true" />
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
