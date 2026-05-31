import { ScrollEffects } from "./ScrollEffects";
import styles from "./page.module.css";

const heroTags = ["Prospect research", "Lead lists", "ICP fit", "Campaign handoffs", "Client reporting"];

const painPoints = [
  {
    icon: "🔍",
    title: "Prospect context gets scattered",
    copy: "Prospect research lives across tabs, sheets, CRM notes, and enrichment tools before anyone can use it.",
  },
  {
    icon: "📊",
    title: "ICP fit gets inconsistent",
    copy: "Lead lists move forward with different fit checks, different notes, and unclear approval standards.",
  },
  {
    icon: "🤝",
    title: "Campaign handoffs lose context",
    copy: "Personalization angles, source gaps, and next actions get passed around without a clean review trail.",
  },
];

const inputChecks = ["Lead list imported", "ICP notes attached", "CRM context pulled"];

const reviewChecks = [
  {
    status: "done",
    label: "ICP fit checked",
  },
  {
    status: "warn",
    label: "Personalization gaps flagged",
  },
  {
    status: "done",
    label: "Duplicate account checked",
  },
];

const outputTags = ["Account brief", "Personalization angle", "CRM update"];

const beforeAfter = [
  {
    before: "Unverified lead lists",
    after: "ICP-fit checked lists",
  },
  {
    before: "Scattered prospect research",
    after: "Structured account briefs",
  },
  {
    before: "Manual personalization prep",
    after: "Reviewable outreach context",
  },
  {
    before: "CRM updates after the fact",
    after: "CRM-ready handoffs",
  },
];

const systemCards = [
  {
    title: "Prospect Research Systems",
    copy: "Turn lead lists into account briefs with source notes, ICP fit, gaps, and recommended next actions.",
    tags: ["Sources", "ICP fit", "Gaps"],
    flow: ["Lead list", "ICP check", "Account brief"],
  },
  {
    title: "Client Reporting Systems",
    copy: "Turn campaign activity, lead list progress, and reply context into concise client-ready updates.",
    tags: ["Pipeline", "Replies", "Next steps"],
    flow: ["Campaign data", "Summary rules", "Client update"],
  },
  {
    title: "Campaign Handoff Systems",
    copy: "Move approved prospects from research into outreach, CRM, or client review with the context still attached.",
    tags: ["Approval", "Owner", "Next action"],
    flow: ["Approved brief", "Decision trail", "Campaign handoff"],
  },
  {
    title: "CRM Update Systems",
    copy: "Keep prospect records, follow-ups, and campaign notes clean without making the team do duplicate admin.",
    tags: ["CRM", "Fields", "Follow-up"],
    flow: ["Research output", "Field mapping", "CRM update"],
  },
];

const methodSteps = [
  {
    title: "Map the manual workflow",
    copy: "Start with how leads, research, personalization prep, approvals, and CRM updates actually move today.",
  },
  {
    title: "Design the review layer",
    copy: "Define ICP checks, source gaps, personalization inputs, and where approval happens before outreach.",
  },
  {
    title: "Build the first system",
    copy: "Create a focused workflow around one repeated outbound process and test it with real prospects.",
  },
  {
    title: "Document and improve",
    copy: "Turn what works into a repeatable operating pattern for campaigns, CRM updates, and reporting.",
  },
];

const examples = [
  {
    name: "Outbound prospect research",
    problem: "Lead lists arrive without enough context to judge fit or personalize well.",
    system: "Source summary, ICP fit check, research gaps, and recommended next action.",
    review: "Approval required before outreach.",
  },
  {
    name: "Campaign performance reporting",
    problem: "Client updates are rebuilt from campaign notes, replies, and spreadsheets.",
    system: "Pipeline movement, reply context, risks, wins, and follow-ups in one flow.",
    review: "Operator approves the client-ready summary.",
  },
  {
    name: "Campaign handoff",
    problem: "Approved prospects do not move cleanly from research into outreach and CRM.",
    system: "Personalization angle, approval status, CRM fields, owner, and next move.",
    review: "Human approval before CRM update or campaign launch.",
  },
];

