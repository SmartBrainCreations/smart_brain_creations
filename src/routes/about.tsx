import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
const aboutHero = "/about-hero.svg";
const labImg = "/aboutimages/who-we-are.png";
const missionImg = "/aboutimages/card-mission.png";
const visionImg = "/aboutimages/card-vision.png";
const orangeImg = "/aboutimages/card-avgc.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Smart Brain Creations" },
      { name: "description", content: "Bangalore-based education initiative integrating creative and digital learning into school systems. Aligned with NEP 2020 and India&apos;s AVGC sector." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout overlayHeader>
      <section className="relative overflow-hidden">
        <div className="relative h-[680px] md:h-[760px] overflow-hidden">
          <img src={aboutHero} alt="Creators at work" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="container-x relative h-full px-6 flex flex-col justify-center pt-24">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
              Inspiring the <span className="text-gold">Next Generation</span><br /> of Creators
            </h1>
            <p className="mt-5 max-w-2xl text-white/85">
              Smart Brain Creations is a Bangalore-based education initiative focused on
              integrating creative and digital learning into school systems.
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
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-[color:var(--color-primary-deep)]">Who We Are</h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              We enable students to transition from learning to creating through structured,
              hands-on programs. Our programs are integrated directly within school environments,
              covering <span className="text-gold font-semibold">Design, Animation, AI, and Game Development.</span>
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              India&apos;s <span className="text-gold font-semibold">AVGC (Animation, Visual Effects, Gaming & Comics)</span> sector
              is part of the booming orange economy — the creative industries that are becoming a major
              driver of economic growth. We prepare students for careers in this fast-growing sector from an early age.
            </p>
            <ul className="mt-6 space-y-3">
              {["Skill-based learning","Experiential education","Creative thinking","Digital literacy"].map(t => (
                <li key={t} className="flex items-center gap-3 font-semibold text-foreground/85">
                  <CheckCircle2 size={20} className="text-primary" />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="blob blob-2 aspect-square max-w-lg mx-auto">
            <img src={labImg} alt="India Creative Lab" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x px-6 grid md:grid-cols-3 gap-6">
          {[
            { img: missionImg, title: "Mission", color: "text-gold", desc: "To make every school a creative learning hub where students build real-world skills from an early stage." },
            { img: visionImg, title: "Vision", color: "text-gold", desc: "A future where every student has access to creative technology education, regardless of their school's existing resources." },
            { img: orangeImg, title: "AVGC & Orange Economy", color: "text-gold", desc: "India&apos;s creative industries are projected to grow exponentially. We give students a head start in animation, gaming, digital design, and creative technology." },
          ].map(c => (
            <div key={c.title} className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: "var(--shadow-card)" }}>
              <img src={c.img} alt={c.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-primary-deep)] via-[color:var(--color-primary-deep)]/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className={`text-xl font-extrabold ${c.color}`}>{c.title}</h3>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[color:var(--color-primary-mist)] text-center">
        <div className="container-x px-6">
          <h2 className="text-3xl md:text-4xl text-[color:var(--color-primary-deep)]">Fully Aligned with NEP 2020</h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70">
            Our programs align with India&apos;s National Education Policy, emphasizing creativity,
            critical thinking, and digital skills.
          </p>
          <Link to="/contact" className="btn-primary mt-8">Partner With Us <ArrowRight size={18} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
