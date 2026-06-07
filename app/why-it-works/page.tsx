import Link from "next/link";
import "./why-it-works.css";

const reasons = [
  {
    title: "Plug-and-Play Solution",
    text: "No complex setup or management needed from the school's side. We deploy everything.",
    icon: "plug"
  },
  {
    title: "No Burden on School Staff",
    text: "Our trained faculty handles all sessions — your existing staff continues their regular work.",
    icon: "staff"
  },
  {
    title: "Industry-Relevant Curriculum",
    text: "Syllabus aligned with AVGC industry standards, ensuring students learn market-ready skills.",
    icon: "curriculum"
  },
  {
    title: "Engaging & Interactive",
    text: "Project-based, hands-on learning keeps students motivated and excited about every session.",
    icon: "engage"
  },
  {
    title: "Measurable Outcomes",
    text: "Track student progress through real projects, portfolios, and annual showcases.",
    icon: "outcomes"
  },
  {
    title: "Boost School Reputation & Admissions",
    text: "Schools offering creative technology programs stand out, attract more admissions, and build a future-ready reputation.",
    icon: "reputation"
  }
];

function WhyIcon({ type }: { type: string }) {
  if (type === "plug") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v6M9 8h6M8 14h8v4a2 2 0 01-4 0v-4z" stroke="#5F117C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "staff") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="#5F117C" strokeWidth="2" />
        <circle cx="17" cy="9" r="2.5" stroke="#5F117C" strokeWidth="2" />
        <path d="M3 20c0-3 2.5-5 6-5M14 20c0-2.5 2-4 5-4" stroke="#5F117C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "curriculum") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16v12H4zM8 6V4h8v2" stroke="#5F117C" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 11h8M8 15h5" stroke="#5F117C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "engage") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z" stroke="#5F117C" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "outcomes") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18V6M4 18h16M8 14l3-3 3 2 4-5" stroke="#5F117C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4h8v3a4 4 0 01-8 0V4zM6 4H4a2 2 0 002 2M18 4h2a2 2 0 01-2 2M12 13v3M9 20h6" stroke="#5F117C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
      <path d="M0 6H18M18 6L13 1M18 6L13 11" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export default function WhyItWorksPage() {
  return (
    <div className="why-page">
      <section className="why-hero">
        <div className="why-hero-bg" />
        <div className="why-hero-overlay" />
        <div className="container why-hero-inner">
          <span className="why-hero-tag">Why It Works</span>
          <h1>
            Designed for Schools.{" "}
            <span className="why-highlight-text">Built for Students.</span>
          </h1>
          <p>
            A complete, hassle-free solution that integrates seamlessly into
            your school system.
          </p>
        </div>
      </section>

      <section className="why-reasons">
        <div className="container">
          <div className="why-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="why-card">
                <div className="why-icon">
                  <WhyIcon type={reason.icon} />
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-cta">
        <div className="container why-cta-inner">
          <h2>Transform Your School Today</h2>
          <p>
            Join schools that are already building the next generation of
            creators.
          </p>
          <Link href="/contact" className="btn why-cta-btn">
            Get Started
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
