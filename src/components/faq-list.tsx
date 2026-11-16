"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqs } from "@/data/content";

export function FaqList() {
  const [active, setActive] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqs;
    const query = search.toLowerCase();
    return faqs.filter(([q, a]) => q.toLowerCase().includes(query) || a.toLowerCase().includes(query));
  }, [search]);

  return (
    <div className="faq-container">
      {/* Real-time Search Input */}
      <div className="faq-search-wrap">
        <label className="search" style={{ width: "100%", marginBottom: "24px" }}>
          <Search size={16} />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActive(0);
            }}
            placeholder="Search common questions (pricing, services, process...)"
          />
        </label>
      </div>

      <div className="faq-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map(([q, a], i) => (
            <article className="faq-item" key={q}>
              <button aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}>
                <span>{q}</span>
                <ChevronDown size={18} className={active === i ? "rotate-180" : ""} />
              </button>
              {active === i && <p>{a}</p>}
            </article>
          ))
        ) : (
          <div className="empty" style={{ padding: "36px 20px" }}>
            <p>No matching questions found for &ldquo;{search}&rdquo;.</p>
            <button type="button" className="text-link" onClick={() => setSearch("")}>
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