const principles = [
  "Approval before outreach",
  "Source gaps stay visible",
  "ICP fit is explicit",
  "Personalization context is reviewable",
  "CRM updates are clean",
  "Built for repeat campaigns",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <ScrollEffects />
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="HussainFlow home">
          <span className={styles.brandMark} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>HussainFlow</span>
        </a>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#systems">Systems</a>
          <a href="#method">Method</a>
          <a href="#examples">Examples</a>
          <a className={styles.navCta} href="#contact">
            Book audit
          </a>
        </nav>
      </header>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={`${styles.kicker} reveal`}>Founder-led AI workflow systems</p>
          <h1 className="reveal delay-1" id="hero-title">
            <span className={styles.heroHeadlineLine}>Turn manual agency work</span>
            <span className={styles.heroHeadlineOutcome}>into <em>clean, repeatable systems.</em></span>
          </h1>
          <p className={`${styles.heroText} reveal delay-2`}>
            Built for outbound operators working through lead lists, CRM updates, campaign handoffs,
            and client reporting. HussainFlow turns that manual work into reviewable systems with clear logic and approval before outreach.
          </p>
          <div className={`${styles.heroActions} reveal delay-3`}>
            <a className={styles.primaryAction} href="#contact">
              Book a workflow audit
            </a>
            <a className={styles.secondaryAction} href="#examples">
              See example systems
            </a>
          </div>
          <div className={`${styles.heroTagGroup} reveal delay-4`}>
            <p className={styles.heroTagLabel}>Common outbound workflows</p>
            <ul className={`${styles.heroTags} reveal-stagger`} aria-label="Common outbound workflows">
              {heroTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className={`${styles.workflowConsole} reveal-right delay-3`} aria-label="Workflow review console">
          <div className={styles.consoleHeader}>
            <div className={styles.consoleHeaderLeft}>
              <span className={styles.consoleDot} aria-hidden="true" />
              <span className={styles.consoleTitle}>Workflow Review Console</span>
            </div>
            <span className={styles.consoleStatusPill}>Live</span>
          </div>

          <div className={styles.consoleWorkflowInfo}>
            <h4 className={styles.consoleWorkflowName}>Outbound Lead Research Workflow</h4>
            <span className={styles.consoleWorkflowStatus}>Ready for outreach review</span>
          </div>

          <div className={styles.consoleDivider} />

          <div className={`${styles.consoleSection} ${styles.consoleSectionInput}`}>
            <span className={styles.consoleSectionLabel}>Input gathered</span>
            <ul className={styles.consoleChecklist}>
              {inputChecks.map((item) => (
                <li className={styles.checkDone} key={item}>
                  <span className={`${styles.checkIcon} ${styles.done}`} aria-hidden="true">
                    ✓
                  </span>
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
                  <span
                    className={`${styles.checkIcon} ${item.status === "warn" ? styles.warn : styles.done}`}
                    aria-hidden="true"
                  >
                    {item.status === "warn" ? "!" : "✓"}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.consoleSection} ${styles.consoleSectionOutput}`}>
            <span className={styles.consoleSectionLabel}>Output ready</span>
            <div className={styles.consoleOutputItems}>
              {outputTags.map((tag) => (
                <span className={styles.outputTag} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.consoleDivider} />

          <div className={styles.consoleFooter}>
            <span className={styles.consoleFooterIcon} aria-hidden="true">
              🔒
            </span>
            <span className={styles.consoleFooterText}>Approval required before outreach</span>
          </div>
        </aside>
      </section>

      <section className={styles.problemSection} id="problem" aria-labelledby="problem-title">
        <div className={styles.centerHeading}>
          <p className={`${styles.kicker} reveal`}>The problem</p>
          <h2 className="reveal delay-1" id="problem-title">
            The real drag is between the tools.
          </h2>
          <p className="reveal delay-2">
            Outbound teams do not usually need another enrichment tool. They need the work between lead lists, research, ICP decisions, reporting, and
            campaign handoffs to become clearer.
          </p>
        </div>
        <div className={`${styles.painGrid} reveal-stagger`}>
          {painPoints.map((point) => (
            <article className={styles.painCard} key={point.title}>
              <div className={styles.painCardIcon} aria-hidden="true">
                <span>{point.icon}</span>
              </div>
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.statementSection} aria-label="Design principle">
        <p className={`${styles.statement} reveal`}>
          &quot;The goal is not more AI. It&apos;s <span>less friction.</span>&quot;
        </p>
      </section>

      <section className={styles.shiftSection} aria-labelledby="shift-title">
        <div className={styles.shiftCopy}>
          <p className={`${styles.kicker} reveal`}>Before and after</p>
          <h2 className="reveal delay-1" id="shift-title">
            A cleaner operating layer, not another noisy tool.
          </h2>
        </div>
        <div className={`${styles.shiftPanel} reveal-right`}>
          <div>
            <span>Before</span>
            {beforeAfter.map((item) => (
              <p key={item.before}>{item.before}</p>
            ))}
          </div>
          <div>
            <span>After</span>
            {beforeAfter.map((item) => (
              <p key={item.after}>{item.after}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.systemsSection} id="systems" aria-labelledby="systems-title">
        <div className={styles.sectionHeading}>
          <p className={`${styles.kicker} reveal`}>Workflow systems</p>
          <h2 className="reveal delay-1" id="systems-title">
            Practical systems for repeated outbound work.
          </h2>
          <p className="reveal delay-2">
            Each system starts with one repeated outbound workflow, then turns the reviewable parts into visible logic.
          </p>
        </div>
        <div className={`${styles.systemGrid} reveal-stagger`}>
          {systemCards.map((card) => (
            <article className={styles.systemCard} key={card.title}>
              <div>
                <span className={styles.cardMarker} aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
              <div className={styles.cardFlow} aria-label={`${card.title} structure`}>
                {card.flow.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
              <ul className={styles.cardTags} aria-label={`${card.title} tags`}>
                {card.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.methodSection} id="method" aria-labelledby="method-title">
        <div className={styles.sectionHeading}>
          <p className={`${styles.kicker} reveal`}>Method</p>
          <h2 className="reveal delay-1" id="method-title">
            Start small. Make the logic visible. Improve from real work.
          </h2>
        </div>
        <ol className={`${styles.methodList} reveal-stagger`}>
          {methodSteps.map((step, index) => (
            <li className={styles.methodItem} key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.examplesSection} id="examples" aria-labelledby="examples-title">
        <div className={styles.sectionHeading}>
          <p className={`${styles.kicker} reveal`}>Example systems</p>
          <h2 className="reveal delay-1" id="examples-title">
            What a system can look like once it leaves the messy stage.
          </h2>
        </div>
        <div className={`${styles.exampleGrid} reveal-stagger`}>
          {examples.map((example) => (
            <article className={styles.exampleCard} key={example.name}>
              <h3>{example.name}</h3>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{example.problem}</dd>
                </div>
                <div>
                  <dt>System</dt>
                  <dd>{example.system}</dd>
                </div>
                <div>
                  <dt>Review</dt>
                  <dd>{example.review}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.principlesSection} aria-labelledby="principles-title">
        <div className={styles.principlesCopy}>
          <p className={`${styles.kicker} reveal`}>Trust layer</p>
          <h2 className="reveal delay-1" id="principles-title">
            Built for work people can inspect.
          </h2>
        </div>
        <ul className={`${styles.principlesList} reveal-stagger`}>
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <section className={styles.aboutSection} aria-labelledby="about-title">
        <p className={`${styles.kicker} reveal`}>Founder-led</p>
        <div className={`${styles.aboutLayout} reveal delay-1`}>
          <h2 id="about-title">Built by Hussain, close to the operating work.</h2>
          <p>
            HussainFlow works close to the operating layer inside outbound and lead generation agencies: prospect research, personalization prep, CRM updates, campaign handoffs, and client reporting. The goal is
            simple: make the repeated work easier to trust, approve, and improve.
          </p>
        </div>
      </section>

      <section className={`${styles.finalCta} reveal-scale`} id="contact" aria-labelledby="contact-title">
        <div>
          <p className={styles.kicker}>Next step</p>
          <h2 id="contact-title">Have an outbound workflow your team keeps repeating?</h2>
          <p>Send the manual version: the lead list, research notes, CRM update, or reporting handoff. I will help identify what can become a clear, reviewable system.</p>
        </div>
        <div className={styles.ctaActions}>
          <a className={styles.primaryAction} href="mailto:hello@hussainflow.com">
            Book a workflow audit
          </a>
          <a className={styles.secondaryAction} href="#examples">
            See example systems
          </a>
        </div>
      </section>
    </main>
  );
}
