import type { Metadata } from "next";
import { ScrollEffects } from "../ScrollEffects";
import { SiteHeader } from "../SiteHeader";
import styles from "./systems.module.css";

const workflowSteps = [
  {
    number: "01",
    title: "Import and clean the lead list",
    description: "Bring in account and contact data, remove duplicates, identify missing information, and organize the records before review begins.",
    input: "Raw lead list",
    output: "Structured account records",
  },
  {
    number: "02",
    title: "Review ICP fit",
    description: "Check each account against agreed ideal-customer criteria and flag weak, uncertain, or incomplete matches for human review.",
    input: "Account data + ICP criteria",
    output: "Fit status + flagged exceptions",
    gateAfter: "Human review",
  },
  {
    number: "03",
    title: "Prepare personalization",
    description: "Gather relevant company context, research signals, and potential outreach angles without inventing unsupported claims.",
    input: "Approved accounts + research sources",
    output: "Reviewable personalization notes",
  },
  {
    number: "04",
    title: "Update the CRM",
    description: "Add approved research, source links, statuses, notes, ownership, and next actions consistently across the CRM.",
    input: "Approved research + review decisions",
    output: "Clean, enriched CRM records",
    gateAfter: "Approval gate",
  },
  {
    number: "05",
    title: "Hand off to the campaign",
    description: "Pass approved prospects, research context, messaging notes, and next actions into campaign execution without losing the decision trail.",
    input: "Approved records",
    output: "Campaign-ready handoff",
  },
];

export const metadata: Metadata = {
  title: "Outbound Workflow Systems | HussainFlow",
  description: "See how HussainFlow connects lead-list cleanup, ICP review, personalization, CRM updates, and approved campaign handoffs.",
};

export default function SystemsPage() {
  return (
    <main className={styles.page}>
      <ScrollEffects />
      <SiteHeader variant="internal" />

      <section className={styles.hero} aria-labelledby="systems-page-title">
        <p className={`${styles.kicker} reveal`}>Connected outbound operations</p>
        <h1 className="reveal delay-1" id="systems-page-title">From raw lead list to approved campaign handoff</h1>
        <p className={`${styles.intro} reveal delay-2`}>
          HussainFlow connects the operational steps between research, review, CRM updates, and campaign execution, while keeping human judgment at the points where it matters.
        </p>
      </section>

      <section className={styles.workflowSection} id="workflow" aria-labelledby="workflow-title">
        <div className={styles.workflowHeading}>
          <p className={`${styles.kicker} reveal`}>One visible workflow</p>
          <h2 className="reveal delay-1" id="workflow-title">The work moves forward without losing the decision trail.</h2>
        </div>

        <ol className={styles.workflowTimeline} data-workflow-timeline>
          {workflowSteps.map((step) => (
            <li className={styles.workflowGroup} key={step.number}>
              <article className={styles.workflowStep} data-workflow-step>
                <span className={styles.stepNumber} aria-hidden="true">{step.number}</span>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <dl className={styles.stepMeta}>
                    <div>
                      <dt>Input</dt>
                      <dd>{step.input}</dd>
                    </div>
                    <div>
                      <dt>Output</dt>
                      <dd>{step.output}</dd>
                    </div>
                  </dl>
                </div>
              </article>

              {step.gateAfter ? (
                <div className={styles.approvalGate} data-workflow-gate aria-label={`${step.gateAfter} point`}>
                  <span className={styles.gateNode} aria-hidden="true" />
                  <span>{step.gateAfter}</span>
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <p className={`${styles.workflowPrinciple} reveal`}>
          Predictable work is automated. Exceptions and external actions wait for human approval.
        </p>
      </section>
    </main>
  );
}
