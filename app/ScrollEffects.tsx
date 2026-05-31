"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const staggerContainers = document.querySelectorAll(".reveal-stagger");
    const header = document.querySelector("header");

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px",
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(entry.target.children).forEach((child, index) => {
            window.setTimeout(() => {
              child.classList.add("revealed");
            }, index * 120);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((element) => revealObserver.observe(element));
    staggerContainers.forEach((element) => staggerObserver.observe(element));

    const updateHeader = () => {
      header?.classList.toggle("scrolled", window.scrollY > 20);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return null;
}
