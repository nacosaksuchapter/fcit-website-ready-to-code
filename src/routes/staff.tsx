import { createFileRoute } from "@tanstack/react-router";
import { Mail, FlaskConical } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";
import { STAFF } from "@/data/site";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Staff Directory — FCIT AKSU" },
      {
        name: "description",
        content: "Meet the academic and non-academic staff of the Faculty of Computing and Information Technology, AKSU.",
      },
      { property: "og:title", content: "Staff Directory — FCIT AKSU" },
      { property: "og:description", content: "Photos, titles, departments and contacts of our faculty staff." },
    ],
  }),
  component: Staff,
});

function Staff() {
  return (
    <>
      <PageHeader
        eyebrow="Our People"
        title="Staff Directory"
        description="Meet the lecturers and staff who make FCIT a centre of excellence."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAFF.map((s) => (
            <div key={s.email} className="flex flex-col rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-heading text-2xl font-bold text-primary-foreground">
                {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <h2 className="font-heading text-lg font-bold text-foreground">{s.name}</h2>
              <p className="text-sm font-medium text-secondary">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.dept}</p>
              {s.interest && (
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <FlaskConical className="h-3.5 w-3.5" /> {s.interest}
                </p>
              )}
              <a
                href={`mailto:${s.email}`}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
