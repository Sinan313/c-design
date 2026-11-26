import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/services";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="process-heading" label="OUR PROCESS" title="From idea to launch." />
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting line */}
          <span aria-hidden="true" className="absolute top-[22px] left-[22px] hidden h-px w-[calc(100%-44px)] bg-line md:block" />
          <span aria-hidden="true" className="absolute top-[22px] bottom-6 left-[22px] w-px bg-line md:hidden" />
          {processSteps.map((step, i) => (
            <li key={step.n} className="relative pl-16 md:pt-16 md:pl-0">
              <Reveal delay={i * 0.1}>
                <span className="absolute top-0 left-0 flex size-11 items-center justify-center rounded-full border border-primary bg-bg font-mono text-sm text-primary-hover">
                  {step.n}
                </span>
                <h3 className="font-mono text-sm tracking-[0.18em]">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
