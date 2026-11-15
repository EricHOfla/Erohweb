import {
  Code,
  Layers,
  Database,
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  Terminal,
} from "lucide-react";

const technologies = [
  { name: "Next.js & React", category: "Frontend", icon: Layers },
  { name: "TypeScript", category: "Language", icon: Code },
  { name: "Node.js & APIs", category: "Backend", icon: Terminal },
  { name: "Python", category: "Data & AI", icon: Cpu },
  { name: "PostgreSQL", category: "Database", icon: Database },
  { name: "Mobile Apps", category: "Cross-Platform", icon: Smartphone },
  { name: "Cloud & DevOps", category: "Infrastructure", icon: Cloud },
  { name: "UI/UX Design", category: "Figma & Systems", icon: Palette },
];

export function TechStack() {
  return (
    <div className="tech-stack-wrap">
      <div className="tech-stack-head">
        <span className="tech-label">CORE TECHNOLOGIES & CAPABILITIES</span>
        <div className="tech-line" />
      </div>
      <div className="tech-grid">
        {technologies.map(({ name, category, icon: Icon }) => (
          <div key={name} className="tech-pill">
            <Icon size={16} className="tech-icon" />
            <div className="tech-info">
              <b>{name}</b>
              <small>{category}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
