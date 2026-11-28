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
  /** Colour palette shown on the project page. */
  palette?: { name: string; hex: string }[];
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
    image: { src: "/images/assignment-tracker.png", alt: "Data-model diagram of the Assignment Tracker app showing the Student, Submission, Assignment and Subject records and how they link", width: 1600, height: 1000 },
    note: "The image is a diagram drawn from the app's record definitions, not a screenshot. The app's screens run inside a Frappe system.",
    visual: { variant: "dashboard", accent: "#60A5FA" },
    brief:
      "Keeping track of who has submitted which assignment, and when, gets messy in spreadsheets. This app gives each part its own record type and links them together.",
    approach: [
      "Defined four linked document types: Student, Subject, Assignment and Submission.",
      "Assignments link to a subject and carry a due date, maximum marks and instructions.",
      "Submissions link a student to an assignment and record the date, an attached file, marks obtained, remarks and whether it was late, with a status of Pending, Submitted or Graded.",
    ],
    features: [
      "Student records with roll number, email and batch (2024, 2025 or 2026)",
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
    slug: "meridian-travel",
    title: "Meridian",
    category: "Travel Website",
    year: 2026,
    summary: "A concept travel website for a fictional slow-travel brand, built around a trip search.",
    description:
      "A self-initiated landing page concept exploring how a travel brand could lead with a calm headline, a simple trip search and illustrated destination cards. The brand and destinations are fictional.",
    stack: ["Visual design", "HTML", "CSS", "SVG"],
    concept: true,
    image: { src: "/images/meridian-travel.png", alt: "Concept home page for Meridian travel with a Travel slower headline, a trip search bar and four illustrated destination cards", width: 1600, height: 1000 },
    palette: [
      { name: "Sand", hex: "#F6F1E7" },
      { name: "Navy", hex: "#0B2E45" },
      { name: "Coral", hex: "#FF6B4A" },
      { name: "Peach", hex: "#FFD9A8" },
    ],
    note: "Meridian is a fictional brand. Destinations, trip lengths and copy are sample content, and this is a visual design concept rather than a working booking site.",
    visual: { variant: "editorial", accent: "#3B82F6" },
    brief:
      "Meridian is a fictional brand created to practise travel design. The goal: make starting a trip search the obvious first step, while keeping the page calm and unhurried.",
    approach: [
      "A large two-tone headline sets the slow-travel tone, with coral used only for emphasis and actions.",
      "The search bar sits directly under the hero, with destination, dates and travellers as clear, separate fields.",
      "Illustrated destination cards use simple shapes and a shared palette, so they stay light and consistent without photography.",
      "Navy text on a sand background keeps contrast strong across the page.",
      "Designed to be built later with Next.js, TypeScript and Tailwind CSS.",
    ],
    features: [
      "Hero with headline and short supporting line",
      "Trip search bar with destination, dates and travellers",
      "Illustrated destination cards with trip length and style",
      "Clear primary call to action in the navigation",
      "Consistent four-colour palette",
    ],
  },
  {
    slug: "northwind-coffee",
    title: "Northwind Coffee",
    category: "E-commerce",
    year: 2026,
    summary: "A concept online store for a fictional specialty coffee roaster.",
    description:
      "A self-initiated storefront concept exploring how a small roaster could present its beans, subscriptions and brand with warm, editorial pacing. The brand, products and prices are fictional.",
    stack: ["Visual design", "HTML", "CSS", "SVG"],
    concept: true,
    image: { src: "/images/northwind-coffee.png", alt: "Concept home page for Northwind Coffee with three coffee bags, product cards and a subscription callout", width: 1600, height: 1000 },
    palette: [
      { name: "Cream", hex: "#F4EDE1" },
      { name: "Espresso", hex: "#2A1B12" },
      { name: "Terracotta", hex: "#C2562B" },
      { name: "Forest", hex: "#3B6B5A" },
    ],
    note: "Northwind Coffee is a fictional brand. Products, prices and tasting notes are sample content, and this is a visual design concept rather than a working store.",
    visual: { variant: "storefront", accent: "#3B82F6" },
    brief:
      "Northwind Coffee is a fictional brand created to practise e-commerce design. The goal: make choosing a coffee and starting a subscription feel simple and unhurried, on a phone as much as on a desktop.",
    approach: [
      "Product-first hero: three colour-coded bags show the range at a glance, with roast level and origin on every label.",
      "A serif headline and a warm, earthy palette give the brand a crafted feel, while sans-serif body text keeps product details easy to read.",
      "Product cards pair a colour swatch with tasting notes, size and price, so beans can be compared without opening each page.",
      "A dark subscription callout sits in the same row as the products, making recurring orders a visible choice, not an afterthought.",
      "Designed to be built later with Next.js, TypeScript and Tailwind CSS.",
    ],
    features: [
      "Hero with product packaging illustration",
      "Product cards with tasting notes, size and price",
      "Subscription call to action",
      "Cart indicator in the navigation",
      "Clear contrast between text and background colours",
    ],
  },
  {
    slug: "atlas-analytics",
    title: "Atlas Analytics",
    category: "UI/UX Design",
    year: 2026,
    summary: "A concept marketing site and dashboard UI for a fictional SaaS product.",
    description:
      "A self-initiated exploration of how to explain a data product clearly: a landing-page hero paired with a dashboard interface study in the C-DESIGN dark, electric-blue style. The product and all figures are fictional.",
    stack: ["Visual design", "HTML", "CSS", "SVG"],
    concept: true,
    image: { src: "/images/atlas-analytics.png", alt: "Concept landing page for Atlas Analytics with a headline and a dark dashboard showing four metrics, a line chart and a bar chart", width: 1600, height: 1000 },
    palette: [
      { name: "Background", hex: "#09090B" },
      { name: "Surface", hex: "#15151B" },
      { name: "Blue", hex: "#2563EB" },
      { name: "Light blue", hex: "#60A5FA" },
    ],
    note: "Atlas Analytics is a fictional product. All numbers in the dashboard are sample data, and this is a visual design concept rather than a working application.",
    visual: { variant: "dashboard", accent: "#2563EB" },
    brief:
      "Atlas Analytics does not exist. It is a design exercise in communicating complex information through hierarchy, spacing and restrained colour.",
    approach: [
      "One clear value proposition above the fold, in a two-line headline with the key phrase highlighted.",
      "The product preview sits directly under the headline, so the interface itself explains what the product does.",
      "Four key metrics lead the dashboard, followed by one trend chart and one comparison chart, so the most important numbers are read first.",
      "A single blue accent family marks data and actions, with neutral greys for everything else, so charts stay legible on a dark surface.",
      "Designed to be built later with Next.js, TypeScript, Tailwind CSS and a charting library.",
    ],
    features: [
      "Landing page hero with a primary call to action",
      "Dashboard overview with four KPI cards",
      "Area chart and bar chart styles",
      "Sidebar navigation pattern",
      "Dark-mode colour tokens",
    ],
  },
  {
    slug: "lumen-clinic",
    title: "Lumen Clinic",
    category: "Business Website",
    year: 2026,
    summary: "A concept website for a fictional local health clinic.",
    description:
      "A self-initiated business website concept focused on trust, clarity and making it easy to find services and book an appointment. The clinic and its details are fictional.",
    stack: ["Visual design", "HTML", "CSS", "SVG"],
    concept: true,
    image: { src: "/images/lumen-clinic.png", alt: "Concept home page for Lumen Clinic with a headline, appointment cards and four service cards in soft teal tones", width: 1600, height: 1000 },
    palette: [
      { name: "Mist", hex: "#F3F8F7" },
      { name: "Deep green", hex: "#12302D" },
      { name: "Teal", hex: "#1F8A7D" },
      { name: "Soft teal", hex: "#CFE9E4" },
    ],
    note: "Lumen Clinic is a fictional practice. Services, appointment times and all other details are sample content, and this is a visual design concept rather than a working website.",
    visual: { variant: "editorial", accent: "#60A5FA" },
    brief:
      "Lumen Clinic is a fictional practice used to explore how a service business can look credible and approachable online, where patients want answers quickly and are often anxious.",
    approach: [
      "A friendly, plain-language headline and a single prominent call to action to book an appointment, repeated in the navigation.",
      "Soft teal tones and rounded shapes keep the page calm; strong dark text keeps it easy to read.",
      "Small cards for the next available appointment and new-patient registration answer the two most common questions straight away.",
      "Four service cards with short descriptions, so visitors can find the right kind of care without reading long pages.",
      "Designed to be built later with Next.js, TypeScript and Tailwind CSS.",
    ],
    features: [
      "Hero with booking call to action",
      "Next-available appointment card",
      "New-patient registration prompt",
      "Service cards for four care areas",
      "Accessible navigation and high text contrast",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
