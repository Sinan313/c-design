/**
 * Centralised portfolio data. Add, edit or remove entries here — pages, sitemap
 * and static routes are generated from this array.
 *
 * IMPORTANT: nothing here is client work. Fictional-brand entries use `concept: true`;
 * real personal projects use `personal: true` plus a `repo` link. Never add invented clients or results.
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
  /** true = self-initiated concept for a fictional brand. */
  concept: boolean;
  /** true = real personal project built by the founder (not client work). Source is public on GitHub. */
  personal?: boolean;
  /** Optional honest caveat shown on the project page. */
  note?: string;
  /** Public GitHub repository, if any. */
  repo?: string;
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
    slug: "jansankalp-ai",
    title: "Jansankalp AI",
    category: "AI Web App",
    year: 2026,
    summary: "A prototype that turns citizen development requests into AI-assisted, human-reviewed assessments.",
    description:
      "A personal project exploring how citizen requests and district-level indicators could be combined to highlight development needs. Gemini analyses each request, and results are presented as prototype assessments for further human review.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Gemini API"],
    concept: false,
    personal: true,
    repo: "https://github.com/Sinan313/jansankalp-ai",
    image: { src: "/images/jansankalp-ai.png", alt: "JanSankalp AI home page with the headline Turning citizen voices into development intelligence and summary figures for prototype data", width: 1578, height: 805 },
    visual: { variant: "dashboard", accent: "#2563EB" },
    brief:
      "Public requests for local development, such as water, healthcare or roads, arrive in many languages and are hard to compare. Jansankalp AI is a prototype that structures those requests and sets them beside infrastructure indicators.",
    approach: [
      "Citizen requests are collected as text and analysed with the Gemini API to identify language, category, issue and urgency.",
      "Request data is combined with district indicators such as water, healthcare, education, road quality, digital connectivity, transport, sanitation and electricity access.",
      "AI output is framed as an explainable prototype assessment for human review, not an automatic decision.",
    ],
    features: [
      "Citizen request submission and AI analysis",
      "Dashboard and development-coverage views",
      "Citizen request and public project listings",
      "District hotspot and recommendation API routes",
      "Sample datasets stored as JSON",
      "Handling for temporary AI service errors",
    ],
  },
  {
    slug: "student-management-system",
    title: "Student Management System",
    category: "Desktop App",
    year: 2026,
    summary: "A Java Swing desktop app for adding, searching, updating and deleting student records.",
    description:
      "A personal project: a desktop application for managing student records, with validated input and data saved to a local CSV file so records persist between sessions.",
    stack: ["Java", "Java Swing", "CSV storage"],
    concept: false,
    personal: true,
    repo: "https://github.com/Sinan313/StudentManagementSystem",
    image: { src: "/images/student-management-system.png", alt: "Student Management System showing a table of student records with search and edit controls", width: 1080, height: 540 },
    visual: { variant: "editorial", accent: "#3B82F6" },
    brief:
      "Student records are easy to mishandle in loose files. This app keeps them in one place, with a table view, search and checks that reject incomplete or duplicate entries.",
    approach: [
      "Separated into model, validator, repository and UI classes so each part can be tested on its own.",
      "Records persist to a CSV file, so no database server or external libraries are needed.",
      "Includes automated tests for the repository layer and run scripts for Windows and macOS/Linux.",
    ],
    features: [
      "Add, update and delete students, with a delete confirmation",
      "Sortable table view",
      "Search by ID, name, age, email, phone or course",
      "Validation for required fields and duplicate data",
      "CSV persistence between sessions",
    ],
  },
  {
    slug: "assignment-tracker",
    title: "Assignment Tracker",
    category: "Web App",
    year: 2026,
    summary: "A Frappe app for tracking student assignments, submissions and marks.",
    description:
      "A personal project built as a Frappe Framework app. It models students, subjects, assignments and submissions so a teacher can see what is due and what has been handed in.",
    stack: ["Python", "Frappe Framework", "JavaScript"],
    concept: false,
    personal: true,
    repo: "https://github.com/Sinan313/assignment_tracker",
    visual: { variant: "dashboard", accent: "#60A5FA" },
    brief:
      "Keeping track of who has submitted which assignment, and when, gets messy in spreadsheets. This app gives each part its own record type and links them together.",
    approach: [
      "Defined four linked document types: Student, Subject, Assignment and Submission.",
      "Assignments link to a subject and carry a due date, maximum marks and instructions.",
      "Submissions link a student to an assignment and record the date, status, marks obtained, remarks and whether it was late.",
    ],
    features: [
      "Student records with roll number, email and batch",
      "Subjects with code and description",
      "Assignments with due dates and maximum marks",
      "Submissions with file attachment, marks and late flag",
      "Installs into a Frappe bench like any other app",
    ],
  },
  {
    slug: "c-tech-solutions",
    title: "C-Tech Solutions",
    category: "Website",
    year: 2025,
    summary: "A responsive front-end landing page for an online learning platform.",
    description:
      "A personal front-end project built with plain HTML, CSS and JavaScript: a multi-section website for an online learning platform, with about, impact, course, resource, fees and contact sections.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    concept: false,
    personal: true,
    repo: "https://github.com/Sinan313/c-tectsolutions",
    image: { src: "/images/c-tech-solutions.png", alt: "C-Tech Solutions landing page with navigation, headline and Explore Courses button", width: 1703, height: 793 },
    visual: { variant: "storefront", accent: "#3B82F6" },
    brief:
      "A learning platform needs to explain what it offers quickly. This project is a single-page front end covering the platform's courses, study resources, plans and contact details.",
    approach: [
      "Built without frameworks to keep the page light and the code easy to follow.",
      "Organised into clear sections: about, impact figures, learning resources, courses, fee plans and contact, with a detailed footer of quick links and popular resources.",
      "Includes searchable learning resources and sign-in and dashboard interface screens.",
    ],
    note: "The credentials, impact figures, addresses and phone numbers shown in this demo are sample content for a design exercise, not verified claims.",
    features: [
      "About section with mission statement and credentials block",
      "Impact statistics section",
      "Course and learning-resource sections",
      "Resource search",
      "Pricing plans section",
      "Contact section",
      "Account sign-in and dashboard interface screens",
    ],
  },
  {
    slug: "epic-studio",
    title: "EPIC STUDIO",
    category: "Website",
    year: 2026,
    summary: "A dark, neon-green single-page website for a creative studio offering posters, video and branding.",
    description:
      "A personal project: a mobile-first website for a freelance creative studio, with a services overview, portfolio gallery, process section and an enquiry form that opens a prefilled WhatsApp message.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    concept: false,
    personal: true,
    repo: "https://github.com/epicstudioep-creator/Epic-Studio",
    image: { src: "/images/epic-studio.png", alt: "EPIC STUDIO home page with the headline We Make Your Ideas Epic and service tags for posters, video, branding and thumbnails", width: 1871, height: 804 },
    note: "EPIC STUDIO is a separate creative studio from C-DESIGN. Its portfolio tiles are labelled as sample placeholders until real work is added.",
    visual: { variant: "editorial", accent: "#3B82F6" },
    brief:
      "A creative studio needs to show what it makes and make it easy to get in touch. This project is a single-page site covering the studio's services, work, process and enquiries.",
    approach: [
      "Built as a single page with a dark theme and neon-green accent, designed mobile-first.",
      "Services, portfolio entries, budget options and contact details are kept in editable config files.",
      "The enquiry form validates input and opens WhatsApp with a prefilled message, so it needs no backend.",
    ],
    features: [
      "Six services: poster design, video editing, logo and branding, social media design, thumbnails and promotional videos",
      "Portfolio gallery for images and video",
      "Process section and values",
      "Enquiry form with validation and WhatsApp handoff",
      "Custom 404 page, SEO and Open Graph metadata",
    ],
  },
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
