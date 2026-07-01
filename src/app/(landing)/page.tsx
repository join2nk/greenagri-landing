import Link from "next/link";
import { CapabilityCard, PageHero, PageShell, SectionHeader } from "@/app/(landing)/comps";

const profileCards = [
  {
    title: "Premium Rice Manufacturing",
    description:
      "Careful milling, grading, and packing practices built to preserve consistency across every shipment.",
    tag: "Core Capability",
    icon: "quality" as const,
  },
  {
    title: "Global Supply Reliability",
    description:
      "Structured dispatch planning and documentation support for importers, wholesalers, and food brands.",
    tag: "Trade Operations",
    icon: "supply" as const,
  },
  {
    title: "Responsible Agriculture",
    description:
      "Traceability, waste-conscious operations, and long-term stewardship across the supply chain.",
    tag: "Sustainability",
    icon: "sustainable" as const,
  },
];

const ricePortfolio = [
  {
    name: "IR-64 & IR-36 Parboiled",
    summary: "Export-favored varieties known for consistency, milling yield, and shelf stability.",
  },
  {
    name: "Sarna & Mahamaya",
    summary: "Reliable non-basmati offerings for institutional buyers and regional food processors.",
  },
  {
    name: "Pusa Basmati & Specialty",
    summary: "Aromatic and premium range tailored for market-specific grading and private labels.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Green Agri Corp Pvt Ltd"
        title="A business-first profile for premium Indian rice exports"
        description="Green Agri Corp is a manufacturing and export partner focused on quality assurance, dependable logistics, and long-term buyer relationships across global markets."
        primaryCta={{ href: "/contact", label: "Talk to Our Team" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        stats={[
          { label: "Established", value: "2016" },
          { label: "Industry Experience", value: "40+ Years" },
          { label: "Annual Capacity", value: "10,000+ MT" },
        ]}
      />

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] border border-amber-300/60 bg-[#fffaf1] shadow-[0_20px_56px_-32px_rgba(79,45,20,0.32)]">
              <img
                src="/images/hero-export.jpeg"
                alt="Rice export and packing facility"
                className="h-full min-h-[360px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4a2c0f]/70 via-[#2c1b10]/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/90">Plant Overview</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                  Milling, grading, packing, and dispatch under one roof.
                </h2>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <article className="relative overflow-hidden rounded-[2rem] border border-amber-300/60 bg-[#fffaf1] shadow-[0_20px_56px_-32px_rgba(79,45,20,0.28)]">
                <img
                  src="/images/qual-1-new.jpeg"
                  alt="Manufacturing quality inspection"
                  className="h-56 w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">Manufacturing</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Plant-side process discipline</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Quality checks and controlled handling at each stage keep output consistent for export buyers.
                  </p>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[2rem] border border-amber-300/60 bg-[#fffaf1] shadow-[0_20px_56px_-32px_rgba(79,45,20,0.28)]">
                <img
                  src="/images/qual-2-new.jpeg"
                  alt="Rice packaging and inspection"
                  className="h-56 w-full object-cover"
                />
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">Packing</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Brand-ready packing visuals</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Packaging and dispatch presentations designed to reflect your brand and commercial standards.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-10 opacity-15"
          style={{
            backgroundImage: 'url(/images/qual-1-new.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fffaf1]/95 via-[#fbf3e4]/92 to-[#f1e1c8]/88" />
        
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Company Profile"
            title="Structured operations from procurement to dispatch"
            description="Built with a clear B2B mindset, our teams align production quality, packing standards, and shipping timelines to support buyer confidence."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {profileCards.map((card, index) => (
              <div key={card.title} style={{ animationDelay: `${index * 100}ms` }}>
                <CapabilityCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-10 opacity-12"
          style={{
            backgroundImage: 'url(/images/qual-2-new.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-amber-300/60 bg-[#fff8ea] p-8 md:p-12 relative shadow-[0_18px_54px_-34px_rgba(79,45,20,0.26)]">
          {/* Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.14] -z-10"
            style={{
              backgroundImage: 'url(/textures/grain.svg)',
              backgroundSize: '180px 180px',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.08] -z-10"
            style={{
              backgroundImage: 'url(/textures/grid.svg)',
              backgroundSize: '120px 120px',
            }}
          />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200" />
          
          <SectionHeader
            eyebrow="Product Portfolio"
            title="Rice categories curated for import and distribution channels"
            description="From high-volume non-basmati supply to premium aromatic options, each category is matched with tailored processing and packaging requirements."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {ricePortfolio.map((item, index) => (
              <article
                key={item.name}
                className="rounded-2xl border border-amber-200/80 bg-[rgba(255,250,242,0.92)] p-5 text-[#4a2c0f] animate-fade-up transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-[0_14px_28px_-18px_rgba(79,45,20,0.3)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b4f3a]">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-10 opacity-15"
          style={{
            backgroundImage: 'url(/images/service.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fffaf1]/97 to-[#f2e4cf]/95" />
        
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-amber-300/60 bg-[rgba(255,250,242,0.92)] p-8 shadow-[0_20px_58px_-34px_rgba(79,45,20,0.34)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">Next Step</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Looking for a dependable rice export partner?
              </h2>
              <p className="mt-4 text-slate-600">
                Share your quantity, grade, and destination preferences. Our team will respond with aligned options and timelines.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/quality"
                className="rounded-xl border border-amber-300/70 bg-amber-50 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-100 hover:border-amber-400"
              >
                View Quality Process
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-[#6b3f21] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#53301a]"
              >
                Start Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}