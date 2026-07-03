"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const inputChecks = ["Lead list imported", "ICP criteria attached", "CRM history pulled"];

const reviewChecks = [
  { status: "done", label: "ICP fit reviewed" },
  { status: "warn", label: "Personalization gaps flagged" },
  { status: "done", label: "Duplicate account checked" },
];

const outputTags = ["Account brief", "Personalization prep", "CRM update"];

type DemoStatus = "Processing..." | "Review complete" | "Review ready";

export function HeroWorkflow() {
  const [demoRun, setDemoRun] = useState(0);
  const [status, setStatus] = useState<DemoStatus>("Review ready");
  const consoleRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (demoRun === 0) return;

    const reviewCompleteTimer = window.setTimeout(() => setStatus("Review complete"), 3800);
    const readyTimer = window.setTimeout(() => setStatus("Review ready"), 5500);

    return () => {
      window.clearTimeout(reviewCompleteTimer);
      window.clearTimeout(readyTimer);
    };
  }, [demoRun]);

  const runDemo = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setStatus("Processing...");
    setDemoRun((run) => run + 1);
    consoleRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
    window.setTimeout(() => headingRef.current?.focus({ preventScroll: true }), prefersReducedMotion ? 0 : 350);
  };

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <p className={`${styles.kicker} reveal`}>Human-reviewed AI workflows for outbound teams</p>
        <h1 className="reveal delay-1" id="hero-title">
          <span className={styles.heroHeadlineLine}>Turn messy outbound operations</span>
          <span className={styles.heroHeadlineOutcome}>into <em>reviewable systems.</em></span>
        </h1>
        <p className={`${styles.heroText} reveal delay-2`}>
          HussainFlow connects prospect research, lead-list cleanup, CRM updates, and campaign handoffs into one visible workflow, so AI prepares the work while your team stays in control before outreach.
        </p>
        <div className={`${styles.heroActions} reveal delay-3`}>
          <button className={styles.primaryAction} type="button" onClick={runDemo}>
            Watch an example workflow
          </button>
          <a className={styles.secondaryAction} href="/systems">
            See example systems
          </a>
        </div>
        <p className={`${styles.heroTrust} reveal delay-4`}>
          <span className={styles.heroTrustMark} aria-hidden="true" />
          AI prepares the work. Humans approve the outcome.
        </p>
      </div>

      <aside
        className={`${styles.workflowConsole} ${demoRun > 0 ? styles.demoRunning : ""} reveal-right delay-3`}
        aria-label="Workflow review console"
        key={demoRun}
        ref={consoleRef}
      >
        <div className={styles.consoleHeader}>
          <div className={styles.consoleHeaderLeft}>
            <span className={styles.consoleDot} aria-hidden="true" />
            <span className={styles.consoleTitle}>Workflow Review Console</span>
          </div>
          <span aria-live="polite" className={`${styles.consoleStatusPill} ${status === "Processing..." ? styles.consoleStatusProcessing : ""}`}>
            {status}
          </span>
        </div>

        <div className={styles.consoleWorkflowInfo}>
          <h2 className={styles.consoleWorkflowName} ref={headingRef} tabIndex={-1}>
            Lead List Review Workflow
          </h2>
          <span className={styles.consoleWorkflowStatus}>Ready for outreach approval</span>
        </div>

        <div className={styles.consoleDivider} />

        <div className={`${styles.consoleSection} ${styles.consoleSectionInput}`}>
          <span className={styles.consoleSectionLabel}>Inputs gathered</span>
          <ul className={styles.consoleChecklist}>
            {inputChecks.map((item) => (
              <li className={styles.checkDone} key={item}>
                <span className={`${styles.checkIcon} ${styles.done}`} aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.consoleSection} ${styles.consoleSectionReview}`}>
          <span className={styles.consoleSectionLabel}>Review checks</span>
          <ul className={styles.consoleChecklist}>
            {reviewChecks.map((item) => (
              <li className={item.status === "warn" ? styles.checkWarn : styles.checkDone} key={item.label}>
                <span className={`${styles.checkIcon} ${item.status === "warn" ? styles.warn : styles.done}`} aria-hidden="true">
                  {item.status === "warn" ? "!" : "✓"}
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.consoleSection} ${styles.consoleSectionOutput}`}>
          <span className={styles.consoleSectionLabel}>Outputs ready</span>
          <div className={styles.consoleOutputItems}>
            {outputTags.map((tag) => (
              <span className={styles.outputTag} key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={styles.consoleDivider} />

        <div className={styles.consoleFooter}>
          <span className={styles.consoleFooterIcon} aria-hidden="true">▣</span>
          <span className={styles.consoleFooterText}>Approval required before outreach</span>
        </div>
      </aside>
    </section>
  );
}
