import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

function HeroComposition() {
  return (
    <div
      role="img"
      aria-label="Abstract composition of a website layout being designed"
      className="relative mx-auto aspect-[5/4] w-full max-w-xl"
    >
      <div className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-[90px]" aria-hidden="true" />
      {/* Main window */}
      <div className="absolute inset-x-[4%] top-[6%] bottom-[14%] overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)]">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="ml-4 h-2 w-1/3 rounded-full bg-line" />
        </div>
        <div className="grid grid-cols-[1.3fr_1fr] gap-4 p-5">
          <div className="space-y-3 pt-2">
            <div className="h-2 w-1/4 rounded-full bg-primary-hover" />
            <div className="h-5 w-full rounded-full bg-white/90" />
            <div className="h-5 w-5/6 rounded-full bg-white/90" />
            <div className="h-5 w-2/3 rounded-full bg-primary" />
            <div className="h-2 w-full rounded-full bg-line" />
            <div className="h-2 w-4/5 rounded-full bg-line" />
            <div className="flex gap-2 pt-2">
              <div className="h-7 w-20 rounded-full bg-primary" />
              <div className="h-7 w-16 rounded-full border border-line" />
            </div>
          </div>
          <div className="rounded-xl border border-line bg-gradient-to-br from-primary/40 to-transparent" />
        </div>
        <div className="grid grid-cols-3 gap-3 px-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 rounded-lg border border-line bg-bg-2" />
          ))}
        </div>
      </div>
      {/* Floating phone */}
      <div className="absolute right-0 bottom-0 w-[24%] animate-float rounded-2xl border border-line bg-bg-2 p-2 shadow-[0_20px_50px_-10px_rgb(0_0_0/0.8)]">
        <div className="space-y-1.5">
          <div className="h-12 rounded-lg bg-primary/50" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/80" />
          <div className="h-1.5 w-3/5 rounded-full bg-line" />
          <div className="h-5 rounded-full bg-primary" />
        </div>
      </div>
      {/* Floating palette chip */}
      <div className="absolute bottom-[4%] left-0 flex animate-float items-center gap-2 rounded-full border border-line bg-card px-3 py-2 [animation-delay:-3s]">
        <span className="size-3 rounded-full bg-primary" />
        <span className="size-3 rounded-full bg-primary-hover" />
        <span className="size-3 rounded-full bg-white" />
        <span className="font-mono text-[10px] tracking-wider text-muted">#2563EB</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-muted">
              <span className="size-1.5 rounded-full bg-primary-hover" aria-hidden="true" />
              INDEPENDENT DIGITAL DESIGN STUDIO
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 id="hero-heading" className="mt-7 text-[2.75rem] leading-[1.02] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Your Vision.</span>
              <span className="block">Our Design.</span>
              <span className="block text-muted">
                A <span className="text-primary-hover">Better</span> Digital Experience.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              We design and develop modern, high-performing websites that help businesses build credibility, connect with customers and grow online.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#contact" className={buttonVariants({ size: "lg" })}>
                Start a Project <ArrowRight className="size-4" />
              </Link>
              <Link href="/#projects" className={buttonVariants({ size: "lg", variant: "secondary" })}>
                Explore Our Work
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <HeroComposition />
        </Reveal>
      </div>

      <Link
        href="/#services"
        aria-label="Scroll to services"
        className={cn("absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-white lg:block")}
      >
        <ArrowDownRight className="size-5 rotate-45" />
      </Link>
    </section>
  );
}
