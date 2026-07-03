import type { Metadata } from "next";
import { ScrollEffects } from "../ScrollEffects";
import { SiteHeader } from "../SiteHeader";
import styles from "./agents.module.css";

const agentCards = [
  {
    title: "Outbound Lead Agent",
    description: "Research companies, detect fit signals, prepare outreach, and pause for review before anything goes out.",
    cta: "Open Agent",
    url: "https://agent.hussainflow.com",
    meta: "Research + outreach review",
  },
  {
    title: "Outbound Lead Qualifier",
    description: "Score leads against ICP criteria with visible, reproducible logic and reviewable outputs.",
    cta: "Open Qualifier",
    url: "https://qualifier.hussainflow.com",
    meta: "ICP scoring + review logic",
  },
];

export const metadata: Metadata = {
  title: "Systems You Can Inspect | HussainFlow",
  description: "Inspect HussainFlow demos for outbound lead research, lead qualification, visible logic, and human review before outreach.",
};

export default function AgentsPage() {
  return (
    <main className={styles.page}>
      <ScrollEffects />
      <SiteHeader variant="internal" />
      <section className={styles.hero} aria-labelledby="agents-title">
        <p className={`${styles.kicker} reveal`}>Product ecosystem</p>
        <h1 className="reveal delay-1" id="agents-title">Systems you can inspect</h1>
        <p className={`${styles.intro} reveal delay-2`}>
          Outbound systems designed to qualify leads, research companies, and prepare outreach with visible logic and human review.
        </p>
        <div className={`${styles.agentGrid} reveal-stagger`}>
          {agentCards.map((agent) => (
            <article className={styles.agentCard} key={agent.title}>
              <p className={styles.agentMeta}>{agent.meta}</p>
              <h2>{agent.title}</h2>
              <p>{agent.description}</p>
              <a href={agent.url} target="_blank" rel="noreferrer">
                {agent.cta}
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
