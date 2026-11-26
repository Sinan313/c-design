/**
 * Centralised portfolio data. Add, edit or remove entries here — pages, sitemap
 * and static routes are generated from this array.
 *
 * IMPORTANT: the entries below are self-initiated CONCEPTS, not client work.
 * Keep `concept: true` for those. Never add invented clients or results.
 *
 * To use a real screenshot, drop it in /public/images and set
 * image: { src: "/images/name.png", alt: "Describe the screenshot", width: 1600, height: 1000 }
 */
export type Project = {
  slug: string;
  title: string;
  category: string;
  year: number;
  summary: string;
  description: string;
  stack: string[];
  /** true = self-initiated concept; false = delivered client work. */
  concept: boolean;
  /** Live URL, if any. Omit for concepts. */
  url?: string;
  image?: { src: string; alt: string; width: number; height: number };
  /** Visual styling for the generated placeholder artwork. */
  visual: { variant: "storefront" | "dashboard" | "editorial"; accent: string };
  brief: string;
  approach: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "northwind-coffee",
    title: "Northwind Coffee",
    category: "E-commerce",
    year: 2026,
    summary: "A concept online store for a fictional specialty coffee roaster.",
    description:
      "A self-initiated storefront concept exploring how a small roaster could present products, subscriptions and brand story with calm, editorial pacing.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    concept: true,
    visual: { variant: "storefront", accent: "#3B82F6" },
    brief:
      "Northwind Coffee is a fictional brand created to practise e-commerce design. The goal: make browsing, comparing and subscribing feel effortless on a phone.",
    approach: [
      "Product-first layouts with large type and generous spacing.",
      "A simple, thumb-friendly purchase flow with minimal steps.",
      "A restrained palette so product photography would carry the page.",
    ],
    features: ["Product grid and detail layouts", "Subscription selector", "Mobile-first cart drawer design", "Accessible colour contrast"],
  },
  {
    slug: "atlas-analytics",
    title: "Atlas Analytics",
    category: "UI/UX Design",
    year: 2026,
    summary: "A concept marketing site and dashboard UI for a fictional SaaS product.",
    description:
      "A self-initiated exploration of how to explain a data product clearly: a landing page paired with a dashboard interface study.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    concept: true,
    visual: { variant: "dashboard", accent: "#2563EB" },
    brief:
      "Atlas Analytics does not exist. It is a design exercise in communicating complex information through hierarchy, spacing and restrained colour.",
    approach: [
      "Lead with a single clear value proposition above the fold.",
      "Use dashboard previews to explain the product visually.",
      "Keep data visualisation legible in a dark interface.",
    ],
    features: ["Landing page structure", "Dashboard component study", "Pricing table layout", "Dark-mode design tokens"],
  },
  {
    slug: "lumen-clinic",
    title: "Lumen Clinic",
    category: "Business Website",
    year: 2026,
    summary: "A concept website for a fictional local health clinic.",
    description:
      "A self-initiated business website concept focused on trust, clarity and making it easy to find services and get in touch.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    concept: true,
    visual: { variant: "editorial", accent: "#60A5FA" },
    brief:
      "Lumen Clinic is a fictional practice used to explore how a service business can look credible and approachable online.",
    approach: [
      "Plain-language service pages that answer common questions quickly.",
      "Prominent contact paths on every page.",
      "Calm typography and spacing to reduce visual noise.",
    ],
    features: ["Service directory layout", "Appointment enquiry form design", "Team and about page templates", "Accessible navigation"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
