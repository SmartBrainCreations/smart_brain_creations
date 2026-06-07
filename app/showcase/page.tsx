const showcaseBuckets = [
  {
    title: "Games",
    items: [
      "Novarush - Endless runner game",
      "Puzzle Master - Problem-solving game",
      "Jungle Escape - Adventure game"
    ]
  },
  {
    title: "UI/UX Designs",
    items: ["Mobile app interfaces", "Website prototypes", "Interactive dashboards"]
  },
  {
    title: "Animations",
    items: ["2D character animations", "Motion graphics", "Animated short stories"]
  },
  {
    title: "Digital Artwork",
    items: ["Digital illustrations", "Poster designs", "Brand identity projects"]
  }
];

export default function ShowcasePage() {
  return (
    <>
      <section className="showcase-hero">
        <div className="container showcase-hero-inner">
          <div>
            <span className="hero-tag">Showcase</span>
            <h1>
              Real Work. Real Learning. <span>Real Output.</span>
            </h1>
            <p>
              Students create real projects that reflect practical skill
              development and creative thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="showcase-image">
            <img src="/showcase-hero.svg" alt="Student showcase event" />
          </div>
        </div>
      </section>

      <section className="section showcase-buckets">
        <div className="container bucket-grid">
          {showcaseBuckets.map((bucket) => (
            <div key={bucket.title} className="bucket-card">
              <div className="bucket-header">
                <div className="bucket-icon" aria-hidden="true" />
                <h3>{bucket.title}</h3>
              </div>
              <ul>
                {bucket.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="showcase-collage">
            <img src="/showcase-collage.svg" alt="Game development collage" />
          </div>
          <div className="showcase-link">
            <a href="/game-dev">Explore Game Development Program →</a>
          </div>
        </div>
      </section>

      <section className="showcase-cta">
        <div className="container">
          <h2>Want This for Your School?</h2>
          <p>
            See what your students can achieve with structured creative
            education.
          </p>
          <a className="button button-primary" href="/contact">
            Book a Demo
          </a>
        </div>
      </section>
    </>
  );
}
