"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function ScrollReveal({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section, main article, main .card, main [class*='-card']"
      )
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    elements.forEach((element) => element.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
