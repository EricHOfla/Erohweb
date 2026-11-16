"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, Code2 } from "lucide-react";
import { projects } from "@/data/content";

export function ProjectList() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");

  const categories = useMemo(() => {
    const types = Array.from(new Set(projects.map((p) => p.type)));
    return [
      { name: "All", count: projects.length },
      ...types.map((type) => ({
        name: type,
        count: projects.filter((p) => p.type === type).length,
      })),
    ];
  }, []);

  const rows = useMemo(() => {
    const query = q.toLowerCase().trim();
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.type === filter;
      const searchable =
        `${p.title} ${p.summary} ${p.type} ${p.status} ${p.tags.join(" ")} ${p.note || ""}`.toLowerCase();
      const matchesSearch = query === "" || searchable.includes(query);
      return matchesFilter && matchesSearch;
    });
  }, [filter, q]);

  return (
    <>
      <div className="project-tools">
        {/* Project Filter Chips with Live Category Badges */}
        <div className="filters" role="tablist" aria-label="Project Categories">
          {categories.map((c) => (
            <button
              key={c.name}
              type="button"
              className={filter === c.name ? "chip selected" : "chip"}
              onClick={() => setFilter(c.name)}
              role="tab"
              aria-selected={filter === c.name}
            >
              <span>{c.name}</span>
              <span className="chip-badge">{c.count}</span>
            </button>
          ))}
        </div>

        <label className="search">
          <Search size={16} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects..."
          />
        </label>
      </div>

      <div className="results-count">
        <small>
          Showing <b>{rows.length}</b> of <b>{projects.length}</b> projects
        </small>
      </div>

      {rows.length ? (
        <div className="project-grid">
          {rows.map((p) => (
            <article className="project-card" key={p.slug}>
              <Link className="project-image project-placeholder" href={`/projects/${p.slug}`} aria-label={`View ${p.title} project`}>
                <Code2 className="project-code-icon" aria-hidden="true" size={68} strokeWidth={2.1} />
                <span className="project-status-pill">{p.status}</span>
              </Link>
              <div className="project-body">
                <small>{p.type}</small>
                <h3>
                  <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                </h3>
                <p>{p.summary}</p>
                {p.note && <div className="project-note-badge">{p.note}</div>}
                <Link className="text-link" href={`/projects/${p.slug}`}>
                  Explore project <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No matching projects</h3>
          <p>Try another category or search term.</p>
          <button
            type="button"
            className="text-link"
            onClick={() => {
              setFilter("All");
              setQ("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
