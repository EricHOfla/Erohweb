import {
  Code,
  Layers,
  Database,
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  Terminal,
  ShieldCheck,
  Globe,
  Server,
  Zap,
  GitBranch,
  Boxes,
  Lock,
  Workflow,
  Radio,
  FileCode,
  Binary,
  HardDrive,
  Network,
  Activity,
  CreditCard,
  Bot,
} from "lucide-react";

// Track 1 Technologies (12 items)
const track1 = [
  { name: "Next.js 16 & React", category: "Modern Frontend", icon: Layers },
  { name: "TypeScript", category: "Type-Safe Core", icon: Code },
  { name: "Node.js & Express", category: "Backend Runtime", icon: Terminal },
  { name: "Python & FastAPI", category: "Data & AI Services", icon: Cpu },
  { name: "PostgreSQL & Prisma", category: "Relational DB", icon: Database },
  { name: "React Native & Flutter", category: "Mobile Apps", icon: Smartphone },
  { name: "Docker & Linux VPS", category: "Containerization", icon: Server },
  { name: "Cloudflare & CDN", category: "Edge & Security", icon: Globe },
  { name: "AWS & Vercel Cloud", category: "Cloud Hosting", icon: Cloud },
  { name: "REST & GraphQL APIs", category: "System Integration", icon: Zap },
  { name: "CI/CD & GitHub Actions", category: "DevOps Automation", icon: GitBranch },
  { name: "UI/UX & Design Systems", category: "Figma Architecture", icon: Palette },
];

// Track 2 Technologies (12 items)
const track2 = [
  { name: "Web Security & OAuth", category: "Enterprise Defense", icon: Lock },
  { name: "Redis & In-Memory Cache", category: "High Performance", icon: Boxes },
  { name: "Microservices & Message Queues", category: "Scalable Systems", icon: Workflow },
  { name: "DevOps & SRE Monitoring", category: "Uptime & Observability", icon: ShieldCheck },
  { name: "Nginx & Reverse Proxies", category: "Server Infrastructure", icon: Network },
  { name: "Tailwind CSS & Modern CSS", category: "Design Architecture", icon: FileCode },
  { name: "WebSockets & Real-Time", category: "Live Event Streams", icon: Radio },
  { name: "MongoDB & NoSQL", category: "Document Storage", icon: HardDrive },
  { name: "Payment Gateways & MoMo", category: "Fintech Integrations", icon: CreditCard },
  { name: "AI Automation & LLMs", category: "Intelligent Workflows", icon: Bot },
  { name: "Performance & Core Web Vitals", category: "Speed Optimization", icon: Activity },
  { name: "System Architecture", category: "Clean Code & Design", icon: Binary },
];

export function TechStack() {
  return (
    <div className="tech-stack-wrap">
      <div className="tech-stack-head">
        <span className="tech-label">CORE TECHNOLOGIES &amp; ARCHITECTURAL CAPABILITIES</span>
        <div className="tech-line" />
      </div>

      <div className="tech-slider-viewport">
        {/* Row 1: Leftward continuous scroll */}
        <div className="tech-marquee-track scroll-left">
          {[...track1, ...track1].map(({ name, category, icon: Icon }, idx) => (
            <div key={`t1-${name}-${idx}`} className="tech-pill">
              <Icon size={18} className="tech-icon" />
              <div className="tech-info">
                <b>{name}</b>
                <small>{category}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward continuous scroll */}
        <div className="tech-marquee-track scroll-right">
          {[...track2, ...track2].map(({ name, category, icon: Icon }, idx) => (
            <div key={`t2-${name}-${idx}`} className="tech-pill">
              <Icon size={18} className="tech-icon" />
              <div className="tech-info">
                <b>{name}</b>
                <small>{category}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
