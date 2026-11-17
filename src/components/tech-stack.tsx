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
} from "lucide-react";

const technologies = [
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
  { name: "Web Security & Auth", category: "Enterprise Defense", icon: Lock },
  { name: "Redis & Caching", category: "High Performance", icon: Boxes },
  { name: "Microservices & Queues", category: "Scalable Systems", icon: Workflow },
  { name: "DevOps & SRE Monitoring", category: "Uptime & Reliability", icon: ShieldCheck },
];

export function TechStack() {
  return (
    <div className="tech-stack-wrap">
      <div className="tech-stack-head">
        <span className="tech-label">CORE TECHNOLOGIES &amp; CAPABILITIES</span>
        <div className="tech-line" />
      </div>

      <div className="tech-slider-viewport">
        {/* Row 1: Leftward continuous scroll */}
        <div className="tech-marquee-track scroll-left">
          {/* Double the list for seamless infinite loop */}
          {[...technologies, ...technologies].map(({ name, category, icon: Icon }, idx) => (
            <div key={`${name}-${idx}`} className="tech-pill">
              <Icon size={18} className="tech-icon" />
              <div className="tech-info">
                <b>{name}</b>
                <small>{category}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward continuous scroll with reversed/alternate order for rich motion */}
        <div className="tech-marquee-track scroll-right">
          {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map(
            ({ name, category, icon: Icon }, idx) => (
              <div key={`rev-${name}-${idx}`} className="tech-pill">
                <Icon size={18} className="tech-icon" />
                <div className="tech-info">
                  <b>{name}</b>
                  <small>{category}</small>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
