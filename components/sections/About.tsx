import { ExternalLink, GraduationCap, MapPin, User } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";

export function About() {
  const { founder } = site;
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-line bg-bg-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="about-heading"
            label="ABOUT"
            title="Small studio. Big ideas."
            description="C-DESIGN is an independent web design and development studio focused on building meaningful digital experiences. We combine creativity, thoughtful design and modern technology to help businesses move forward online."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          {/* Founder profile */}
          <Reveal delay={0.1}>
            <article aria-labelledby="founder-name" className="h-full rounded-2xl border border-line bg-card p-6 md:p-10">
              <p className="font-mono text-xs tracking-[0.18em] text-primary-hover">MEET THE FOUNDER</p>

              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
                {founder.photo ? (
                  <Image
                    src={founder.photo}
                    alt={`Portrait of ${founder.name}`}
                    width={128}
                    height={128}
                    className="size-28 shrink-0 rounded-2xl border border-line object-cover sm:size-32"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label="Founder photograph placeholder"
                    className="flex size-28 shrink-0 items-center justify-center rounded-2xl border border-dashed border-line bg-bg text-muted sm:size-32"
                  >
                    <User className="size-9" aria-hidden="true" />
                  </div>
                )}
                <div>
                  <h3 id="founder-name" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {founder.name}
                  </h3>
                  <p className="mt-1.5 text-primary-hover">{founder.role}</p>
                  {site.location && (
                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                      <MapPin className="size-4" aria-hidden="true" />
                      {site.location}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 space-y-4 leading-relaxed text-muted">
                {founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-8 border-l-2 border-primary pl-5">
                <p className="text-lg font-medium leading-snug text-white">&ldquo;{founder.philosophy}&rdquo;</p>
              </blockquote>

              {founder.portfolioUrl && (
                <a
                  href={founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonVariants({ variant: "secondary", size: "lg" })} mt-8 w-full sm:w-auto`}
                >
                  View Personal Portfolio <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </article>
          </Reveal>

          {/* Education + expertise */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.15}>
              <section aria-labelledby="education-heading" className="rounded-2xl border border-primary/40 bg-card p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-line text-primary-hover">
                    <GraduationCap className="size-5" aria-hidden="true" />
                  </span>
                  <h3 id="education-heading" className="text-sm font-medium">
                    Education
                  </h3>
                </div>
                <p className="mt-5 text-lg font-semibold leading-snug tracking-tight">{founder.education.institution}</p>
                <p className="mt-2 text-muted">{founder.education.programme}</p>
                <p className="mt-3 inline-flex rounded-full border border-line px-3 py-1 text-xs text-primary-hover">
                  {founder.education.status}
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.2}>
              <section aria-labelledby="expertise-heading" className="rounded-2xl border border-line bg-card p-6 md:p-8">
                <h3 id="expertise-heading" className="text-sm font-medium">
                  Technical expertise
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {founder.skills.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-bg px-4 py-1.5 text-sm text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
