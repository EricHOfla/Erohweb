import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Clock } from "lucide-react";
import { CopyBadge } from "@/components/copy-badge";
import { projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return {
    title: p?.title ?? "Project",
    description: p?.summary,
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();

  const p = projects[index];
  const prevProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="case-study-meta">
            <span className="eyebrow light">{p.type}</span>
            <span className="reading-time">
              <Clock size={13} /> 3 min case study
            </span>
          </div>
          <h1>{p.title}</h1>
          <p>{p.summary}</p>
          <div className="crumb">
            <Link href="/">Home</Link> / <Link href="/projects">Projects</Link> / {p.title}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail">
          <div className="detail-img">
            <Image src={p.image} alt={p.title} fill priority sizes="100vw" />
          </div>

          <div className="detail-grid">
            <div>
              <span className="eyebrow">OVERVIEW</span>
              <h2>About this project</h2>
              <p>{p.detail}</p>
              <div className="project-actions">
                {p.link && (
                  <a className="button" href={p.link} target="_blank" rel="noreferrer">
                    Visit live showcase <ExternalLink size={16} />
                  </a>
                )}
                <CopyBadge
                  text={`https://erohweb.vercel.app/projects/${p.slug}`}
                  label="project link"
                  className="share-project-btn"
                />
              </div>
            </div>

            <aside>
              <small>Category</small>
              <b>{p.type}</b>
              <small>Stage</small>
              <b>{p.status}</b>
              <small>Focus</small>
              <b>{p.tags.join(", ")}</b>
            </aside>
          </div>

          {/* Project Pagination (Next / Previous Navigation) */}
          <div className="project-pagination">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="pagination-card prev">
                <small>
                  <ArrowLeft size={14} /> PREVIOUS PROJECT
                </small>
                <b>{prevProject.title}</b>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="pagination-card next">
                <small>
                  NEXT PROJECT <ArrowRight size={14} />
                </small>
                <b>{nextProject.title}</b>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="center">
            <Link className="text-link" href="/projects">
              <ArrowLeft size={16} /> Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
