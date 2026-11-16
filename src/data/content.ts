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
  note?: string;
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

export const products = [
  {
    slug: "eroh-shop",
    name: "E-ROH Shop",
    kind: "EROH Technology product",
    status: "E-commerce platform",
    summary:
      "A modern, high-performance e-commerce shopping platform developed by EROH Technology for digital commerce and retail.",
    description:
      "E-ROH Shop is an EROH Technology proprietary e-commerce shopping platform engineered for fast, secure online retail. It features dynamic product catalogues, instant search, streamlined checkout workflows, and automated inventory management architecture.",
    cta: "Enquire about E-ROH Shop",
  },
  {
    slug: "inzusync",
    name: "inzuSync",
    kind: "EROH Technology product",
    status: "Product spotlight",
    summary:
      "An EROH Technology product initiative. We are preparing clearer product information and updates for visitors interested in learning more.",
    description:
      "inzuSync is part of EROH Technology's own product direction. This page is an introduction rather than a feature or availability announcement; contact the team for verified product information and current updates.",
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
    link: "",
    liveLink: "https://erohshop.vercel.app/",
    tags: ["EROH Product", "E-commerce", "Shopping Platform"],
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
    link: "",
    liveLink: "https://progallery-theta.vercel.app/",
    tags: ["Open Source", "Frontend Engine"],
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

export const faqs = [
  [
    "What does EROH Technology do?",
    "EROH Technology works across technology services, its own digital product initiatives, training and innovation. Explore the relevant pages or contact us to discuss a specific need.",
  ],
  [
    "What services do you provide?",
    "Our service areas include website and software development, mobile applications, IT consulting and support, UI/UX design, and digital presence support.",
  ],
  [
    "What products does EROH Technology offer?",
    "Visit the Products page for current product information. Product features, availability and release details should be confirmed directly with our team.",
  ],
  [
    "How do I start a project with your team?",
    "Send us a short description of your goals, timeline and requirements. We can arrange an initial discussion and recommend a practical next step.",
  ],
  [
    "Do you work with startups and small businesses?",
    "You can contact us to discuss your needs, project scope and whether our services are a good fit.",
  ],
  [
    "Can you improve an existing website or application?",
    "Share the current website or product, what is not working and what you would like to improve.",
  ],
  [
    "Do you offer technology training?",
    "We list training areas on our Training page. Contact us to confirm current availability, format and programme details.",
  ],
  [
    "How much do your services cost?",
    "Pricing depends on scope, requirements and timeline. Contact us with a short brief and we can discuss an appropriate estimate.",
  ],
  [
    "Where are you based?",
    "EROH Technology is based in Kigali, Rwanda. Contact us to discuss collaboration.",
  ],
];
