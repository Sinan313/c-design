import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ProjectVisual } from "@/components/ui/project-visual";
import { buttonVariants } from "@/components/ui/button";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — ${project.category}${project.concept ? " Concept" : ""}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${title} | C-DESIGN`, description: project.summary, url: `/projects/${project.slug}`, type: "article" },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white">
          <ArrowLeft className="size-4" /> All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-wider text-primary-hover">{project.category.toUpperCase()}</span>
            <span className="text-xs text-muted">{project.year}</span>
            {project.concept && <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted">Self-initiated concept</span>}
            {project.personal && <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted">Personal project</span>}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{project.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{project.description}</p>
        </header>

        <div className="mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-line">
          <ProjectVisual project={project} priority />
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <section aria-labelledby="brief">
              <h2 id="brief" className="font-mono text-xs tracking-[0.2em] text-primary-hover">THE BRIEF</h2>
              <p className="mt-4 text-lg leading-relaxed">{project.brief}</p>
            </section>
            <section aria-labelledby="approach">
              <h2 id="approach" className="font-mono text-xs tracking-[0.2em] text-primary-hover">APPROACH</h2>
              <ul className="mt-4 space-y-3">
                {project.approach.map((a) => (
                  <li key={a} className="border-l border-line pl-4 leading-relaxed text-muted">{a}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="features">
              <h2 id="features" className="font-mono text-xs tracking-[0.2em] text-primary-hover">WHAT&apos;S INCLUDED</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-muted">
                    <Check className="mt-1 size-4 shrink-0 text-primary-hover" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside aria-label="Project details" className="h-fit rounded-2xl border border-line bg-card p-6">
            <h2 className="text-sm font-medium">Technology</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded-md bg-bg-2 px-2.5 py-1 font-mono text-xs text-muted">{s}</li>
              ))}
            </ul>
            {project.concept && (
              <p className="mt-6 text-sm leading-relaxed text-muted">
                This is a self-initiated concept for a fictional brand. It is not client work and does not represent real business results.
              </p>
            )}
            {project.personal && (
              <p className="mt-6 text-sm leading-relaxed text-muted">
                A personal project by {site.founder.name}. It is not client work, and no business results are claimed.
              </p>
            )}
            {project.note && <p className="mt-4 text-sm leading-relaxed text-muted">{project.note}</p>}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className={`${buttonVariants({ variant: "secondary" })} mt-6 w-full`}>
                View on GitHub <ArrowUpRight className="size-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className={`${buttonVariants({ variant: "secondary" })} mt-6 w-full`}>
                Visit live site <ArrowUpRight className="size-4" />
              </a>
            )}
          </aside>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          {next && next.slug !== project.slug && (
            <Link href={`/projects/${next.slug}`} className="group">
              <span className="text-sm text-muted">Next project</span>
              <span className="mt-1 flex items-center gap-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary-hover">
                {next.title} <ArrowRight className="size-5" />
              </span>
            </Link>
          )}
          <Link href="/#contact" className={buttonVariants({ size: "lg" })}>
            Start a Project
          </Link>
        </div>
      </div>
    </article>
  );
}
