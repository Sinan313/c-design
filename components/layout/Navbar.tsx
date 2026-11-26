"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";
import { buttonVariants } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [spy, setSpy] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy on the home page only.
  useEffect(() => {
    if (pathname !== "/") return;
    const targets = navItems
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setSpy(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [pathname]);

  const active = pathname === "/" ? spy : pathname.startsWith("/projects") ? "projects" : null;

  const onNavClick = (href: string) => {
    if (href === "/" && pathname === "/") window.scrollTo({ top: 0 });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      {/* Background lives in its own layer: backdrop-filter on the header itself would trap the fixed mobile menu. */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 bg-bg/85 backdrop-blur-md transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={() => onNavClick(item.href)}
                aria-current={active === item.id ? "page" : undefined}
                className={cn(
                  "relative block rounded-full px-4 py-2 text-sm transition-colors",
                  active === item.id ? "text-white" : "text-muted hover:text-white",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-0 mx-auto block h-px bg-primary-hover transition-all duration-300",
                    active === item.id ? "w-4" : "w-0",
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/#contact" className={cn(buttonVariants({ size: "md" }), "hidden md:inline-flex")}>
            Start a Project
          </Link>
          <MobileMenu active={active} />
        </div>
      </nav>
    </header>
  );
}
