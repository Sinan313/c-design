import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  description,
  className,
  id,
}: {
  label: string;
  title: string;
  description?: string;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="font-mono text-xs tracking-[0.2em] text-primary-hover">{label}</p>
      <h2 id={id} className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
