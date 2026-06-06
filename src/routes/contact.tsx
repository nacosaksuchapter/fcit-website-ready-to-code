import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { PageHeader, Section } from "@/components/PageHeader";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FCIT AKSU" },
      {
        name: "description",
        content: "Get in touch with the Faculty of Computing and Information Technology, AKSU. Address, phone, email and map.",
      },
      { property: "og:title", content: "Contact — FCIT AKSU" },
      { property: "og:description", content: "Find and reach the faculty — address, phone, email and location map." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Find us on campus or reach out — we'd love to hear from you."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Faculty Contact</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <span className="rounded-lg bg-primary/10 p-2 text-primary"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground">{SITE.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="rounded-lg bg-primary/10 p-2 text-primary"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="rounded-lg bg-primary/10 p-2 text-primary"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-muted-foreground hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={SITE.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" /> Join WhatsApp Channel
            </a>

            <div className="mt-8">
              <p className="mb-3 font-semibold text-foreground">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
                  { Icon: Twitter, href: SITE.socials.twitter, label: "Twitter" },
                  { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
                  { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full bg-muted p-2.5 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="FCIT AKSU location map"
              src="https://www.google.com/maps?q=Akwa+Ibom+State+University+Mkpat+Enin&output=embed"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
