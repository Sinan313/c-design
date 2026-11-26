import { Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/social-icons";
import { site, whatsappLink } from "@/lib/site";

export function Contact() {
  const wa = whatsappLink();
  const rows = [
    site.email && { label: site.email, href: `mailto:${site.email}`, Icon: Mail, external: false },
    wa && { label: `WhatsApp ${site.whatsappDisplay}`, href: wa, Icon: WhatsappIcon, external: true },
    site.linkedin && { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon, external: true },
    site.instagram && { label: "Instagram", href: site.instagram, Icon: InstagramIcon, external: true },
  ].filter(Boolean) as { label: string; href: string; Icon: typeof Mail; external: boolean }[];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Reveal>
            <SectionHeading
              id="contact-heading"
              label="CONTACT"
              title="Have a project in mind?"
              description="Let's discuss your ideas and create something meaningful together."
            />
          </Reveal>
          {(rows.length > 0 || site.location) && (
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-3">
                {rows.map(({ label, href, Icon, external }) => (
                  <li key={href}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-white"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-full border border-line text-primary-hover transition-colors group-hover:border-primary-hover">
                        <Icon className="size-4" />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
                {site.location && (
                  <li className="inline-flex items-center gap-3 text-muted">
                    <span className="inline-flex size-10 items-center justify-center rounded-full border border-line text-primary-hover">
                      <MapPin className="size-4" />
                    </span>
                    {site.location}
                  </li>
                )}
              </ul>
            </Reveal>
          )}
        </div>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
