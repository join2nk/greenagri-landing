import { CapabilityCard, PageHero, PageShell, SectionHeader } from "@/app/(landing)/comps";

const serviceBlocks = [
  {
    title: "Export Operations",
    description:
      "End-to-end support for contracts, shipment planning, export documentation, and destination compliance.",
    tag: "International Trade",
    icon: "supply" as const,
  },
  {
    title: "Private Labelling",
    description:
      "Brand-ready packaging options with flexible bag sizes, print support, and batch-level quality control.",
    tag: "Brand Programs",
    icon: "quality" as const,
  },
  {
    title: "Bulk Distribution",
    description:
      "High-volume supply models for distributors, institutional buyers, and modern retail fulfillment channels.",
    tag: "Domestic + Export",
    icon: "supply" as const,
  },
  {
    title: "Factory Direct Programs",
    description:
      "Structured procurement from our Raipur operations with transparent timelines and dispatch coordination.",
    tag: "Direct Sourcing",
    icon: "quality" as const,
  },
  {
    title: "Quality Compliance Support",
    description:
      "Specification mapping, inspection records, and test-aligned output for procurement confidence.",
    tag: "Quality Systems",
    icon: "quality" as const,
  },
  {
    title: "Partnership Onboarding",
    description:
      "Commercial and technical onboarding for new buyers with scalable growth pathways.",
    tag: "Account Development",
    icon: "sustainable" as const,
  },
];

const processFlow = [
  "Requirement and grade alignment",
  "Sampling and commercial proposal",
  "Production slot planning",
  "Inspection, documentation, and dispatch",
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Business Services"
        title="Commercially aligned solutions for rice trade and supply"
        description="Our services are designed around buyer outcomes: quality consistency, predictable lead times, and clear communication from first inquiry to final delivery."
        primaryCta={{ href: "/contact", label: "Request Service Consultation" }}
        secondaryCta={{ href: "/quality", label: "Review Quality Standards" }}
        stats={[
          { label: "Service Coverage", value: "Export + Domestic" },
          { label: "Support Model", value: "B2B Dedicated" },
          { label: "Execution", value: "Process Driven" },
        ]}
      />

      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-10 opacity-12"
          style={{
            backgroundImage: 'url(/images/service.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fffaf1]/98 to-[#f2e4cf]/96" />
        
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 overflow-hidden rounded-[2rem] border border-amber-300/60 bg-[#fffaf1] shadow-[0_18px_54px_-32px_rgba(79,45,20,0.3)]">
            <div className="grid md:grid-cols-[1fr_1.05fr]">
              <img
                src="/images/service.jpeg"
                alt="Rice service and operations"
                className="h-60 w-full object-cover md:h-full"
              />
              <div className="flex items-center p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">Service Visual</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">Factory, packing, and export support in one workflow.</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    If you have a better factory shot later, this is the place to use it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <SectionHeader
            eyebrow="What We Deliver"
            title="Capability stack built for long-term buyer confidence"
            description="Each offering is integrated with production planning and quality checkpoints to reduce operational risk and improve purchase reliability."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceBlocks.map((service, index) => (
              <div key={service.title} style={{ animationDelay: `${index * 90}ms` }}>
                <CapabilityCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-10 opacity-6"
          style={{
            backgroundImage: 'url(/images/qual-1-new.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fffaf1]/96 to-[#f2e4cf]/94" />
        
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-amber-300/60 bg-[rgba(255,250,242,0.9)] p-8 md:grid-cols-[1fr_1.1fr] md:p-10 shadow-[0_18px_54px_-32px_rgba(79,45,20,0.28)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">Execution Flow</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">How projects move from inquiry to shipment</h2>
            <p className="mt-4 text-slate-600">
              We keep execution structured and transparent with clear checkpoints, allowing your team to plan purchases with confidence.
            </p>
            <p className="mt-6 text-sm italic text-slate-500">
              Image idea for later: a close-up of the packing line, cartons, or palletized export bags would fit this section best.
            </p>
          </div>
          <ol className="space-y-3">
            {processFlow.map((step, index) => (
              <li key={step} className="glass-card flex items-start gap-4 transition-all duration-300">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6b3f21] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
