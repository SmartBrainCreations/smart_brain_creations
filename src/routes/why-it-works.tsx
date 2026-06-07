import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
const schoolsHero = "/aboutimages/hero-bg.png";

export const Route = createFileRoute("/why-it-works")({
  head: () => ({
    meta: [
      { title: "Why It Works — Smart Brain Creations" },
      { name: "description", content: "Designed for schools. Built for students. A complete, hassle-free creative & digital education program." },
    ],
  }),
  component: WhyPage,
});

const features = [
  { title: "Plug-and-Play Solution", desc: "A complete, hassle-free solution that integrates seamlessly into your school system." },
  { title: "No Burden on School Staff", desc: "Our trained faculty handles all sessions — your existing staff continues their regular work." },
  { title: "Industry-Relevant Curriculum", desc: "Syllabus aligned with AVGC industry standards, ensuring students learn market-ready skills." },
  { title: "Engaging & Interactive", desc: "Project-based, hands-on learning keeps students motivated and excited about every session." },
  { title: "Measurable Outcomes", desc: "Track student progress through real projects, portfolios, and annual showcases." },
  { title: "Boost School Reputation & Admissions", desc: "Schools offering creative technology programs stand out, attract more admissions, and build a future-ready reputation." },
];

function WhyPage() {
  return (
    <SiteLayout overlayHeader>
      <section className="relative overflow-hidden">
        <div className="relative h-[680px] md:h-[760px] overflow-hidden">
          <img src={schoolsHero} alt="Teacher with students" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="container-x relative h-full px-6 flex flex-col justify-center pt-24">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
              Designed for Schools.<br /><span className="text-gold">Built for Students.</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/85">
              A complete, hassle-free solution that integrates seamlessly into your school system.
            </p>
          </div>

          {/* Wave bottom divider */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="white"
              d="M0,80 C360,160 900,20 1440,60 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-7 border border-black/5 hover:-translate-y-1 transition-transform"
              style={{
                background: "linear-gradient(180deg, var(--color-primary-mist), white)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary mb-5" />
              <h3 className="text-lg text-[color:var(--color-primary-deep)]">{f.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[color:var(--color-primary-mist)] text-center">
        <div className="container-x px-6">
          <h2 className="text-3xl md:text-4xl text-[color:var(--color-primary-deep)]">Transform Your School Today</h2>
          <p className="mt-4 text-foreground/70">Join schools that are already building the next generation of creators</p>
          <Link to="/contact" className="btn-primary mt-8">Get Started <ArrowRight size={18} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
