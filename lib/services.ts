import {
  Briefcase,
  Code,
  Cpu,
  Gauge,
  LifeBuoy,
  MessageSquare,
  MousePointerClick,
  Palette,
  PenTool,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = { title: string; description: string; icon: LucideIcon };

export const services: Service[] = [
  {
    title: "Website Design",
    description: "Modern, visually engaging and intuitive website experiences.",
    icon: PenTool,
  },
  {
    title: "Website Development",
    description: "Responsive, fast and scalable websites built with modern technologies.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "User-focused interfaces and thoughtful digital experiences.",
    icon: MousePointerClick,
  },
  {
    title: "Business Websites",
    description: "Professional online identities for growing businesses.",
    icon: Briefcase,
  },
  {
    title: "E-commerce Development",
    description: "Functional online stores designed to support sales and growth.",
    icon: ShoppingBag,
  },
  {
    title: "Website Redesign",
    description: "Transform outdated websites into modern digital experiences.",
    icon: RefreshCw,
  },
];

export const differentiators: Service[] = [
  { title: "Design tailored to your business", description: "Every layout starts from your goals and audience, not a template.", icon: Palette },
  { title: "Responsive on every device", description: "Considered layouts from small phones to wide desktop screens.", icon: Smartphone },
  { title: "Performance-focused development", description: "Lean code and optimised assets so pages load quickly.", icon: Gauge },
  { title: "Clear communication", description: "Straightforward updates and one point of contact throughout.", icon: MessageSquare },
  { title: "Modern technology", description: "Built on current, well-supported frameworks that are easy to maintain.", icon: Cpu },
  { title: "Ongoing support", description: "Guidance after launch so your site keeps working for you.", icon: LifeBuoy },
];

export const processSteps = [
  { n: "01", title: "DISCOVER", description: "Understand the business, objectives, audience and requirements." },
  { n: "02", title: "DESIGN", description: "Create layouts and visual experiences that align with the brand." },
  { n: "03", title: "DEVELOP", description: "Build responsive, accessible and optimized websites." },
  { n: "04", title: "DELIVER", description: "Test, launch and provide post-launch guidance." },
] as const;
