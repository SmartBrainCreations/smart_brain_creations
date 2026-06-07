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
            Creative Intelligence &{" "}
            <span className="labs-highlight-text">Digital Labs</span>
          </h1>
          <p>
            Complete lab setup within your school. We handle everything from
            infrastructure to implementation.
          </p>
        </div>
      </section>

      <section className="labs-setup">
        <div className="container labs-setup-grid">
          <div className="labs-setup-image">
            <img
              src="/labsimages/setup.png"
              alt="Students working in a creative technology lab"
              width={628}
              height={470}
            />
          </div>
          <div className="labs-setup-copy">
            <h2>State-of-the-Art Setup</h2>
            <p>
              We design, equip, and manage a complete creative technology lab
              inside your school. From computers to drawing tablets, software to
              curriculum — everything is taken care of.
            </p>
            <div className="labs-highlight-grid">
              {setupHighlights.map((item) => (
                <div key={item.title} className="labs-highlight-card">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
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
