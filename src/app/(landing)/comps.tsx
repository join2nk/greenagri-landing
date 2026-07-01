import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Ship } from "lucide-react";

type HeroStat = {
  label: string;
  value: string;
};

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return <main className={`landing-bg min-h-screen overflow-hidden ${className}`}>{children}</main>;
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  stats?: HeroStat[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-40 sm:px-6 lg:px-8">
      <div className="landing-orb landing-orb-a" />
      <div className="landing-orb landing-orb-b" />
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-amber-300/55 bg-[rgba(255,250,242,0.94)] p-8 shadow-[0_24px_70px_-40px_rgba(79,45,20,0.32)] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="animate-fade-up">
            <p className="inline-flex items-center rounded-full border border-amber-300/60 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-amber-900">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[#4a2c0f] sm:text-5xl lg:text-6xl font-serif">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#634b36]">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-900/10 bg-[#6b3f21] px-6 py-3 text-sm font-semibold text-amber-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#53301a] hover:shadow-md active:translate-y-0"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-300/80 bg-[rgba(255,249,239,0.9)] px-6 py-3 text-sm font-semibold text-[#60381f] transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500 hover:bg-amber-50 active:translate-y-0"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="grid gap-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#81634a] font-medium">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-[#4a2c0f]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, description, light = false }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-up">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${
          light ? "text-amber-100/90" : "text-amber-800"
        }`}
      >
        {eyebrow}
      </p>
      <div className={`mx-auto mt-4 h-px w-20 ${light ? "bg-amber-100/70" : "bg-amber-800/40"}`} />
      <h2 className={`mt-5 text-3xl font-semibold sm:text-4xl leading-tight font-serif ${light ? "text-amber-50" : "text-[#4a2c0f]"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-relaxed ${light ? "text-amber-100/80" : "text-[#5f4630]"}`}>
        {description}
      </p>
    </div>
  );
}

type CapabilityCardProps = {
  title: string;
  description: string;
  tag?: string;
  icon?: "quality" | "supply" | "sustainable";
};

function pickIcon(icon: CapabilityCardProps["icon"]) {
  if (icon === "quality") return ShieldCheck;
  if (icon === "supply") return Ship;
  return Leaf;
}

export function CapabilityCard({ title, description, tag, icon = "sustainable" }: CapabilityCardProps) {
  const Icon = pickIcon(icon);

  return (
    <article className="glass-card group animate-fade-up relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 opacity-70" />
      <div className="relative z-10">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-800 transition-all duration-300 group-hover:shadow-sm group-hover:scale-[1.03]">
          <Icon className="h-5 w-5" />
        </div>
        {tag ? (
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-800 opacity-90">{tag}</p>
        ) : null}
        <h3 className="text-xl font-semibold text-[#4a2c0f] font-serif">{title}</h3>
        <p className="mt-3 leading-relaxed text-[#5f4630]">{description}</p>
      </div>
    </article>
  );
}
