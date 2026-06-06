import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, CheckCircle2, Briefcase, ArrowRight } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";
import { PROGRAMS } from "@/data/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — FCIT AKSU" },
      {
        name: "description",
        content:
          "Explore degree programs at FCIT AKSU: B.Sc. Computer Science, Information Technology and Software Engineering.",
      },
      { property: "og:title", content: "Programs — FCIT AKSU" },
      { property: "og:description", content: "Academic offerings, admission requirements and career prospects." },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Programs & Courses"
        description="Informational overview of our degree programs. Course registration, timetables and results are not handled here."
      />

      <Section>
        <div className="space-y-12">
          {PROGRAMS.map((p) => (
            <article
              key={p.slug}
              id={p.slug}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="bg-primary px-6 py-6 text-primary-foreground sm:px-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-heading text-2xl font-bold">{p.name}</h2>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
                    <Clock className="h-4 w-4" /> {p.duration}
                  </span>
                </div>
              </div>
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
                <div>
                  {p.description.map((para, i) => (
                    <p key={i} className="mb-4 text-muted-foreground">
                      {para}
                    </p>
                  ))}
                  <h3 className="mt-6 mb-3 flex items-center gap-2 font-heading font-bold text-foreground">
                    <Briefcase className="h-5 w-5 text-secondary" /> Career Prospects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {p.careers.map((c) => (
                      <span key={c} className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-muted p-6">
                  <h3 className="mb-4 font-heading font-bold text-foreground">Admission Requirements</h3>
                  <ul className="space-y-3">
                    {p.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-muted">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-4 py-14 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">Have questions about admissions?</h2>
          <p className="max-w-xl text-muted-foreground">Reach out to the faculty — we're happy to help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
