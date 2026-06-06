import { createFileRoute } from "@tanstack/react-router";
import { UserPlus, GitMerge, Rocket, Github, FileText, ExternalLink } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";
import { MENTORS, SITE } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Student Dev Portfolio Program — FCIT AKSU" },
      {
        name: "description",
        content:
          "A structured mentorship program where final-year students guide juniors in building professional GitHub portfolios.",
      },
      { property: "og:title", content: "Student Dev Portfolio Program — FCIT AKSU" },
      { property: "og:description", content: "Register, get matched with a mentor, and build your portfolio." },
    ],
  }),
  component: Portfolio,
});

const STEPS = [
  { Icon: UserPlus, title: "Register", text: "Fill the interest form to join the program as a mentee." },
  { Icon: GitMerge, title: "Get Matched", text: "We pair you with a final-year mentor in your area of interest." },
  { Icon: Rocket, title: "Build Portfolio", text: "Work on real projects and grow your professional GitHub presence." },
];

const RESOURCES = [
  { title: "How to Create a GitHub Account", href: "https://github.com" },
  { title: "Writing a Good README", href: "https://www.makeareadme.com" },
  { title: "Portfolio Project Ideas for Beginners", href: "https://github.com" },
];

function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Mentorship"
        title="Student Dev Portfolio Program"
        description="Final-year students guide 100 & 200 level students in building professional, portfolio-worthy GitHub projects."
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Program Overview</h2>
          <p className="mt-4 text-muted-foreground">
            The Student Developer Portfolio Program is a peer mentorship initiative designed to help junior
            students gain practical experience, build real projects, and establish a strong professional
            presence on GitHub — guided by experienced final-year mentors.
          </p>
        </div>
      </Section>

      <Section muted>
        <h2 className="mb-10 text-center font-heading text-2xl font-bold text-foreground">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <span className="absolute right-4 top-4 font-heading text-3xl font-extrabold text-muted-foreground/20">
                {i + 1}
              </span>
              <s.Icon className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={SITE.forms.mentee}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Register as a Mentee <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </Section>

      <Section>
        <h2 className="mb-10 font-heading text-2xl font-bold text-foreground">Mentor Roster</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENTORS.map((m) => (
            <div key={m.name} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-heading font-bold text-primary-foreground">
                {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading font-bold text-foreground">{m.name}</p>
                <span className="inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                  {m.spec}
                </span>
              </div>
              <a
                href={m.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on GitHub`}
                className="rounded-full p-2 text-foreground transition-colors hover:bg-muted"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <h2 className="mb-8 font-heading text-2xl font-bold text-foreground">Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {RESOURCES.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <FileText className="h-6 w-6 shrink-0 text-secondary" />
              <span className="font-medium text-foreground">{r.title}</span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
