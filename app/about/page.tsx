import Link from "next/link";
import "./about.css";

const whoWeAreItems = [
  "Skill-based learning",
  "Experiential education",
  "Creative thinking",
  "Digital literacy"
];

const purposeCards = [
  {
    title: "Mission",
    text: "To make every school a creative learning hub where students build real-world skills from an early stage.",
    image: "/aboutimages/card-mission.png"
  },
  {
    title: "Vision",
    text: "A future where every student has access to creative technology education, regardless of their school's existing resources.",
    image: "/aboutimages/card-vision.png"
  },
  {
    title: "AVGC & Orange Economy",
    text: "India's creative industries are projected to grow exponentially. We give students a head start in animation, gaming, digital design, and creative technology.",
    image: "/aboutimages/card-avgc.png"
  }
];

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#5F117C" />
      <path
        d="M7 12.5L10 15.5L17 8.5"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="container about-hero-inner">
          <span className="about-hero-tag">About Us</span>
          <h1>
            Inspiring the <span className="about-highlight">Next Generation</span>
            <br />
            of Creators
          </h1>
          <p>
            Smart Brain Creations is a Bangalore-based education initiative focused on
            integrating creative and digital learning into school systems.
          </p>
        </div>
      </section>

      <section className="about-who">
        <div className="container about-who-grid">
          <div className="about-who-copy">
            <h2>Who We Are</h2>
            <p>
              We enable students to transition from learning to creating through structured,
              hands-on programs. Our programs are integrated directly within school
              environments, covering{" "}
              <span className="about-highlight">
                Design, Animation, AI, and Game Development.
              </span>
            </p>
            <p>
              India&apos;s{" "}
              <span className="about-highlight">
                AVGC (Animation, Visual Effects, Gaming &amp; Comics)
              </span>{" "}
              sector is part of the booming orange economy — the creative industries that
              are becoming a major driver of economic growth. We prepare students for
              careers in this fast-growing sector from an early age.
            </p>
            <div className="about-who-list">
              {whoWeAreItems.map((item) => (
                <div className="about-who-item" key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-who-image">
            <img
              src="/aboutimages/who-we-are.png"
              alt="Students working on creative technology projects"
              width={628}
              height={470}
            />
          </div>
        </div>
      </section>

      <section className="about-purpose">
        <div className="container">
          <h2 className="about-purpose-title">Our Purpose</h2>
          <div className="about-purpose-grid">
            {purposeCards.map((card) => (
              <article className="purpose-card" key={card.title}>
                <img src={card.image} alt="" className="purpose-card-bg" aria-hidden="true" />
                <div className="purpose-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-nep">
        <div className="container about-nep-inner">
          <h2>Fully Aligned with NEP 2020</h2>
          <p>
            Our programs align with India&apos;s National Education Policy, emphasizing
            creativity, critical thinking, and digital skills.
          </p>
          <Link href="/contact" className="btn about-nep-btn">
            Partner With Us
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
