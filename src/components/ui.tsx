import type { ReactNode } from "react";

/* ---------------------------------- Botones --------------------------------- */

const baseButton =
  "inline-flex items-center justify-center gap-2 rounded-xl text-[0.95rem] font-semibold " +
  "transition-[background-color,color,box-shadow,transform] duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px";

const variants = {
  primary: "bg-blue text-white shadow-[0_6px_16px_-8px_rgba(36,107,206,0.85)] hover:bg-blue-700",
  secondary: "bg-white text-ink border border-line hover:border-blue hover:text-blue",
  ghostDark: "border border-white/25 text-white hover:border-white/60 hover:bg-white/10",
  solidLight: "bg-white text-ink hover:bg-ivory",
} as const;

const sizes = {
  md: "px-4 py-2.5",
  lg: "px-5 py-3 sm:px-6 sm:py-3.5 text-base",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonLinkProps) {
  return (
    <a href={href} className={`${baseButton} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </a>
  );
}

/* --------------------------------- Secciones -------------------------------- */

export function Kicker({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${
        tone === "light" ? "text-white/70" : "text-blue"
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-px w-6 ${tone === "light" ? "bg-white/40" : "bg-blue/45"}`}
      />
      {children}
    </p>
  );
}

type SectionProps = {
  id?: string;
  children: ReactNode;
  /** Fondos alternos para marcar el ritmo de lectura. */
  tone?: "white" | "ivory" | "ink";
  className?: string;
};

const tones = {
  white: "bg-white",
  ivory: "bg-ivory",
  ink: "bg-ink text-white",
} as const;

export function Section({ id, children, tone = "white", className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line py-16 sm:py-18 lg:py-20 ${tones[tone]} ${
        tone === "ink" ? "border-ink" : ""
      } ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionTitle({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <h2
      className={`mt-4 max-w-3xl text-[1.65rem] font-extrabold leading-[1.15] sm:text-[2rem] lg:text-[2.35rem] ${
        tone === "light" ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`mt-4 max-w-2xl text-[1rem] leading-relaxed ${
        tone === "light" ? "text-white/75" : "text-muted"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/* ---------------------------------- Tarjeta --------------------------------- */

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`group relative rounded-2xl border border-line bg-white p-6 shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-blue/35 hover:shadow-lift ${className}`}
    >
      {children}
    </div>
  );
}
