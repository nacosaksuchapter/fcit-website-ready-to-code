import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, History, Quote } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FCIT AKSU" },
      {
        name: "description",
        content:
          "Learn about the Faculty of Computing and Information Technology, AKSU — our history, mission, vision, and leadership.",
      },
      { property: "og:title", content: "About — FCIT AKSU" },
      { property: "og:description", content: "Our story, mission, vision and leadership." },
    ],
  }),
  component: About,
});

const LEADERSHIP = [
  { name: "Prof. Emmanuel Udo", role: "Dean of Faculty" },
  { name: "Dr. Grace Akpan", role: "HOD, Information Technology" },
  { name: "Dr. John Effiong", role: "HOD, Software Engineering" },
  { name: "Mrs. Esther Umoh", role: "Faculty Administrative Officer" },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About the Faculty"
        description="Building trust and context for prospective students, parents and partners through our story, mission and people."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <History className="h-7 w-7 text-secondary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Our History</h2>
            </div>
            <p className="text-muted-foreground">
              The Faculty of Computing and Information Technology was established to meet the rising demand
              for skilled technology professionals in Akwa Ibom State and beyond. Since its founding, the
              faculty has grown steadily, expanding its programs, laboratories and academic staff.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, FCIT is a fully accredited faculty offering degree programs in Computer Science,
              Information Technology and Software Engineering, and is recognised for its commitment to
              practical, industry-relevant education.
            </p>
          </div>
          <div className="rounded-2xl bg-muted p-8">
            <div className="space-y-8">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To produce well-rounded, ethically grounded computing professionals through quality
                  teaching, research and community engagement that drives technological advancement.
                </p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <Eye className="h-6 w-6 text-primary" />
                  <h3 className="font-heading text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be a leading faculty of computing in Nigeria, renowned for innovation, excellence and
                  the production of graduates who shape the digital future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-8 rounded-2xl bg-card p-8 shadow-sm md:grid-cols-[200px_1fr] md:p-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-heading text-4xl font-bold text-primary-foreground">
              EU
            </div>
            <p className="mt-4 font-heading text-lg font-bold text-foreground">Prof. Emmanuel Udo</p>
            <p className="text-sm text-muted-foreground">Dean, FCIT AKSU</p>
          </div>
          <div>
            <Quote className="h-8 w-8 text-accent" />
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">Dean's Welcome</h2>
            <p className="mt-4 text-muted-foreground">
              Welcome to the Faculty of Computing and Information Technology. It is my honour to lead a
              community of dedicated scholars and ambitious students committed to excellence in technology
              education.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you are a prospective student, a parent, or an industry partner, I invite you to
              explore what makes our faculty special — our people, our programs, and our unwavering focus on
              preparing graduates for a digital world.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="mb-10 font-heading text-2xl font-bold text-foreground">Leadership Structure</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((l) => (
            <div key={l.name} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-heading font-bold text-primary">
                {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <p className="font-heading font-bold text-foreground">{l.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
