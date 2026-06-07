import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programs" },
  { label: "Labs", href: "/labs" },
  { label: "Why It Works", href: "/why-it-works" },
  { label: "Game Development", href: "/game-dev" },
  { label: "Contact", href: "/contact" }
];

const faqItems = [
  {
    q: "What is Smart Brain Creations?",
    a: "Smart Brain Creations is a creative education program that equips students with future-ready digital, design, and innovation skills."
  },
  {
    q: "Is it aligned with NEP 2020?",
    a: "Yes, Smart Brain Creations supports NEP 2020 by promoting skill-based, experiential, and multidisciplinary learning."
  },
  {
    q: "What do students gain?",
    a: "Students gain creativity, digital literacy, problem-solving abilities, and hands-on industry-relevant skills."
  },
  {
    q: "Do schools need heavy investment?",
    a: "No, Smart Brain Creations provides the required curriculum, faculty, and lab support with minimal investment from schools."
  },
  {
    q: "Is a demo available?",
    a: "Yes, we offer free demo sessions for schools to experience the program before implementation.",
    link: "https://www.figma.com/design/6IkyHz9uPkwQQNXdzcOsvK/SBC?node-id=1075-1533&t=nZynRNk1NnfY1kgF-4"
  }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top-line" aria-hidden="true" />
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link href="/" className="footer-logo-link">
              <img
                src="/logo.png"
                alt="Smart Brain Creations"
                className="footer-logo"
              />
            </Link>
            <p className="footer-tagline">
              Real skills. Real portfolio. Real confidence. Game Projects
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-list">
              <li>+91 8762841197 / +91 78929 00762</li>
              <li>
                <a href="mailto:smartbraincreations@gmail.com">
                  smartbraincreations@gmail.com
                </a>
              </li>
              <li>Bangalore, Karnataka</li>
            </ul>
          </div>

          <div className="footer-col footer-col-faq">
            <h4 className="footer-heading">FAQ</h4>
            <ul className="footer-list footer-faq-list">
              {faqItems.map((item) => (
                <li key={item.q}>
                  <details className="footer-faq-item">
                    <summary>{item.q}</summary>
                    <p>
                      {item.a} {item.link && (
                        <>
                          <br />
                          <a href={item.link} target="_blank" rel="noopener noreferrer">View demo</a>
                        </>
                      )}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
