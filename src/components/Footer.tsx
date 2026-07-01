import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-800/30 bg-[#4b2f17] text-[#fff8ea]">
      <div className="absolute inset-0">
        <img
          src="/images/footer.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover brightness-[1.02] contrast-[1.22] saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(75,47,23,0.82)_0%,rgba(58,35,18,0.76)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-screen"
          style={{
            backgroundImage: "url(/textures/grain.svg)",
            backgroundSize: "220px 220px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-amber-200/20" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr_0.9fr] lg:px-8">
        <section>
          <img src="/images/logo.png" alt="Green Agri Corp logo" className="h-14 w-auto" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-amber-50/95">
            Green Agri Corp Pvt Ltd is a rice manufacturing and export company focused on dependable supply, careful processing, and long-term trade relationships.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-amber-100/95">
            {[
              "Established in 2016",
              "40+ years of combined industry expertise",
              "10,000+ MT annual processing capacity",
              "Delhi office and Raipur manufacturing base",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Navigation</h3>
          <nav className="mt-5 grid gap-3 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Quality", href: "/quality" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-amber-50/95 transition hover:text-amber-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-amber-50/95">
            <p>greenagricorp@gmail.com</p>
            <p>+91-XXX-XXX-XXXX</p>
            <p>Delhi, India (Corporate Office)</p>
            <p>Raipur, Chhattisgarh (Manufacturing)</p>
          </div>
        </section>
      </div>

      <div className="relative border-t border-amber-200/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-amber-100/90 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Green Agri Corp Pvt Ltd. All rights reserved.</p>
          <p>Premium Indian rice manufacturing and export partner.</p>
        </div>
      </div>
    </footer>
  );
}
