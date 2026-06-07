import Link from "next/link";
import "./home.css";

const offers = [
  {
    number: "01",
    tone: "tone-purple",
    icon: "/icons/figma/offer-01.png",
    title: "Creative Lab Setup",
    text: "Full lab infrastructure installed inside your school premises"
  },
  {
    number: "02",
    tone: "tone-amber",
    icon: "/icons/figma/offer-02.png",
    title: "Expert Faculty",
    text: "Industry-trained instructors deployed to deliver weekly sessions"
  },
  {
    number: "03",
    tone: "tone-blue",
    icon: "/icons/figma/offer-03.png",
    title: "Industry Curriculum",
    text: "Structured, project-based syllabus aligned with AVGC industry"
  },
  {
    number: "04",
    tone: "tone-green",
    icon: "/icons/figma/offer-04.png",
    title: "Affordable Model",
    text: "No heavy investment — structured implementation provided"
  }
];

const aboutItems = [
  "Creative Lab Setup inside school",
  "Industry-aligned curriculum",
  "Handson,project-based learning",
  "Trained expert faculty"
];

const processSteps = [
  {
    number: "1",
    title: "Lab Setup",
    text: "Complete infrastructure inside your school",
    image: "/homepageimages/process-1.png"
  },
  {
    number: "2",
    title: "Faculty Deployment",
    text: "Trained industry experts placed at your school",
    image: "/homepageimages/process-3.png"
  },
  {
    number: "3",
    title: "Weekly Sessions",
    text: "Regular hands-on creative sessions",
    image: "/homepageimages/process-2.png"
  },
  {
    number: "4",
    title: "Student Projects",
    text: "Real games, designs, and animations",
    image: "/homepageimages/process-4.png"
  },
  {
    number: "5",
    title: "Annual Showcase",
    text: "Students present their work publicly",
    image: "/homepageimages/process-5.png",
    wide: true
  }
];

const buildCards = [
  {
    label: "Game Projects",
    tone: "build-purple",
    image: "/homepageimages/build-game.png"
  },
  {
    label: "UI/UX Designs",
    tone: "build-amber",
    image: "/homepageimages/build-uiux.png"
  },
  {
    label: "Animations",
    tone: "build-blue",
    image: "/homepageimages/build-anim.png"
  },
  {
    label: "Digital Art",
    tone: "build-green",
    image: "/homepageimages/build-art.png"
  }
];

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#E4D7E9" />
      <path
        d="M7 12.5L10 15.5L17 8.5"
        stroke="#5F117C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ stroke = "white" }: { stroke?: string }) {
  return (
    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
      <path d="M0 6H18M18 6L13 1M18 6L13 11" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">
              Composite <span className="hero-yellow hero-uline">Skill Lab</span> For
              <br />
              <span className="hero-yellow hero-uline">Creative</span>{" "}
              <span className="hero-white-uline">&amp; Digital Education</span>
            </h1>
            <p className="hero-desc">
              Hands-on programs in Design, Animation, AI &amp; Game Development for
              Classes 1–12 — aligned with NEP 2020 and India&apos;s AVGC sector.
            </p>
            <div className="hero-btns">
              <Link href="/contact" className="btn btn-primary-hero">
                Book Your School&apos;s Free DEMO
                <ArrowIcon />
              </Link>
              <Link href="/contact" className="btn btn-ghost-hero">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-bottom-line" aria-hidden="true" />
      </section>

      <section className="offer-section">
        <div className="container">
          <p className="section-eyebrow">WHAT WE OFFER</p>
          <h2 className="section-title">Everything Your School Needs</h2>
          <div className="section-underline" />
          <div className="offer-grid">
            {offers.map((offer) => (
              <article className={`offer-card ${offer.tone}`} key={offer.number}>
                <div className="offer-top">
                  <span className="offer-icon-box">
                    <img src={offer.icon} alt="" width={40} height={40} />
                  </span>
                  <span className="offer-num">{offer.number}</span>
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          <div className="about-copy">
            <h2>Our Creative Education System Inspires Students</h2>
            <p>
              Hands-on programs in Design, Animation, AI &amp; Game Development for
              Classes 1–12 — aligned with NEP 2020 and India&apos;s AVGC sector.
            </p>
            <div className="about-checks">
              {aboutItems.map((item) => (
                <div className="about-check" key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="about-link">
              Learn more about us
              <ArrowIcon stroke="#5F117C" />
            </Link>
          </div>
          <div className="about-image">
            <img
              src="/homepageimages/rectangle-102.png"
              alt="Students working with creative technology"
              width={628}
              height={470}
            />
            <div className="about-badge">
              <strong>2+</strong>
              <span>Years of Quality Education</span>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <p className="section-eyebrow section-eyebrow-left">PROCESS</p>
          <h2 className="section-title section-title-left">How It Works</h2>
          <div className="section-underline section-underline-left" />
          <div className="process-mosaic">
            {processSteps.map((step) => (
              <article
                className={`process-card${step.wide ? " process-card--wide" : ""}`}
                key={step.number}
              >
                <img src={step.image} alt="" className="process-card-bg" />
                <div className="process-card-overlay" />
                <div className="process-card-content">
                  <div className="process-box">{step.number}</div>
                  <div className="process-text">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="build-section">
        <div className="build-band">
          <div className="container">
            <h2>
              Students Don&apos;t Just Learn —{" "}
              <span className="hero-yellow">They Build</span>
            </h2>
          </div>
        </div>
        <div className="container build-body">
          <p className="build-lead">
            Real skills. Real portfolio. Real confidence. Game Projects
          </p>
          <div className="build-grid">
            {buildCards.map((card) => (
              <article className={`build-card ${card.tone}`} key={card.label}>
                <div className="build-card-image">
                  <img src={card.image} alt={card.label} />
                </div>
                <p className="build-card-label">{card.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to Transform Your School?</h2>
          <div className="cta-tags">
            <span>NEP 2020 Aligned</span>
            <span>AVGC Industry Focus</span>
            <span>Bangalore-Based</span>
            <span>Classes 1–12</span>
          </div>
          <Link href="/contact" className="btn btn-cta">
            Book Your School&apos;s Free DEMO
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
