"use client";

import { useState } from "react";
import {
  Compass,
  Layers,
  Code2,
  Rocket,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const lifecycleSteps = [
  {
    step: "01",
    phase: "Discovery & Blueprint",
    tagline: "Define & Strategize",
    icon: Compass,
    description:
      "We dissect your business goals, map user workflows, and architect a scalable system blueprint before writing a single line of code.",
    deliverables: [
      "Technical architecture document",
      "Database schema & API spec",
      "Milestone & delivery roadmap",
    ],
    highlight: "Zero guesswork",
  },
  {
    step: "02",
    phase: "UI/UX & Prototyping",
    tagline: "Design & Validate",
    icon: Layers,
    description:
      "Crafting intuitive design systems and high-fidelity interactive prototypes that stakeholders and users can experience and refine early.",
    deliverables: [
      "Figma design system & tokens",
      "Interactive clickable prototypes",
      "Accessibility & responsive standards",
    ],
    highlight: "Human-centered",
  },
  {
    step: "03",
    phase: "Engineering & Sprints",
    tagline: "Build & Iterate",
    icon: Code2,
    description:
      "Full-stack development using Next.js, TypeScript, and clean modular APIs with continuous code reviews and test-driven validation.",
    deliverables: [
      "Modern full-stack codebase",
      "Automated CI/CD pipelines",
      "End-to-end unit & integration tests",
    ],
    highlight: "Type-safe clean code",
  },
  {
    step: "04",
    phase: "Deployment & Scale",
    tagline: "Launch & Monitor",
    icon: Rocket,
    description:
      "Zero-downtime production launch on cloud infrastructure with 24/7 telemetry, automated backups, and post-launch optimization.",
    deliverables: [
      "Containerized production rollout",
      "Uptime & error monitoring alerts",
      "Knowledge handover & documentation",
    ],
    highlight: "Enterprise reliability",
  },
];

export function CircularProcess() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = lifecycleSteps[activeIdx];
  const ActiveIcon = activeStep.icon;

  return (
    <div className="circular-process-container">
      {/* Central Interactive Orbit Node */}
      <div className="process-orbit-stage">
        <div className="process-orbit-ring" aria-hidden="true">
          <div className="process-pulse-dot" />
        </div>

        {/* Center Hub */}
        <div className="process-orbit-hub">
          <div className="hub-badge">
            <Sparkles size={14} />
            <span>EROH LIFECYCLE</span>
          </div>
          <span className="hub-step-num">{activeStep.step}</span>
          <b className="hub-phase-title">{activeStep.phase}</b>
          <small className="hub-phase-tag">{activeStep.highlight}</small>
        </div>

        {/* 4 Interactive Orbit Satellite Buttons */}
        {lifecycleSteps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = idx === activeIdx;
          return (
            <button
              key={s.step}
              type="button"
              className={`orbit-node node-pos-${idx} ${isActive ? "active" : ""}`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Step ${s.step}: ${s.phase}`}
            >
              <span className="node-num">{s.step}</span>
              <Icon size={20} className="node-icon" />
              <span className="node-tooltip">{s.phase}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card corresponding to selected step */}
      <div className="process-detail-card">
        <div className="detail-card-header">
          <div className="detail-icon-box">
            <ActiveIcon size={24} />
          </div>
          <div>
            <span className="detail-eyebrow">STEP {activeStep.step} · {activeStep.tagline}</span>
            <h3 className="detail-title">{activeStep.phase}</h3>
          </div>
        </div>

        <p className="detail-description">{activeStep.description}</p>

        <div className="detail-deliverables">
          <span className="deliverables-heading">Core Milestones &amp; Deliverables:</span>
          <ul className="deliverables-list">
            {activeStep.deliverables.map((item) => (
              <li key={item}>
                <Check size={14} className="deliverable-check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Stepper Bar */}
        <div className="process-step-nav">
          {lifecycleSteps.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              className={`step-nav-pill ${idx === activeIdx ? "active" : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              <b>{step.step}</b> {step.phase.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
