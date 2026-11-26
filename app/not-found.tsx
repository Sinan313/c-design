import Link from "next/link";
import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="absolute top-1/3 left-1/2 -z-10 size-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs tracking-[0.2em] text-primary-hover">ERROR 404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">Page not found.</h1>
        <p className="mt-5 max-w-md text-lg text-muted">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={buttonVariants({ size: "lg" })}>
            Back to home
          </Link>
          <Link href="/projects" className={buttonVariants({ size: "lg", variant: "secondary" })}>
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
