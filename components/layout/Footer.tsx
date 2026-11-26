import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/social-icons";
import { CurrentYear } from "@/components/layout/CurrentYear";
import { navItems, site, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";

const linkClass = "text-sm text-muted transition-colors hover:text-white";

export function Footer() {
  const wa = whatsappLink();
  const socials = [
    site.instagram && { label: "Instagram", href: site.instagram, Icon: InstagramIcon },
    site.linkedin && { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon },
  ].filter(Boolean) as { label: string; href: string; Icon: typeof InstagramIcon }[];

  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">Let&apos;s build something great.</p>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 font-mono text-xs tracking-[0.18em] text-primary-hover">{site.tagline}</p>
            <p className="mt-2 text-sm text-muted">By {site.founder.name}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Independent web design and development studio creating modern, responsive websites for businesses, startups and individuals.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-medium">Navigation</h2>
            <ul className="mt-4 space-y-3">
              {navItems.map((i) => (
                <li key={i.id}>
                  <Link href={i.href} className={linkClass}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="text-sm font-medium">Services</h2>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href="/#services" className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium">Connect</h2>
            <ul className="mt-4 space-y-3">
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className={linkClass}>
                    {site.email}
                  </a>
                </li>
              )}
              {wa && (
                <li>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                    <WhatsappIcon className="size-4" />
                    WhatsApp {site.whatsappDisplay}
                  </a>
                </li>
              )}
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                    <Icon className="size-4" />
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/#contact" className={linkClass}>
                  Project enquiry form
                </Link>
              </li>
              {site.location && <li className="text-sm text-muted">{site.location}</li>}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear fallback={new Date().getFullYear()} /> C-DESIGN. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
