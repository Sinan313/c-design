/**
 * Central, editable business configuration.
 *
 * Anything left empty is hidden from the UI (no dead links). Set values via
 * environment variables (see .env.example) or edit the defaults below.
 */
const env = (value: string | undefined) => {
  const v = value?.trim();
  return v ? v : undefined;
};

export const site = {
  name: "C-DESIGN",
  tagline: "DESIGN. DEVELOP. DELIVER.",
  title: "C-DESIGN | Professional Web Design & Development",
  description:
    "C-DESIGN creates modern, responsive and professional websites for businesses, startups and individuals.",
  url: (
    env(process.env.NEXT_PUBLIC_SITE_URL) ??
    // Vercel provides the production domain automatically, so canonicals are never "localhost" in production.
    (env(process.env.VERCEL_PROJECT_PRODUCTION_URL) ? `https://${env(process.env.VERCEL_PROJECT_PRODUCTION_URL)}` : "http://localhost:3000")
  ).replace(/\/$/, ""),

  // --- Contact channels (env vars override; empty values are hidden) ---
  email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ?? "sinancheelath876@gmail.com",
  /** Digits only, including country code. */
  whatsappNumber: (env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) ?? "919446062291").replace(/\D/g, ""),
  /** Human-readable number shown on the site. */
  whatsappDisplay: "+91 94460 62291",
  // Hidden until real links are provided.
  instagram: env(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
  linkedin: env(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  location: env(process.env.NEXT_PUBLIC_LOCATION) ?? "Bengaluru, India",

  // --- Founder ---
  founder: {
    name: "Mohammed Sinan C",
    role: "Founder & Web Developer",
    /** Short line used in cards and structured data. */
    summary: "Founder of C-DESIGN and a web developer building modern, functional and user-focused digital experiences.",
    /** Biography paragraphs, in order. */
    bio: [
      "I'm Mohammed Sinan C, the founder of C-DESIGN and a web developer passionate about building modern, functional and user-focused digital experiences.",
      "With hands-on experience in frontend and full-stack web development, I've worked on project-based applications, responsive interfaces, REST API integrations, database operations and website deployment.",
      "Through C-DESIGN, I aim to help businesses, startups and individuals establish a strong online presence by transforming their ideas into beautifully designed, responsive and reliable websites.",
    ],
    philosophy: "Every business deserves a professional digital presence.",
    education: {
      institution: "Indian Institute of Technology Madras (IIT Madras)",
      programme: "BS Degree in Data Science and Applications",
      status: "Currently pursuing",
    },
    /** Path inside /public, e.g. "/images/founder.jpg". Leave undefined to show a placeholder. */
    photo: "/images/founder.jpg" as string | undefined,
    portfolioUrl: env(process.env.NEXT_PUBLIC_PORTFOLIO_URL) ?? "https://sinan313.github.io/Mohammed-Sinan-Portfolio/",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Python",
      "REST APIs",
      "Git",
      "GitHub",
      "Linux",
      "Docker basics",
      "AWS fundamentals",
    ],
  },

  // --- Enquiry form options ---
  budgetRanges: ["Under $1,000", "$1,000 – $3,000", "$3,000 – $7,500", "$7,500+", "Not sure yet"],
  timelines: ["As soon as possible", "Within 1–2 months", "3+ months", "Flexible"],
} as const;

export const navItems = [
  { label: "Home", href: "/", id: "home" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
] as const;

export function whatsappLink(message = "Hi C-DESIGN, I'd like to discuss a website project.") {
  if (!site.whatsappNumber) return undefined;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Verified client testimonials. Leave empty until you have genuine, permitted
 * feedback. Shape: { quote, name, role, company }.
 */
export const testimonials: { quote: string; name: string; role: string; company: string }[] = [];
