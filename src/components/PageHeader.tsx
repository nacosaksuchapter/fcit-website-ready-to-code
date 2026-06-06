import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  accent = "primary",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  accent?: "primary" | "nacos";
}) {
  const bg = accent === "nacos" ? "bg-nacos text-nacos-foreground" : "bg-primary text-primary-foreground";
  return (
    <section className={`${bg}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h1 className="font-heading text-3xl font-extrabold sm:text-4xl md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section className={`${muted ? "bg-muted" : "bg-background"} ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">{children}</div>
    </section>
  );
}
