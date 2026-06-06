import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Newspaper, Mail, MessageCircle, Crown } from "lucide-react";
import { SITE, NACOS_EXCOS, NACOS_NEWS, NACOS_ACHIEVEMENTS } from "@/data/site";

export const Route = createFileRoute("/nacos")({
  head: () => ({
    meta: [
      { title: "NACOS AKSU — Student Body | FCIT AKSU" },
      {
        name: "description",
        content:
          "The Nigerian Association of Computing Students (NACOS), AKSU chapter — executive council, news, achievements and student life.",
      },
      { property: "og:title", content: "NACOS AKSU — Student Body" },
      { property: "og:description", content: "Meet the NACOS executive council and explore student tech life at AKSU." },
    ],
  }),
  component: Nacos,
});

const GALLERY = ["Tech Week", "Hackathon", "Workshop", "Excursion", "Game Night", "Dinner Night"];

function Nacos() {
  return (
    <>
      {/* NACOS-branded hero (green/white/black) */}
      <section className="bg-nacos text-nacos-foreground">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">Student Body</p>
          <h1 className="font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl">NACOS AKSU</h1>
          <p className="mt-4 max-w-2xl text-base text-nacos-foreground/85 sm:text-lg">
            The Nigerian Association of Computing Students, Akwa Ibom State University chapter — our
            leadership, activities and thriving community life.
          </p>
        </div>
      </section>

      {/* Executive council */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-10 flex items-center gap-3">
            <Crown className="h-7 w-7 text-nacos" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Executive Council</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NACOS_EXCOS.map((exco) => (
              <div
                key={exco.name}
                className="rounded-xl border-t-4 border-nacos bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-nacos/10 font-heading text-xl font-bold text-nacos">
                  {exco.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <p className="font-heading font-bold text-foreground">{exco.name}</p>
                <p className="mt-1 text-sm font-medium text-nacos">{exco.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & achievements */}
      <section className="bg-muted">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Newspaper className="h-6 w-6 text-nacos" />
              <h2 className="font-heading text-2xl font-bold text-foreground">News & Events</h2>
            </div>
            <ul className="space-y-4">
              {NACOS_NEWS.map((n) => (
                <li key={n.title} className="rounded-xl border-l-4 border-nacos bg-card p-5 shadow-sm">
                  <p className="font-heading font-bold text-foreground">{n.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{n.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-gold" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Achievements</h2>
            </div>
            <ul className="space-y-3">
              {NACOS_ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                  <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm text-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="mb-10 font-heading text-2xl font-bold text-foreground">Photo Gallery</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {GALLERY.map((g, i) => (
              <div
                key={g}
                className={`flex aspect-[4/3] items-center justify-center rounded-xl font-heading font-bold text-nacos-foreground shadow-sm ${
                  i % 2 === 0 ? "bg-nacos" : "bg-nacos/80"
                }`}
              >
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join / contact */}
      <section className="bg-nacos text-nacos-foreground">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold">Join the NACOS Community</h2>
          <p className="max-w-xl text-nacos-foreground/85">
            Be part of the most vibrant student tech community at AKSU. Reach out to the NACOS leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-nacos transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> Email NACOS
            </a>
            <a
              href={SITE.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
