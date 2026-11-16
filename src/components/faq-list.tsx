"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqs, FaqItem } from "@/data/content";

const categories = ["All", "General", "Development", "Deployment & Cloud", "Pricing & Process"] as const;

export function FaqList() {
  const [active, setActive] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    const query = search.toLowerCase().trim();
    return faqs.filter((item: FaqItem) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        query === "" ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  return (
    <div className="faq-container">
      {/* Category Pills & Real-time Search */}
      <div className="faq-tools">
        <div className="filters" role="tablist" aria-label="FAQ Categories">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? faqs.length
                : faqs.filter((f) => f.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                className={isSelected ? "chip selected" : "chip"}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActive(0);
                }}
                role="tab"
                aria-selected={isSelected}
              >
                <span>{cat}</span>
                <span className="chip-badge">{count}</span>
              </button>
            );
          })}
        </div>

        <label className="search faq-search-bar">
          <Search size={16} />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActive(0);
            }}
            placeholder="Search questions (pricing, deployment, timeline...)"
          />
        </label>
      </div>

      <div className="faq-results-info">
        <small>
          Showing <b>{filteredFaqs.length}</b> questions
        </small>
      </div>

      <div className="faq-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, i) => (
            <article className="faq-item" key={item.question}>
              <button
                aria-expanded={active === i}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="faq-q-text">
                  <span className="faq-cat-badge">{item.category}</span>
                  <span>{item.question}</span>
                </div>
                <ChevronDown size={18} className={active === i ? "rotate-180" : ""} />
              </button>
              {active === i && <p>{item.answer}</p>}
            </article>
          ))
        ) : (
          <div className="empty" style={{ padding: "36px 20px" }}>
            <p>No matching questions found for &ldquo;{search}&rdquo;.</p>
            <button
              type="button"
              className="text-link"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
