import { CapabilityCard, PageHero, PageShell, SectionHeader } from "@/app/(landing)/comps";

const certifications = [
  {
    title: "Food Safety Compliance",
    description: "Operational controls aligned with applicable food safety regulations and audit readiness.",
    tag: "Regulatory",
    icon: "quality" as const,
  },
  {
    title: "Export Documentation Discipline",
    description: "Shipment records and quality evidence organized for smoother customs and buyer verification.",
    tag: "Trade Assurance",
    icon: "supply" as const,
  },
  {
    title: "Lot Traceability",
    description: "Batch-level visibility from intake to dispatch to strengthen accountability and consistency.",
    tag: "Process Control",
    icon: "sustainable" as const,
  },
];

const checkpoints = [
  { stage: "Raw Material Intake", focus: "Moisture, purity, grain profile" },
  { stage: "Milling and Sorting", focus: "Uniformity, breakage control, grading" },
  { stage: "Laboratory Review", focus: "Specification match and lot release" },
  { stage: "Packing and Dispatch", focus: "Seal integrity, labeling, shipment documentation" },
];

const matrix = [
  ["Moisture", "At or below contract limits", "Per lot"],
  ["Broken Grain", "As agreed in commercial terms", "Continuous sampling"],
  ["Foreign Matter", "Within approved tolerance", "Per batch"],
  ["Visual Quality", "Grade-aligned appearance", "Pre-dispatch"],
];

export default function QualityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quality Framework"
        title="A disciplined quality system behind every shipment"
        description="Our quality approach combines process controls, documented checkpoints, and repeatable test routines to deliver consistent output for international buyers."
        primaryCta={{ href: "/contact", label: "Discuss Specifications" }}
        secondaryCta={{ href: "/services", label: "View Service Capabilities" }}
        stats={[
          { label: "Control Model", value: "Multi-Stage" },
          { label: "Documentation", value: "Shipment Ready" },
          { label: "Quality Goal", value: "Consistent Lots" },
        ]}
      />

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
        {/* Gradient Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fffaf1]/98 to-[#f2e4cf]/96" />
        
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 overflow-hidden rounded-[2rem] border border-amber-300/60 bg-[#fffaf1] shadow-[0_18px_54px_-32px_rgba(79,45,20,0.3)]">
            <div className="grid md:grid-cols-[0.95fr_1.05fr]">
              <img
                src="/images/qual-1-new.jpeg"
                alt="Quality inspection and mill control"
                className="h-60 w-full object-cover md:h-full"
              />
              <div className="flex items-center p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">Quality Visual</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">Inspection, sorting, and release discipline in the plant.</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    If you later get a tighter QC or lab photo, this can become a stronger visual anchor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
          <SectionHeader
            eyebrow="Compliance and Control"
            title="Quality systems designed for commercial trust"
            description="From inward inspection to dispatch records, our practices are structured to support repeat business and confidence in every purchase cycle."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item, index) => (
              <div key={item.title} style={{ animationDelay: `${index * 100}ms` }}>
                <CapabilityCard {...item} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="relative px-4 pb-20 sm:px-6 lg:px-8 overflow-hidden">
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
        
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-amber-300/60 bg-[#fff8ea] p-8 md:p-10 relative shadow-[0_18px_54px_-34px_rgba(79,45,20,0.26)]">
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
            eyebrow="4-Step Assurance"
            title="Operational checkpoints through the processing lifecycle"
            description="Each stage has defined controls to maintain lot stability, reduce variability, and ensure release confidence."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {checkpoints.map((step, index) => (
              <article
                key={step.stage}
                className="rounded-2xl border border-amber-200/80 bg-[rgba(255,250,242,0.92)] p-5 text-[#4a2c0f] animate-fade-up transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-[0_14px_28px_-18px_rgba(79,45,20,0.3)]"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.stage}</h3>
                <p className="mt-2 text-sm text-[#6b4f3a]">{step.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-10 opacity-4"
          style={{
            backgroundImage: 'url(/images/qual-3.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fffaf1]/96 to-[#f2e4cf]/94" />
        
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-amber-300/60 bg-[#fffaf1] shadow-[0_18px_54px_-32px_rgba(79,45,20,0.32)]">
          <div className="bg-gradient-to-r from-[#6b3f21] to-[#8a6342] px-6 py-5 text-white">
            <h3 className="text-xl font-semibold">Quality Review Matrix</h3>
            <p className="mt-1 text-sm text-amber-50">Representative controls used during routine assurance checks</p>
          </div>
          <div className="grid gap-6 border-b border-amber-200 p-6 md:grid-cols-[0.9fr_1.1fr]">
            <img
              src="/images/qual-3.jpeg"
              alt="Rice quality and grading reference"
              className="h-56 w-full rounded-2xl object-cover"
            />
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">If you want another image later</p>
              <h4 className="mt-2 text-xl font-semibold text-slate-900">Image idea for later</h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                A close-up of laboratory sampling, grain comparison trays, or moisture testing would fit here better than a wide plant shot.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-amber-50 text-left text-sm text-stone-900">
                <tr>
                  <th className="px-6 py-4 font-semibold">Parameter</th>
                  <th className="px-6 py-4 font-semibold">Specification Intent</th>
                  <th className="px-6 py-4 font-semibold">Verification Frequency</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row) => (
                  <tr key={row[0]} className="border-t border-amber-200 text-sm text-slate-700">
                    <td className="px-6 py-4 font-medium text-slate-900">{row[0]}</td>
                    <td className="px-6 py-4">{row[1]}</td>
                    <td className="px-6 py-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
