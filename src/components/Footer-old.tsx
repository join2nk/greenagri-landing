import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

const highlights = [
  "Established in 2016",
  "40+ years of combined industry expertise",
  "10,000+ MT annual processing capacity",
  "Delhi office and Raipur manufacturing base",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-900/40 text-white">
      <div className="absolute inset-0">
        <img
          src="/images/footer.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover grayscale brightness-[0.38] contrast-[1.15] saturate-0"
        />
        <div className="absolute inset-0 bg-slate-950/78" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/70 to-slate-900/55" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <section>
          <img src="/images/logo.png" alt="Green Agri Corp logo" className="h-14 w-auto" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-amber-50/90">
            Green Agri Corp Pvt Ltd is a rice manufacturing and export company focused on dependable supply, quality-first operations, and long-term buyer partnerships.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-amber-200/90">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Navigation</h3>
          <nav className="mt-5 grid gap-3 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-amber-50/95 transition hover:text-amber-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-amber-50/95">
            <p>greenagricorp@gmail.com</p>
            <p>+91-XXX-XXX-XXXX</p>
            <p>Delhi, India (Corporate Office)</p>
            <p>Raipur, Chhattisgarh (Manufacturing)</p>
          </div>
        </section>
      </div>

      <div className="relative border-t border-amber-800/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-amber-200/80 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Green Agri Corp Pvt Ltd. All rights reserved.</p>
          <p>Premium Indian rice manufacturing and export partner.</p>
        </div>
      </div>
    </footer>
  );
}
