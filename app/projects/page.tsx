import type { Metadata } from "next";
import { ProjectCard } from "@/components/sections/Projects";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected web design and development projects and concepts by C-DESIGN.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", title: "Projects | C-DESIGN" },
};

export default function ProjectsPage() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-primary-hover">SELECTED WORK</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Digital experiences made with purpose.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          These are self-initiated concept projects that demonstrate our approach to design and development. Client work will be added as it is delivered.
        </p>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
