import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, SITE } from "@/data/site";
import logo from "@/assets/fcit-logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="FCIT AKSU home">
          <img src={logo} alt="FCIT AKSU logo" width={40} height={40} className="h-9 w-9" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold text-primary">{SITE.name}</span>
            <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Computing &amp; IT
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.to) ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mb-6 flex items-center gap-2">
              <img src={logo} alt="" width={32} height={32} className="h-8 w-8" />
              <span className="font-heading text-lg font-extrabold text-primary">{SITE.name}</span>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-muted ${
                    isActive(link.to) ? "bg-muted text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
