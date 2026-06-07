import Link from "next/link";
import "./programs.css";

const programs = [
  {
    level: "CLASSES 1-3",
    title: "Creative Foundations",
    tone: "amber",
    headerImage: "/programsimages/card-header-1.png",
    icon: "bulb",
    learn: [
      "Creativity & imagination exercises",
      "Digital drawing & coloring",
      "Visual thinking & storytelling"
    ],
    tools: ["Drawing tablets", "Kid-friendly design apps", "Digital canvas tools"],
    careers: [
      "Foundation for creative careers",
      "Early digital literacy",
      "Visual communication skills"
    ]
  },
  {
    level: "CLASSES 4-6",
    title: "Design & Animation Basics",
    tone: "green",
    headerImage: "/programsimages/card-header-2.png",
    icon: "trophy",
    learn: [
      "Design principles & fundamentals",
      "2D animation basics",
      "Digital storytelling & storyboarding"
    ],
    tools: ["Canva", "Basic animation software", "Storyboarding tools"],
    careers: ["Graphic Designer", "Animator", "Content Creator"]
  },
  {
    level: "CLASSES 7-9",
    title: "Interactive Design & Development",
    tone: "blue",
    headerImage: "/programsimages/card-header-3.png",
    icon: "monitor",
    learn: [
      "UI/UX design basics",
      "Game design principles",
      "Creative digital tools & workflows"
    ],
    tools: ["Figma", "Game engines (intro)", "Prototyping tools"],
    careers: ["UI/UX Designer", "Game Designer", "Digital Product Designer"]
  },
  {
    level: "CLASSES 10-12",
    title: "Advanced Creative Technology",
    tone: "purple",
    headerImage: "/programsimages/card-header-4.png",
    icon: "gear",
    learn: [
      "Advanced design & branding",
      "AI-powered creative tools",
      "App development & portfolio building"
    ],
    tools: ["Adobe Creative Suite", "AI tools (Midjourney, etc.)", "Development frameworks"],
    careers: [
      "Creative Technologist",
      "App Developer",
      "AI-Assisted Designer",
      "AVGC Industry Professional"
    ]
  }
];

function ProgramIcon({ type }: { type: string }) {
  if (type === "bulb") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.74V17h8v-2.26A7 7 0 0012 2z"
          stroke="#FFB30F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "trophy") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 4h8v3a4 4 0 01-8 0V4zM6 4H4a2 2 0 002 2M18 4h2a2 2 0 01-2 2M12 13v3M9 20h6"
          stroke="#FFB30F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "monitor") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="#FFB30F" strokeWidth="2" />
        <path d="M8 20h8M12 16v4" stroke="#FFB30F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="#FFB30F" strokeWidth="2" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="#FFB30F"
        strokeWidth="2"
        strokeLinecap="round"
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

export default function ProgramsPage() {
  return (
    <div className="programs-page">
      <section className="programs-hero">
        <div className="programs-hero-bg" />
        <div className="programs-hero-overlay" />
        <div className="container programs-hero-inner">
          <span className="programs-hero-tag">Our Programs</span>
          <h1>
            Progressive Learning for <span className="programs-highlight">Every Grade</span>
          </h1>
          <p>
            Structured programs that grow with students — from creative foundations to
            advanced industry skills.
          </p>
        </div>
      </section>

      <section className="programs-list">
        <div className="container program-stack">
          {programs.map((program) => (
            <article className={`program-card program-card--${program.tone}`} key={program.title}>
              <div className="program-card-header">
                <img src={program.headerImage} alt="" className="program-header-img" />
                <div className="program-badge">
                  <span className="program-badge-icon">
                    <ProgramIcon type={program.icon} />
                  </span>
                  <span>{program.level}</span>
                </div>
                <h2 className="program-card-title">{program.title}</h2>
              </div>
              <div className="program-card-body">
                <div className="program-columns">
                  <div className="program-column">
                    <h4>What Students Learn</h4>
                    <ul>
                      {program.learn.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="program-column">
                    <h4>Tools &amp; Software</h4>
                    <ul>
                      {program.tools.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="program-column">
                    <h4>Career Paths</h4>
                    <ul>
                      {program.careers.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="programs-cta">
        <div className="container programs-cta-inner">
          <h2>10+ Creative Projects Per Student Per Year</h2>
          <p>Real projects, real skills, real portfolios.</p>
          <Link href="/contact" className="btn programs-cta-btn">
            Book a Demo
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
