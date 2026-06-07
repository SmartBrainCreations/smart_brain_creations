import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
const labsHero = "/labs-setup.svg";
const creativeLab = "/labsimages/setup.png";
const digitalLab = "/labsimages/hero-bg.png";

export const Route = createFileRoute("/labs")({
  head: () => ({
    meta: [
      { title: "Labs — Creative Intelligence & Digital Labs | Smart Brain Creations" },
      { name: "description", content: "Two labs, one creative journey. The Creative Lab for Classes 1–6 and The Digital Lab for Classes 4–12." },
    ],
  }),
  component: LabsPage,
});

const creativePoints = [
  "Freehand drawing and sketching","Visual storytelling and illustration",
  "Colour theory and composition","Mixed-media creativity",
  "Clay modelling and craft design","Beginner digital art using tablets",
];
const digitalPoints = [
  "2D & 3D animations","Websites, HTML, CSS & JavaScript",
  "Game design projects","Photography and video content",
  "UI/UX and web designs","AI-powered creative projects",
  "Posters, logos, and digital branding",
];

function LabsPage() {
  return (
    <SiteLayout overlayHeader>
      <section className="relative overflow-hidden">
        <div className="relative h-[680px] md:h-[760px] overflow-hidden">
          <img src={labsHero} alt="Creative digital lab" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="container-x relative h-full px-6 flex flex-col justify-center pt-24">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
              Creative Intelligence<br /> & <span className="text-gold">Digital Labs</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/85">
              Complete lab setup within your school — we handle everything from
              infrastructure to implementation.
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

      <section className="section text-center">
        <div className="container-x px-6">
          <h2 className="text-3xl md:text-4xl text-[color:var(--color-primary-deep)]">Two Labs. One Creative Journey.</h2>
          <span className="underline-bar" />
          <p className="mt-6 max-w-3xl mx-auto text-foreground/70 leading-relaxed">
            At Smart Brain Creations, students learn creativity through hands-on experiences and real-world digital
            tools. Our learning ecosystem is built around two powerful environments that help students grow from
            imaginative thinkers into confident creators.
          </p>
        </div>
      </section>

      {/* Creative Lab */}
      <section className="bg-[color:var(--color-primary-mist)] py-20">
        <div className="container-x px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl text-[color:var(--color-primary-deep)]">The Creative Lab</h3>
            <p className="mt-4 font-semibold text-foreground/85">
              Where <span className="text-gold">imagination</span> meets its first tools.
            </p>
            <p className="mt-3 text-foreground/70">
              Designed for Classes 1–6, the Creative Lab helps students build foundational creative skills
              through hands-on activities and artistic exploration.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {creativePoints.map(p => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="blob blob-2 aspect-[5/4]">
            <img src={creativeLab} alt="Creative Lab" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Digital Lab */}
      <section className="py-20">
        <div className="container-x px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="blob blob-3 aspect-[5/4] order-2 lg:order-1">
            <img src={digitalLab} alt="Digital Lab" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl text-[color:var(--color-primary-deep)]">The Digital Lab</h3>
            <p className="mt-4 font-semibold text-foreground/85">
              Where <span className="text-gold">ideas become real,</span> shareable, career-relevant work.
            </p>
            <p className="mt-3 text-foreground/70">
              Designed for Classes 4–12, the Digital Lab introduces students to professional creative
              technologies and industry-standard software.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {digitalPoints.map(p => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />{p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[color:var(--color-primary-mist)] text-center">
        <div className="container-x px-6">
          <h2 className="text-3xl md:text-4xl text-[color:var(--color-primary-deep)]">Get Your School&apos;s Creative Lab Ready</h2>
          <p className="mt-4 text-foreground/70">We handle the complete setup — you focus on educating.</p>
          <Link to="/contact" className="btn-primary mt-8">Schedule a Visit <ArrowRight size={18} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
