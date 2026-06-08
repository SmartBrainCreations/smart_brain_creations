"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programs" },
  { label: "Labs", href: "/labs" },
  { label: "Why It Works", href: "/why-it-works" },
  { label: "Contact", href: "/contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const heroPages = ["/", "/about", "/programs", "/labs", "/why-it-works", "/contact"];
  const onHeroPage = heroPages.includes(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header${onHeroPage ? " site-header--home" : ""}`}>
      {onHeroPage && <div className="header-strip" aria-hidden="true" />}
      <div className="header-solid">
        <div className="header-bar">
          <Link href="/" className="header-logo">
            <img src="/logo.png" alt="Smart Brain Creations" className="logo-img" />
          </Link>

          <nav className="header-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "is-active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="header-menu-btn"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="header-menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-nav-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />
      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-header">
          <Link href="/" className="mobile-nav-logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Smart Brain Creations" />
          </Link>
          <button
            type="button"
            className="mobile-nav-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        </div>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "is-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Game Zone removed — keep mobile nav compact */}
      </nav>
    </header>
  );
}
