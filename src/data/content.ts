export interface ProjectItem {
  slug: string;
  title: string;
  type: string;
  status: string;
  image: string;
  summary: string;
  detail: string;
  link: string;
  liveLink?: string;
  tags: string[];
  technologies?: string[];
  note?: string;
  role?: string;
  highlights?: string[];
}

export interface ProductItem {
  slug: string;
  name: string;
  kind: string;
  status: string;
  badge: string;
  image: string;
  summary: string;
  description: string;
  features: string[];
  technologies: string[];
  cta: string;
  demoUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Development" | "Deployment & Cloud" | "Pricing & Process";
}

export const site = {
  name: "EROH Technology",
  legal: "EROH Technology Ltd",
  email: "info@erohtech.com",
  phone: "+250 785 263 931",
  phoneLink: "+250785263931",
  whatsapp: "https://wa.me/250785263931",
  location: "Kigali, Rwanda",
  description:
    "EROH Technology is a Kigali-based technology company working across digital services, products, training and innovation.",
  social: {
    github: "https://github.com/EricHOfla",
    linkedin: "https://www.linkedin.com/in/erichofla",
  },
};

export const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Products", "/products"],
  ["Projects", "/projects"],
  ["Team", "/team"],
  ["Training", "/training"],
] as const;

export const services = [
  {
    title: "Website design & development",
    group: "Web",
    text: "Responsive websites and digital experiences that explain your value clearly and help customers take the next step.",
    items: [
      "Business and corporate websites",
      "Landing pages and portfolios",
      "E-commerce experiences",
      "Performance and accessibility",
    ],
  },
  {
    title: "Custom software development",
    group: "Software",
    text: "Purpose-built software for organisations that need digital tools shaped around their own processes and users.",
    items: [
      "Business applications and portals",
      "Dashboards and workflow tools",
      "API and system integration",
      "Modernisation of existing systems",
    ],
  },
  {
    title: "Mobile application development",
    group: "Mobile",
    text: "Mobile application planning and development focused on useful, accessible experiences.",
    items: [
      "Product discovery and planning",
      "Cross-platform app development",
      "API and service integration",
      "Testing and release preparation",
    ],
  },
  {
    title: "IT consulting & support",
    group: "IT",
    text: "Practical support to help teams make informed technology decisions and keep their IT environment working.",
    items: [
      "IT assessments and planning",
      "Systems and network support",
      "Cloud and productivity tools",
      "Technical documentation",
    ],
  },
  {
    title: "UI/UX & graphic design",
    group: "Design",
    text: "Clear visual communication and user experiences that make digital products easier to understand and use.",
    items: [
      "User flows and wireframes",
      "Interface and interaction design",
      "Brand and marketing graphics",
      "Design systems",
    ],
  },
  {
    title: "Digital presence & growth",
    group: "Digital",
    text: "Support for organisations looking to improve how they present themselves and reach people online.",
    items: [
      "Search visibility foundations",
      "Social media and content planning",
      "Website content structure",
      "Digital campaign planning",
    ],
  },
];

export const engineeringProcess = [
  {
    step: "01",
    title: "Discovery & Architecture",
    tagline: "Problem definition & system blueprint",
    description:
      "We dissect organizational goals, analyze target user personas, and establish a rock-solid technical specification before writing code.",
    deliverables: ["Architecture blueprint", "Database schema plan", "API specification", "Milestone roadmap"],
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    tagline: "High-fidelity interaction design",
    description:
      "We craft intuitive, accessible visual systems and clickable interactive prototypes that stakeholders can test and validate early.",
    deliverables: ["Design tokens & system", "Interactive Figma prototypes", "Responsive layouts", "Accessibility compliance"],
  },
  {
    step: "03",
    title: "Scalable Engineering",
    tagline: "Clean code & rigorous QA testing",
    description:
      "We build modern frontend and backend architectures with TypeScript, Next.js, and secure APIs, accompanied by automated testing and performance tuning.",
    deliverables: ["Production TypeScript code", "REST/GraphQL API endpoints", "Automated test suites", "Sub-second load times"],
  },
  {
    step: "04",
    title: "Cloud Deployment & DevOps",
    tagline: "Zero-downtime releases & monitoring",
    description:
      "We provision resilient cloud infrastructure with automated CI/CD pipelines, SSL certificates, backup automation, and proactive monitoring.",
    deliverables: ["Automated CI/CD pipeline", "Docker containerization", "Cloud hosting & SSL setup", "24/7 uptime telemetry"],
  },
];

export const impactMetrics = [
  { value: "100%", label: "On-Time Delivery", detail: "Milestone-driven agile methodology" },
  { value: "<1.2s", label: "Average Page Load", detail: "Optimized Next.js & Turbopack SSR" },
  { value: "99.9%", label: "Cloud Uptime", detail: "Production DevOps & monitoring" },
  { value: "24/7", label: "Direct Support", detail: "Kigali & East Africa technical team" },
];

