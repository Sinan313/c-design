import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectVisual } from "@/components/ui/project-visual";
import { projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-primary-hover/60",
        featured && "lg:flex-row",
      )}
    >
      <div className={cn("aspect-[16/10] overflow-hidden", featured && "lg:aspect-auto lg:w-[58%]")}>
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]">
          <ProjectVisual project={project} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs tracking-wider text-primary-hover">{project.category.toUpperCase()}</span>
          {project.concept && (
            <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted">Concept project</span>
          )}
          {project.personal && (
            <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted">Personal project</span>
          )}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
          {project.stack.map((s) => (
            <li key={s} className="rounded-md bg-bg-2 px-2.5 py-1 font-mono text-xs text-muted">
              {s}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-sm font-medium transition-colors group-hover:text-primary-hover">
          View case study <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

export function Projects() {
  const [first, ...rest] = projects;
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              id="projects-heading"
              label="SELECTED WORK"
              title="Digital experiences made with purpose."
              description="Personal projects and self-initiated concepts that show how we think about design and build. Client work will appear here as it is delivered."
            />
          </Reveal>
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-white">
            All projects <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {first && (
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="lg:col-span-2">
              <ProjectCard project={first} featured />
            </Reveal>
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
