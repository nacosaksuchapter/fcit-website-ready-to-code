import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/PageHeader";
import { POSTS } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — FCIT AKSU" },
      {
        name: "description",
        content: "Faculty news, student spotlights and tech articles from FCIT AKSU.",
      },
      { property: "og:title", content: "Blog — FCIT AKSU" },
      { property: "og:description", content: "News, student spotlights and tech articles." },
    ],
  }),
  component: Blog,
});

const CATEGORIES = ["All", "Faculty News", "Student Spotlight", "Tech Articles"] as const;
type Cat = (typeof CATEGORIES)[number];

function Blog() {
  const [cat, setCat] = useState<Cat>("All");
  const posts = useMemo(() => (cat === "All" ? POSTS : POSTS.filter((p) => p.category === cat)), [cat]);

  return (
    <>
      <PageHeader
        eyebrow="Faculty Voice"
        title="Blog"
        description="News, student achievements and tech insights from the FCIT community."
      />
      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                cat === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <span className="px-4 text-center font-heading font-bold">{post.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  {post.category}
                </span>
                <h2 className="mt-2 font-heading text-lg font-bold text-foreground group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <span className="mt-4 text-xs text-muted-foreground">{formatDate(post.date)}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
