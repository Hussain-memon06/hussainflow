"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const staggerContainers = document.querySelectorAll(".reveal-stagger");
    const header = document.querySelector("header");
    const workflowTimeline = document.querySelector<HTMLElement>("[data-workflow-timeline]");
    const workflowSteps = workflowTimeline?.querySelectorAll<HTMLElement>("[data-workflow-step]") ?? [];
    const workflowGates = workflowTimeline?.querySelectorAll<HTMLElement>("[data-workflow-gate]") ?? [];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    let workflowFrame = 0;
    const updateWorkflow = () => {
      if (!workflowTimeline) return;

      const timelineRect = workflowTimeline.getBoundingClientRect();
      const viewportMarker = window.innerHeight * 0.58;
      const progress = Math.max(0, Math.min(1, (viewportMarker - timelineRect.top) / timelineRect.height));
      workflowTimeline.style.setProperty("--workflow-progress", `${progress * 100}%`);

      [...workflowSteps, ...workflowGates].forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        item.classList.toggle("step-active", itemRect.top + itemRect.height * 0.35 <= viewportMarker);
      });
    };

    const requestWorkflowUpdate = () => {
      if (workflowFrame) return;

      workflowFrame = window.requestAnimationFrame(() => {
        workflowFrame = 0;
        updateWorkflow();
      });
    };

    const cleanSectionHash = () => {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    const handleSamePageSectionClick = (event: MouseEvent) => {
      const link = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>('a[data-scroll-target], a[href^="#"], a[href^="/#"]')
        : null;
      const href = link?.getAttribute("href");

      if (!link || !href || href === "#") {
        return;
      }

      const explicitTarget = link.dataset.scrollTarget;
      const isHomeRouteLink = href.startsWith("/#");

      if (isHomeRouteLink && window.location.pathname !== "/") {
        return;
      }

      const targetId = explicitTarget ?? decodeURIComponent(href.slice(isHomeRouteLink ? 2 : 1));
      const target = document.getElementById(targetId);

      if (!target) {
        if (explicitTarget && href === "/") {
          window.sessionStorage.setItem("hussainflow:scroll-target", explicitTarget);
        }
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      cleanSectionHash();
      window.requestAnimationFrame(cleanSectionHash);

      if (event.detail === 0) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    };

    const storedTarget = window.sessionStorage.getItem("hussainflow:scroll-target");
    window.sessionStorage.removeItem("hussainflow:scroll-target");
    const initialHash = decodeURIComponent(window.location.hash.slice(1));
    const initialTargetId = storedTarget || initialHash;
    const initialTarget = initialTargetId ? document.getElementById(initialTargetId) : null;

    if (initialTarget) {
      window.requestAnimationFrame(() => {
        initialTarget.scrollIntoView({ behavior: "auto", block: "start" });
        cleanSectionHash();
      });
    }

    updateHeader();
    if (prefersReducedMotion && workflowTimeline) {
      workflowTimeline.style.setProperty("--workflow-progress", "100%");
      [...workflowSteps, ...workflowGates].forEach((item) => item.classList.add("step-active"));
    } else {
      updateWorkflow();
      window.addEventListener("scroll", requestWorkflowUpdate, { passive: true });
      window.addEventListener("resize", requestWorkflowUpdate);
    }
    window.addEventListener("scroll", updateHeader, { passive: true });
    document.addEventListener("click", handleSamePageSectionClick, true);

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("scroll", requestWorkflowUpdate);
      window.removeEventListener("resize", requestWorkflowUpdate);
      window.cancelAnimationFrame(workflowFrame);
      document.removeEventListener("click", handleSamePageSectionClick, true);
    };
  }, []);

  return null;
}
