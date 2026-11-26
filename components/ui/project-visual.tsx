import Image from "next/image";
import type { Project } from "@/lib/projects";

/**
 * Renders the project's real screenshot when provided, otherwise a generated
 * abstract composition (no stock imagery).
 */
export function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        priority={priority}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="h-full w-full bg-bg-2 object-contain"
      />
    );
  }

  const { variant, accent } = project.visual;
  return (
    <div
      role="img"
      aria-label={`Abstract artwork for ${project.title}, a ${project.category.toLowerCase()} project`}
      className="relative h-full w-full overflow-hidden bg-bg-2"
    >
      <div
        className="absolute -top-1/3 -right-1/4 size-[80%] rounded-full opacity-30 blur-3xl"
        style={{ background: accent }}
        aria-hidden="true"
      />
      <div className="absolute inset-[9%] overflow-hidden rounded-xl border border-line bg-card/90 shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="size-1.5 rounded-full bg-line" />
          <span className="size-1.5 rounded-full bg-line" />
          <span className="size-1.5 rounded-full bg-line" />
          <span className="ml-3 h-1.5 w-1/4 rounded-full bg-line" />
        </div>
        {variant === "storefront" && (
          <div className="grid h-[calc(100%-2rem)] grid-cols-3 gap-2 p-3">
            <div className="col-span-3 h-1/3 rounded-md" style={{ background: `${accent}33` }} />
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-1.5">
                <div className="aspect-square rounded-md bg-line/70" />
                <div className="h-1.5 w-3/4 rounded-full bg-line" />
                <div className="h-1.5 w-1/3 rounded-full" style={{ background: accent }} />
              </div>
            ))}
          </div>
        )}
        {variant === "dashboard" && (
          <div className="grid h-[calc(100%-2rem)] grid-cols-[22%_1fr] gap-3 p-3">
            <div className="space-y-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-2 rounded-full bg-line" style={i === 0 ? { background: accent } : undefined} />
              ))}
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-8 rounded-md border border-line bg-bg-2" />
                ))}
              </div>
              <div className="flex h-[55%] items-end gap-1.5 rounded-md border border-line bg-bg-2 p-2">
                {[35, 55, 40, 70, 50, 85, 65].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? accent : `${accent}55` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        {variant === "editorial" && (
          <div className="grid h-[calc(100%-2rem)] grid-cols-[1.2fr_1fr] gap-3 p-3">
            <div className="flex flex-col justify-center gap-2">
              <div className="h-1.5 w-1/4 rounded-full" style={{ background: accent }} />
              <div className="h-3 w-full rounded-full bg-white/80" />
              <div className="h-3 w-4/5 rounded-full bg-white/80" />
              <div className="mt-1 h-1.5 w-full rounded-full bg-line" />
              <div className="h-1.5 w-2/3 rounded-full bg-line" />
              <div className="mt-2 h-5 w-1/3 rounded-full" style={{ background: accent }} />
            </div>
            <div className="rounded-lg" style={{ background: `linear-gradient(160deg, ${accent}55, transparent)` }} />
          </div>
        )}
      </div>
    </div>
  );
}
