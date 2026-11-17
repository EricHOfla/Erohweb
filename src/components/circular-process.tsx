"use client";

import { useState } from "react";
import {
  Compass,
  Palette,
  Code2,
  Rocket,
  Check,
  Sparkles,
} from "lucide-react";

export const lifecycleSteps = [
  {
    step: "01",
    phase: "Discovery & Planning",
    tagline: "Requirements & Strategy",
    icon: Compass,
    description:
      "We begin by understanding your business objectives, gathering core requirements, conducting user research, and outlining the technical architecture.",
    deliverables: [
      "Requirements gathering & analysis",
      "System architecture blueprint",
      "Milestone & delivery roadmap",
    ],
    highlight: "Clear Roadmap",
  },
  {
    step: "02",
    phase: "UI/UX & Prototyping",
    tagline: "Design & Experience",
    icon: Palette,
    description:
      "Crafting intuitive user journeys, wireframes, and high-fidelity Figma prototypes so stakeholders and users can experience and validate the product early.",
    deliverables: [
      "User flows & wireframes",
      "Interactive Figma prototypes",
      "Design systems & responsive layouts",
    ],
    highlight: "Validated Design",
  },
  {
    step: "03",
    phase: "Development & Testing",
    tagline: "Code & Quality Assurance",
    icon: Code2,
    description:
      "Full-stack engineering combined with continuous quality assurance: coding, API integrations, automated unit tests, and rigorous bug fixing in tight sprints.",
    deliverables: [
      "Modern full-stack codebase",
      "REST & GraphQL API integrations",
      "Unit, API & end-to-end QA tests",
    ],
    highlight: "Continuous QA",
  },
  {
    step: "04",
    phase: "Deployment & Maintenance",
    tagline: "Launch & Support",
    icon: Rocket,
    description:
      "Zero-downtime production deployment to cloud infrastructure, followed by proactive server monitoring, security updates, and ongoing technical support.",
    deliverables: [
      "Cloud production release & CI/CD",
      "24/7 uptime & health monitoring",
      "Ongoing updates & SLA support",
    ],
    highlight: "Long-term Support",
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
            <span>4-STAGE PROCESS</span>
          </div>
          <span className="hub-step-num">{activeStep.step}</span>
          <b className="hub-phase-title">{activeStep.phase}</b>
          <small className="hub-phase-tag">{activeStep.highlight}</small>
        </div>

        {/* 4 Cardinal Orbit Nodes (Top, Right, Bottom, Left) */}
        {lifecycleSteps.map((s, idx) => {
          const Icon = s.icon;
          const isActive = idx === activeIdx;

          return (
            <button
              key={s.step}
              type="button"
              className={`orbit-node node-pos-${idx} ${isActive ? "active" : ""}`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Stage ${s.step}: ${s.phase}`}
            >
              <span className="node-num">{s.step}</span>
              <Icon size={20} className="node-icon" />
              <span className="node-tooltip">{s.phase}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Card corresponding to selected stage */}
      <div className="process-detail-card">
        <div className="detail-card-header">
          <div className="detail-icon-box">
            <ActiveIcon size={24} />
          </div>
          <div>
            <span className="detail-eyebrow">STAGE {activeStep.step} · {activeStep.tagline}</span>
            <h3 className="detail-title">{activeStep.phase}</h3>
          </div>
        </div>

        <p className="detail-description">{activeStep.description}</p>

        <div className="detail-deliverables">
          <span className="deliverables-heading">Core Activities &amp; Deliverables:</span>
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
