import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import logo from "@/assets/fcit-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10 rounded bg-white/90 p-1" loading="lazy" />
            <div className="leading-tight">
              <p className="font-heading text-lg font-extrabold">{SITE.name}</p>
              <p className="text-xs text-primary-foreground/70">{SITE.university}</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/80">
            {SITE.fullName} — building digital talent and shaping the future of technology in Akwa Ibom State.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wide">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-primary-foreground/80 transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wide">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-accent">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wide">Stay Connected</h3>
          <a
            href={SITE.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Join WhatsApp Channel
          </a>
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
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-4 py-4 text-center text-xs text-primary-foreground/70 sm:px-6">
          © 2026 {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
