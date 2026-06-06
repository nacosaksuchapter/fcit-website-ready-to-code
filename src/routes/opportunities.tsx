import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ExternalLink, MapPin, CalendarClock } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";
import { OPPORTUNITIES, SITE, type OpportunityType } from "@/data/site";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities Board — FCIT AKSU" },
      {
        name: "description",
        content:
          "Curated internships, remote jobs and freelance gigs for FCIT AKSU students. Filter and apply, and join our WhatsApp alert channel.",
      },
      { property: "og:title", content: "Opportunities Board — FCIT AKSU" },
      { property: "og:description", content: "Internships, remote jobs and freelance leads for students." },
    ],
  }),
  component: Opportunities,
});

const FILTERS = ["All", "Internship", "Remote", "Freelance"] as const;
type Filter = (typeof FILTERS)[number];

const BADGE: Record<OpportunityType, string> = {
  Internship: "bg-primary/10 text-primary",
  Remote: "bg-secondary/10 text-secondary",
  Freelance: "bg-accent/20 text-accent-foreground",
};

function Opportunities() {
  const [filter, setFilter] = useState<Filter>("All");

  const rows = useMemo(
    () => (filter === "All" ? OPPORTUNITIES : OPPORTUNITIES.filter((o) => o.type === filter)),
    [filter],
  );

  return (
    <>
      <PageHeader
        eyebrow="Career Support"
        title="Opportunities Board"
        description="Hand-picked internships, remote roles and freelance gigs relevant to Nigerian computing students."
      />

      <Section>
        <a
          href={SITE.whatsappChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-5 w-5" /> Join WhatsApp Alert Channel
        </a>

        <div className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background text-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-xl border border-border md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-foreground">
              <tr>
                <th className="px-4 py-3 font-heading font-semibold">Role</th>
                <th className="px-4 py-3 font-heading font-semibold">Company</th>
                <th className="px-4 py-3 font-heading font-semibold">Type</th>
                <th className="px-4 py-3 font-heading font-semibold">Location</th>
                <th className="px-4 py-3 font-heading font-semibold">Deadline</th>
                <th className="px-4 py-3 font-heading font-semibold">Apply</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((o, i) => (
                <tr key={`${o.role}-${i}`} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{o.role}</td>
                  <td className="px-4 py-3 text-muted-foreground">{o.company}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${BADGE[o.type]}`}>
                      {o.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{o.location}</td>
                  <td className="px-4 py-3 text-muted-foreground">{o.deadline}</td>
                  <td className="px-4 py-3">
                    <a
                      href={o.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                      Apply <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="grid gap-4 md:hidden">
          {rows.map((o, i) => (
            <div key={`${o.role}-${i}`} className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-heading font-bold text-foreground">{o.role}</p>
                  <p className="text-sm text-muted-foreground">{o.company}</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${BADGE[o.type]}`}>{o.type}</span>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {o.location}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <CalendarClock className="h-4 w-4" /> {o.deadline}
              </p>
              <a
                href={o.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Apply <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        {rows.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">No opportunities in this category right now.</p>
        )}
      </Section>
    </>
  );
}
