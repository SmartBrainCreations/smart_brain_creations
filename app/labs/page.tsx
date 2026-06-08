import Link from "next/link";
import "./labs.css";

const setupHighlights = [
  {
    title: "Systems & Software",
    text: "Complete computer systems with all required creative software pre-installed."
  },
  {
    title: "Creative Tools",
    text: "Drawing tablets, design peripherals, and all necessary creative hardware."
  },
  {
    title: "Structured Environment",
    text: "Organized lab layout designed for collaborative creative work."
  }
];

const includedItems = [
  "Complete hardware & software setup",
  "Drawing tablets & peripherals",
  "Technical support & maintenance",
  "Student project storage",
  "Creative software licenses",
  "Lab furniture & layout design",
  "Regular software updates",
  "Smooth integration with schedule"
];

function ArrowIcon() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
      <path d="M0 6H18M18 6L13 1M18 6L13 11" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export default function LabsPage() {
  return (
    <div className="labs-page">
      <section className="labs-hero">
        <div className="labs-hero-bg" />
        <div className="labs-hero-overlay" />
        <div className="container labs-hero-inner">
          <span className="labs-hero-tag">Our Labs</span>
          <h1>
            Creative Intelligence & {" "}
            <span className="labs-highlight-text">Digital Labs</span>
          </h1>
          <p>
            Complete lab setup within your school. We handle everything from
            infrastructure to implementation.
          </p>
        </div>
      </section>

      <section className="labs-dual">
        <div className="container">
          <h2 className="labs-dual-title">Two Labs. One Creative Journey.</h2>
          <div className="labs-dual-underline" />
          <p className="labs-dual-lead">
            At Smart Brain Creations, students learn creativity through hands-on
            experiences and real-world digital tools. Our learning ecosystem is
            built around two powerful environments that help students grow from
            imaginative thinkers into confident creators.
          </p>

          <div className="labs-dual-grid">
            <div className="lab-card lab-card-info">
              <div className="lab-card-inner">
                <h3>The Creative Lab</h3>
                <p className="lab-sub">Where <strong>imagination</strong> meets its first tools.</p>
                <p className="lab-desc">
                  Designed for Classes 1–6, the Creative Lab helps students build
                  foundational creative skills through hands-on activities and
                  artistic exploration.
                </p>
                <ul className="lab-list">
                  <li>Freehand drawing and sketching</li>
                  <li>Visual storytelling and illustration</li>
                  <li>Colour theory and composition</li>
                  <li>Mixed-media creativity</li>
                  <li>Clay modelling and craft design</li>
                  <li>Beginner digital art using tablets</li>
                </ul>
              </div>
            </div>

            <div className="lab-card lab-card-image">
              <img src="/homepageimages/rectangle-102.png" alt="Creative Lab classroom" />
            </div>
          </div>

          <div className="labs-dual-grid reverse">
            <div className="lab-card lab-card-image">
              <img src="/homepageimages/rectangle-105.png" alt="Digital Lab classroom" />
            </div>
            <div className="lab-card lab-card-info">
              <div className="lab-card-inner">
                <h3>The Digital Lab</h3>
                <p className="lab-sub">Where <strong>ideas</strong> become real, shareable, career-relevant work.</p>
                <p className="lab-desc">
                  Designed for Classes 4–12, the Digital Lab introduces students
                  to professional creative technologies and industry-standard
                  software.
                </p>
                <ul className="lab-list">
                  <li>2D &amp; 3D animations</li>
                  <li>Game design projects</li>
                  <li>UI/UX and web designs</li>
                  <li>Posters, logos, and digital branding</li>
                  <li>Websites, HTML, CSS &amp; JavaScript</li>
                  <li>AI-powered creative projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="labs-included">
        <div className="container">
          <h2 className="labs-included-title">What&apos;s Included</h2>
          <div className="labs-included-grid">
            {includedItems.map((item) => (
              <div key={item} className="labs-included-item">
                <span className="labs-included-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="labs-cta">
        <div className="container labs-cta-inner">
          <h2>Get Your School&apos;s Creative Lab Ready</h2>
          <p>We handle the complete setup — you focus on educating.</p>
          <Link href="/contact" className="btn labs-cta-btn">
            Schedule a Visit
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
