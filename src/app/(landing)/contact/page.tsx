import { PageHero, PageShell, SectionHeader } from "@/app/(landing)/comps";
import { FormComponent } from "@/app/(landing)/contact/contact/contact-form";

const contactChannels = [
  {
    title: "Export Sales",
    detail: "greenagricorp@gmail.com",
    meta: "Commercial inquiries and shipment planning",
  },
  {
    title: "Business Desk",
    detail: "+91-XXX-XXX-XXXX",
    meta: "Partnership and account development",
  },
  {
    title: "Quality Coordination",
    detail: "greenagricorp@gmail.com",
    meta: "Specifications, compliance, and documentation",
  },
];

const offices = [
  {
    title: "Corporate Head Office",
    location: "Delhi, India",
    notes: "Buyer communication, documentation, and trade management",
  },
  {
    title: "Manufacturing Facility",
    location: "Raipur, Chhattisgarh",
    notes: "Processing, quality checks, and dispatch operations",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Green Agri Corp"
        title="Start a focused business conversation with our team"
        description="Share your sourcing goals, quality expectations, and destination market. We will respond with relevant options and execution details."
        stats={[
          { label: "Response Window", value: "Within 24 Hours" },
          { label: "Support Type", value: "Commercial + Technical" },
          { label: "Engagement", value: "Long-Term Partnerships" },
        ]}
      />

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-amber-300/60 bg-[#fffaf1] shadow-[0_18px_54px_-32px_rgba(79,45,20,0.3)]">
          <div className="grid md:grid-cols-[1fr_1.05fr]">
            <img
              src="/images/contact.jpeg"
              alt="Green Agri Corp contact and coordination"
              className="h-60 w-full object-cover md:h-full"
            />
            <div className="flex items-center bg-amber-50/70 p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">Contact Visual</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">
                  Direct communication with the commercial and operations team.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  A calm office or coordination photo fits this section better than a dramatic banner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Reach Us"
            title="Choose the contact channel that fits your requirement"
            description="Our teams coordinate across business, quality, and operations to ensure your inquiries are handled quickly and clearly."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {contactChannels.map((channel, index) => (
              <article
                key={channel.title}
                className="glass-card animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">{channel.title}</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">{channel.detail}</p>
                <p className="mt-2 text-sm text-slate-600">{channel.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-amber-300/50 bg-gradient-to-br 
         from-[#402518] x-via-[#6a4328] to-[#2e1b12]  
        p-7 md:grid-cols-[0.95fr_1.05fr] md:p-10 shadow-[0_24px_70px_-36px_rgba(45,25,12,0.6)]">
          <div className="rounded-2xl border border-white/15 bg-white/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Send your inquiry</h2>
            <p className="mt-2 text-sm text-amber-50/90">
              Include product preferences, estimated quantity, and target market for a quicker response.
            </p>
            <p className="mt-4 text-sm italic text-amber-200/80">
              If you want an image here later, use branded bags, pallet stacks, or the export desk.
            </p>
            <div className="mt-6">
              <FormComponent />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/15 bg-white/8 p-6">
              <h3 className="text-xl font-semibold text-white">Our Locations</h3>
              <p className="mt-2 text-sm text-amber-50/90">
                Two operational centers supporting trade execution and manufacturing continuity.
              </p>
            </div>
            {offices.map((office, index) => (
              <article
                key={office.title}
                className="rounded-2xl border border-white/15 bg-white/8 p-6 text-white animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">{office.location}</p>
                <h4 className="mt-2 text-lg font-semibold">{office.title}</h4>
                <p className="mt-2 text-sm text-amber-50/90">{office.notes}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
