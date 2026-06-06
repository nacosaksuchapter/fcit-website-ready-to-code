import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin, Users, MessageCircle } from "lucide-react";
import { Section } from "@/components/PageHeader";
import { STATS, POSTS, EVENTS, NACOS_EXCOS, NACOS_NEWS, SITE } from "@/data/site";
import heroImg from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FCIT AKSU — Faculty of Computing and Information Technology" },
      {
        name: "description",
        content:
          "Official website of the Faculty of Computing and Information Technology, Akwa Ibom State University. Programs, staff, opportunities and student life.",
      },
      { property: "og:title", content: "FCIT AKSU — Faculty of Computing and Information Technology" },
      {
        property: "og:description",
        content: "Building digital talent and shaping the future of technology in Akwa Ibom State.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImg}
          alt="FCIT AKSU faculty building at golden hour with students walking"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              {SITE.university}
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Faculty of Computing &amp; Information Technology
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85">
              Educating the next generation of innovators, engineers and tech leaders. Discover our
              programs, people and the opportunities we create for students.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore Programs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/opportunities"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
              >
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest news */}
      <Section muted>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Latest News</h2>
            <p className="mt-2 text-muted-foreground">Updates from across the faculty.</p>
          </div>
          <Link to="/blog" className="hidden shrink-0 items-center gap-1 font-semibold text-primary hover:underline sm:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <span className="px-4 text-center font-heading font-bold">{post.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-medium text-secondary">{formatDate(post.date)}</span>
                <h3 className="mt-2 font-heading text-lg font-bold text-foreground group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* NACOS spotlight */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">
          <div className="overflow-hidden rounded-2xl border-l-4 border-nacos bg-card shadow-sm">
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2">
              <div>
                <span className="inline-block rounded-full bg-nacos px-3 py-1 text-xs font-bold uppercase tracking-wide text-nacos-foreground">
                  NACOS AKSU
                </span>
                <h2 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  {NACOS_NEWS[0].title}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{NACOS_NEWS[0].date}</p>
                <p className="mt-4 text-muted-foreground">
                  The Nigerian Association of Computing Students, AKSU chapter, drives our vibrant student
                  tech community — events, competitions and leadership.
                </p>
                <Link
                  to="/nacos"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-nacos px-5 py-2.5 font-semibold text-nacos-foreground transition-opacity hover:opacity-90"
                >
                  View All NACOS Updates <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div>
                <p className="mb-4 flex items-center gap-2 font-heading font-semibold text-foreground">
                  <Users className="h-4 w-4 text-nacos" /> Meet the Excos
                </p>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
                  {NACOS_EXCOS.map((exco) => (
                    <div key={exco.name} className="rounded-lg border border-border bg-background p-3 text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-nacos/10 font-heading font-bold text-nacos">
                        {initials(exco.name)}
                      </div>
                      <p className="text-sm font-semibold text-foreground">{exco.name}</p>
                      <p className="text-xs text-muted-foreground">{exco.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <Section muted>
        <h2 className="mb-10 font-heading text-3xl font-bold text-foreground">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {EVENTS.map((ev) => (
            <div key={ev.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Calendar className="h-6 w-6 text-secondary" />
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{ev.title}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" /> {ev.date}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> {ev.location}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ready to take the next step?</h2>
          <p className="max-w-xl text-primary-foreground/85">
            Explore our academic programs or join our WhatsApp channel for the latest internships and
            tech opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Programs <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Join WhatsApp Channel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}