export const products: ProductItem[] = [
  {
    slug: "eroh-shop",
    name: "E-ROH Shop",
    kind: "EROH Technology product",
    status: "E-commerce platform",
    badge: "LIVE PLATFORM",
    image: "/images/pro.jpg",
    summary:
      "A modern, high-performance e-commerce shopping platform developed by EROH Technology for digital commerce and retail.",
    description:
      "E-ROH Shop is an EROH Technology proprietary digital shopping platform engineered for fast, secure online commerce. It features dynamic product discovery, intuitive shopping cart workflows, responsive checkout flows, and automated inventory management architecture.",
    features: [
      "Real-time catalogue search & filter engine",
      "Frictionless cart & multi-currency checkout flows",
      "Mobile money & card payment integrations",
      "Merchant dashboard with live inventory telemetry",
      "Fully responsive mobile-first shopping experience",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Cloudflare"],
    cta: "Enquire about E-ROH Shop",
    demoUrl: "https://erohshop.vercel.app/",
  },
  {
    slug: "inzusync",
    name: "inzuSync",
    kind: "EROH Technology product",
    status: "Product spotlight",
    badge: "SaaS INITIATIVE",
    image: "/images/Project1.png",
    summary:
      "An EROH Technology property management and asset synchronization SaaS initiative.",
    description:
      "inzuSync is part of EROH Technology's own product direction, addressing modern real estate and property operations. It centralizes asset synchronization, tenant communication, digital rent schedules, and maintenance dispatching into one clean interface.",
    features: [
      "Centralized property & asset synchronisation",
      "Automated digital rent & lease tracking",
      "Tenant self-service communication portal",
      "Maintenance request dispatch & contractor logs",
      "Real-time revenue, occupancy & yield analytics",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    cta: "Ask about inzuSync",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "eroh-shop",
    title: "E-ROH Shop",
    type: "EROH Product",
    status: "Proprietary Product",
    image: "/images/pro.jpg",
    summary:
      "E-commerce shopping platform developed as an in-house EROH Technology product.",
    detail:
      "E-ROH Shop is an in-house e-commerce shopping platform developed by EROH Technology. It features dynamic product discovery, modern cart and checkout flows, and comprehensive administrative controls.",
    link: "/products",
    liveLink: "https://erohshop.vercel.app/",
    tags: ["EROH Product", "E-commerce", "Shopping Platform"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    role: "Conceived and developed as an in-house EROH Technology product.",
    highlights: ["Online product discovery", "Shopping cart and checkout experience", "Retail-focused digital platform"],
  },
  {
    slug: "eroh-tech-portfolio",
    title: "EROH Tech Portfolio",
    type: "Developed Project",
    status: "Production Showcase",
    image: "/images/Project1.png",
    summary:
      "Developer Portfolio & Tech Hub showcasing digital solutions, engineering capabilities, and client workflows.",
    detail:
      "A modern developer portfolio and digital hub built to articulate technical capabilities, showcase developed platforms, and establish a high-trust digital presence for EROH Technology.",
    link: "https://oflatech.vercel.app/",
    liveLink: "https://oflatech.vercel.app/",
    tags: ["Developer Portfolio", "Tech Hub", "Web Development"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
    role: "Designed, architected and deployed as EROH Technology's showcase platform.",
    highlights: ["Interactive portfolio interface", "Modern dark-mode aesthetic", "Seamless project case studies"],
  },
  {
    slug: "npcrwanda",
    title: "NPCRwanda",
    type: "Developed Project",
    status: "Web & Administration",
    image: "/images/p4.jpg",
    summary: "Website and administration platform.",
    detail:
      "A tailored digital platform engineered for NPCRwanda combining an accessible public website with a secure administrative control system for managing organizational communications, public notices, and content updates.",
    link: "",
    liveLink: "https://npcrwanda.org",
    tags: ["Website", "Administration Platform", "Full-Stack Development"],
    technologies: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "PostgreSQL"],
    role: "Website and platform development for NPCRwanda.",
    highlights: ["Public-facing organisational website", "Administrative content management", "Digital communication and information publishing"],
  },
  {
    slug: "progallery",
    title: "ProGallery",
    type: "Developed Project",
    status: "Open Source",
    image: "/images/Project1.png",
    summary:
      "Developer Portfolio & Tech Hub interactive media and project gallery system.",
    detail:
      "An open-source, modular image and media presentation gallery engineered for developers and design portfolios with fluid transitions and responsive layouts. Full codebase accessible on GitHub.",
    link: "https://github.com/EricHOfla/ProGallery",
    liveLink: "https://progallery-theta.vercel.app/",
    tags: ["Open Source", "Frontend Engine"],
    technologies: ["React", "TypeScript", "CSS Modules", "HTML5 Canvas", "Vercel"],
    role: "Designed and developed the project as a reusable web gallery experience.",
    highlights: ["Interactive media presentation", "Responsive gallery layouts", "Portfolio-oriented project showcase"],
  },
  {
    slug: "chemovigi",
    title: "Chemovigi",
    type: "Deployment Experience",
    status: "Deployment Only",
    image: "/images/bg.jpg",
    summary:
      "Deployment and cloud infrastructure support (Deployment only; not presented as a project developed by EROH Tech).",
    detail:
      "Production environment provisioning, build automation, web server configuration, and continuous deployment workflows for Chemovigi. Please note: This work represents deployment and infrastructure support only and is not presented as a project developed by EROH Tech.",
    note: "Deployment only; not presented as a project developed by EROH Tech.",
    link: "",
    liveLink: "https://chemovigi.com/",
    tags: ["Cloud Deployment", "DevOps", "Infrastructure"],
    technologies: ["Docker", "Nginx", "Linux/Ubuntu", "CI/CD Workflows", "Cloudflare", "SSL/TLS"],
    role: "Deployment and infrastructure support only; the website itself was not developed by EROH Technology.",
    highlights: ["Production environment setup", "Web server configuration", "Deployment workflow support"],
  },
  {
    slug: "health-lab",
    title: "Health Lab",
    type: "Deployment Experience",
    status: "Deployment Only",
    image: "/images/pr5.jpg",
    summary:
      "Production deployment and hosting infrastructure (Deployment only; not presented as a project developed by EROH Tech).",
    detail:
      "Environment setup, web server hosting, and production deployment configuration for Health Lab. Please note: This work represents deployment and hosting support only and is not presented as a project developed by EROH Tech.",
    note: "Deployment only; not presented as a project developed by EROH Tech.",
    link: "",
    liveLink: "https://healthlab.rw/",
    tags: ["Production Hosting", "Cloud Infrastructure", "Deployment"],
    technologies: ["Docker", "Node.js", "Nginx", "PostgreSQL", "Cloud VPS", "Automated Backups"],
    role: "Hosting and production deployment support only; the website itself was not developed by EROH Technology.",
    highlights: ["Production hosting setup", "Server and environment configuration", "Deployment support"],
  },
  {
    slug: "agrotech-concept",
    title: "AgroTech",
    type: "Product Concept",
    status: "Concept Showcase",
    image: "/images/pro.jpg",
    summary:
      "A concept for using digital tools to make agricultural information and services easier to access.",
    detail:
      "An early concept exploring how a digital platform could help connect agricultural information and services. This is presented as a concept, not a deployed product.",
    link: "",
    tags: ["Product thinking", "Agriculture"],
    technologies: ["Product Design", "Figma", "Information Architecture", "Mobile First"],
    role: "An EROH Technology product concept, not a launched or deployed service.",
    highlights: ["Agricultural information access", "Potential digital service connections", "Early-stage product exploration"],
  },
  {
    slug: "techhealth-concept",
    title: "TechHealth",
    type: "Product Concept",
    status: "Concept Showcase",
    image: "/images/pr5.jpg",
    summary:
      "A concept exploring more accessible digital experiences for health-related information and services.",
    detail:
      "A concept exploring how thoughtful software and clear user experiences could improve access to health-related information. This is not a live healthcare service.",
    link: "",
    tags: ["Product thinking", "Digital health"],
    technologies: ["Healthcare UX", "Figma", "Accessibility (WCAG 2.1)", "Cloud Strategy"],
    role: "An EROH Technology product concept, not a live healthcare service.",
    highlights: ["Health information accessibility", "Clear and user-friendly digital experiences", "Early-stage product exploration"],
  },
];

export const team = [
  {
    name: "Eric H. Ofla",
    role: "CEO & Founder",
    image: "/images/team1.jpeg",
    email: "ericofla1@gmail.com",
    linkedin: "https://www.linkedin.com/in/erichofla",
    bio: "Leads the company's direction and brings a software development perspective to digital product delivery.",
  },
  {
    name: "Jabo Jean Marie",
    role: "Software Engineer Manager",
    image: "/images/team5.png",
    email: "jabojeanmarie@gmail.com",
    linkedin: "https://www.linkedin.com/in/jabo-jean-marie-9b432722b/",
    bio: "Supports software engineering delivery and the coordination of development work.",
  },
  {
    name: "FURAH Ben",
    role: "UI/UX Design",
    image: "/images/IMG-20230119-WA0003.jpg",
    email: "furahben44@gmail.com",
    linkedin: "",
    bio: "Focuses on user interface and experience design for digital products.",
  },
  {
    name: "Fabrice Iduhire",
    role: "Chief Technical Officer",
    image: "/images/team3.jpeg",
    email: "fabriceiduhire@gmail.com",
    linkedin: "",
    bio: "Supports technical direction and the delivery of technology solutions.",
  },
];

export const courses = [
  {
    title: "Web Development",
    level: "Beginner to intermediate",
    text: "Learn the foundations of building responsive, accessible websites and modern web applications.",
    topics: [
      "HTML, CSS and JavaScript",
      "Responsive layouts",
      "Frontend frameworks",
      "Working with APIs",
    ],
  },
  {
    title: "Mobile Application Development",
    level: "Beginner to intermediate",
    text: "Understand the process of planning, building and testing mobile applications.",
    topics: [
      "App fundamentals",
      "Interface design",
      "Application logic",
      "Testing and release",
    ],
  },
  {
    title: "Digital Skills & SEO",
    level: "Beginner",
    text: "Build practical skills for improving a brand's online presence and discoverability.",
    topics: [
      "Digital presence",
      "Search fundamentals",
      "Content optimisation",
      "Measurement basics",
    ],
  },
];

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  org: string;
  initials: string;
}

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "EROH Technology built our administration platform from scratch and the results were beyond our expectations. Clear communication, solid delivery.",
    name: "NPCR Rwanda",
    role: "Platform Partner",
    org: "NPCRwanda",
    initials: "NR",
  },
  {
    quote:
      "They handled the full deployment of our health platform reliably and professionally. We would work with them again without hesitation.",
    name: "Health Lab Team",
    role: "Deployment Client",
    org: "Health Lab",
    initials: "HL",
  },
  {
    quote:
      "The E-ROH Shop showcases exactly what a modern e-commerce experience should feel like. Fast, clean, and user-first.",
    name: "Internal Review",
    role: "Product Launch",
    org: "EROH Technology",
    initials: "ET",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What does EROH Technology do?",
    answer:
      "EROH Technology works across custom software engineering, digital product initiatives, cloud deployment, IT consulting, and technology training.",
    category: "General",
  },
  {
    question: "What services do you provide?",
    answer:
      "Our services include website design and development, bespoke software systems, mobile applications, cloud deployment & DevOps, UI/UX design, and IT support.",
    category: "Development",
  },
  {
    question: "What products does EROH Technology offer?",
    answer:
      "We operate proprietary products including E-ROH Shop (our e-commerce retail platform) and inzuSync (our property management and asset synchronization SaaS initiative).",
    category: "General",
  },
  {
    question: "How do I start a project with your team?",
    answer:
      "Send us a short summary of your requirements using our contact form or directly via WhatsApp. We arrange a discovery consultation within 24 hours to discuss architecture, timeline, and an accurate estimate.",
    category: "Pricing & Process",
  },
  {
    question: "Do you work with startups, SMEs, and international clients?",
    answer:
      "Yes. We collaborate with early-stage founders, established enterprises, and non-profits in Rwanda, East Africa, and internationally.",
    category: "General",
  },
  {
    question: "Can you improve or modernize an existing website or application?",
    answer:
      "Yes. We perform legacy audits, UI/UX redesigns, framework migrations (e.g. to Next.js/React), API refactoring, and cloud performance optimizations.",
    category: "Development",
  },
  {
    question: "What cloud and deployment platforms do you support?",
    answer:
      "We configure and maintain production environments on Docker, Ubuntu/Linux VPS, Cloudflare, Vercel, AWS, Nginx, and automated GitHub Actions CI/CD pipelines.",
    category: "Deployment & Cloud",
  },
  {
    question: "What is your typical project delivery timeline?",
    answer:
      "Timelines depend on scope: landing pages and corporate sites typically take 2-3 weeks; complex custom web or mobile applications range from 4 to 8 weeks with phased milestones.",
    category: "Pricing & Process",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Every project is customized to scope, technical complexity, and timeline. Contact us for a structured proposal and clear cost breakdown tailored to your budget.",
    category: "Pricing & Process",
  },
  {
    question: "Do you provide post-launch maintenance and DevOps support?",
    answer:
      "Yes. We offer continuous SLAs, proactive server uptime monitoring, security patch updates, database backups, and feature enhancements.",
    category: "Deployment & Cloud",
  },
  {
    question: "Do you offer hands-on technology training?",
    answer:
      "Yes. We provide focused practical training in Web Development, Mobile Application Development, and Digital Skills & SEO. Contact us for upcoming cohort details.",
    category: "General",
  },
  {
    question: "Where is EROH Technology based?",
    answer:
      "EROH Technology is headquartered in Kigali, Rwanda, delivering technology solutions across East Africa and globally.",
    category: "General",
  },
];
