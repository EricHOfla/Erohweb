"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SubnavItem {
  label: string;
  href: string;
  badge?: string | number;
}

interface SubnavProps {
  items: SubnavItem[];
  label?: string;
  className?: string;
}

export function Subnav({ items, label, className = "" }: SubnavProps) {
  const path = usePathname();
  const normalizedPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;

  return (
    <nav className={`subnavbar-container ${className}`} aria-label={label || "Sub-navigation"}>
      <div className="subnavbar-wrap">
        <div className="subnavbar-dock" role="navigation">
          {items.map((item) => {
            const isActive =
              item.href === "/"
                ? normalizedPath === "/"
                : normalizedPath === item.href || normalizedPath.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`subnav-pill ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && <span className="subnav-active-dot" aria-hidden="true" />}
                <span>{item.label}</span>
                {item.badge !== undefined && <span className="subnav-badge">{item.badge}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export const companySubnavItems: SubnavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Training", href: "/training" },
  { label: "FAQs", href: "/faq" },
];
