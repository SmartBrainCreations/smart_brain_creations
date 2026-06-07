const games = [
  {
    title: "Novarush",
    text: "Endless runner game built using logic and level design"
  },
  {
    title: "Puzzle Master",
    text: "Problem-solving game focused on interaction"
  },
  {
    title: "Jungle Escape",
    text: "Adventure game with storytelling and character movement"
  }
];

const learnItems = [
  "Game design thinking",
  "Logic building",
  "Level design",
  "Basic coding",
  "UI & character design"
];

const process = ["Idea", "Storyboarding", "Development", "Testing", "Launch"];

export default function GameDevPage() {
  return (
    <>
      <section className="game-hero">
        <div className="container game-hero-inner">
          <div>
            <span className="hero-tag">Game Development</span>
            <h1>
              Students Don&apos;t Just Learn Games - <span>They Build Them</span>
            </h1>
            <p>
              Real, playable games designed and launched by students, building
              confidence, creativity, and technical skills.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container game-split">
          <div>
            <h2>Games Built by Students</h2>
            <div className="game-list">
              {games.map((game) => (
                <div key={game.title} className="game-card">
                  <h4>{game.title}</h4>
                  <p>{game.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="game-image">
            <img src="/game-dev-collage.svg" alt="Student-built games" />
          </div>
        </div>
      </section>

      <section className="section game-learn">
        <div className="container">
          <h2 className="section-title">What Students Learn</h2>
          <div className="learn-grid">
            {learnItems.map((item) => (
              <div key={item} className="learn-card">
                <div className="learn-icon" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Development Process</h2>
          <div className="process-grid">
            {process.map((step) => (
              <div key={step} className="process-item">
                <div className="process-dot" aria-hidden="true" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="game-cta">
        <div className="container">
          <h2>Bring Game Development to Your School</h2>
          <p>Aligned with India&apos;s growing AVGC and gaming industry.</p>
          <a className="button button-primary" href="/contact">
            Book Your FREE Demo
          </a>
        </div>
      </section>
    </>
  );
}
