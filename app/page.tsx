import Image from "next/image";
import { ScrollEffects } from "./ScrollEffects";
import styles from "./page.module.css";

const heroBreakpoints = [
  {
    area: "Lead lists",
    pain: "Duplicates, missing context, and uneven fit signals.",
  },
  {
    area: "ICP review",
    pain: "The team is not always aligned on who is worth outreach.",
  },
  {
    area: "Personalization prep",
    pain: "Research exists, but the outreach angle still needs review.",
  },
  {
    area: "CRM updates",
    pain: "Notes get added late, inconsistently, or without the decision trail.",
  },
  {
    area: "Campaign handoffs",
    pain: "Approval and context get lost between research, CRM, and launch.",
  },
];

const painPoints = [
  {
    icon: "🔍",
    title: "Research gets scattered",
    copy: "Prospect notes, source links, CRM context, and fit signals sit across too many tabs before the team can act.",
  },
  {
    icon: "📊",
    title: "Lead lists need review",
    copy: "A list can look complete while fit, source gaps, duplicates, and missing context still need a human check.",
  },
  {
    icon: "🤝",
    title: "Handoffs lose outreach context",
    copy: "Personalization angles, approvals, and next actions get passed into campaigns without a clean review trail.",
  },
];

const inputChecks = ["Lead list imported", "ICP criteria attached", "CRM history pulled"];

const reviewChecks = [
  {
    status: "done",
    label: "ICP fit reviewed",
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

const outputTags = ["Account brief", "Personalization prep", "CRM update"];

const beforeAfter = [
  {
    before: "Unreviewed lead lists",
    after: "ICP-fit prospect lists",
  },
  {
    before: "Scattered prospect notes",
    after: "Source-backed account briefs",
  },
  {
    before: "Manual personalization prep",
    after: "Reviewable outreach context",
  },
  {
    before: "Late CRM updates",
    after: "CRM-ready campaign handoffs",
  },
];

const systemCards = [
  {
    title: "Prospect Research Systems",
    copy: "Turn raw lead lists and research notes into account briefs with sources, fit signals, gaps, and next actions.",
    tags: ["Sources", "Fit signals", "Gaps"],
    flow: ["Lead list", "Research check", "Account brief"],
  },
  {
    title: "Lead List Review Systems",
    copy: "Make ICP fit, duplicates, missing context, and approval status visible before outreach starts.",
    tags: ["ICP fit", "Duplicates", "Approval"],
    flow: ["Raw list", "Review rules", "Approved list"],
  },
  {
    title: "Campaign Handoff Systems",
    copy: "Move approved accounts into outreach with personalization notes, owner, status, and CRM context attached.",
    tags: ["Personalization", "Owner", "Status"],
    flow: ["Approved account", "Handoff note", "Campaign-ready"],
  },
  {
    title: "Client Reporting Systems",
    copy: "Convert campaign activity, replies, list progress, and risks into client-ready updates your team can repeat.",
    tags: ["Progress", "Replies", "Risks"],
    flow: ["Campaign data", "Summary logic", "Client update"],
  },
];

const methodSteps = [
  {
    title: "Map the outbound workflow",
    copy: "Start with how lead lists, prospect research, personalization prep, approvals, and CRM updates move today.",
  },
  {
    title: "Design the review layer",
    copy: "Define ICP checks, source gaps, personalization inputs, CRM fields, and where approval happens before outreach.",
  },
  {
    title: "Build the first system",
    copy: "Build around one repeated outbound process first, then test it with real lead lists and campaign work.",
  },
  {
    title: "Document and improve",
    copy: "Turn what works into a repeatable operating rhythm for campaigns, CRM updates, and client reporting.",
  },
];

const examples = [
  {
    name: "Lead list cleanup",
    problem: "Lead lists arrive with duplicates, missing context, and uneven fit signals.",
    system: "Source check, ICP fit, missing fields, duplicate review, and next action.",
    review: "Approval required before outreach.",
  },
  {
    name: "Personalization prep",
    problem: "Research exists, but the outreach angle is not ready for review.",
    system: "Account brief, source notes, relevance angle, gaps, and approval state.",
    review: "Operator approves the outreach context before launch.",
  },
  {
    name: "Client reporting handoff",
    problem: "Campaign progress, reply context, and risks get rebuilt manually for clients.",
    system: "Lead list progress, replies, blockers, wins, risks, and next steps in one update.",
    review: "Human review before the client-ready report goes out.",
  },
];

const principles = [
  "Approval before outreach",
  "Source gaps stay visible",
  "ICP fit is reviewable",
  "Personalization prep has context",
  "CRM updates are clean",
  "Reporting follows one rhythm",
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
          <a href="#about">About</a>
          <a className={styles.navCta} href="#contact">
            Book audit
          </a>
        </nav>
      </header>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={`${styles.kicker} reveal`}>Founder-led Agentic workflow systems</p>
          <h1 className="reveal delay-1" id="hero-title">
            <span className={styles.heroHeadlineLine}>Turn manual agency work</span>
            <span className={styles.heroHeadlineOutcome}>into <em>clean, repeatable systems.</em></span>
          </h1>
          <p className={`${styles.heroText} reveal delay-2`}>
            Built for <strong>outbound operators</strong> managing lead lists, prospect research, CRM updates, campaign handoffs, and client reporting. HussainFlow turns that work into <strong>reviewable systems</strong> with visible logic and <strong>approval before outreach</strong>.
          </p>
          <div className={`${styles.heroActions} reveal delay-3`}>
            <a className={styles.primaryAction} href="#contact">
              Book a workflow audit
            </a>
            <a className={styles.secondaryAction} href="#examples">
              See example systems
            </a>
          </div>
          <div className={`${styles.heroBreakpoints} reveal delay-4`}>
            <p className={styles.heroBreakpointsLabel}>Where outbound work usually breaks</p>
            <ol className={`${styles.heroBreakpointsList} reveal-stagger`} aria-label="Where outbound work usually breaks">
              {heroBreakpoints.map((item) => (
                <li key={item.area}>
                  <span className={styles.breakpointArea}>{item.area}</span>
                  <span className={styles.breakpointPain}>{item.pain}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside className={`${styles.workflowConsole} reveal-right delay-3`} aria-label="Workflow review console">
          <div className={styles.consoleHeader}>
            <div className={styles.consoleHeaderLeft}>
              <span className={styles.consoleDot} aria-hidden="true" />
              <span className={styles.consoleTitle}>Workflow Review Console</span>
            </div>
            <span className={styles.consoleStatusPill}>Review ready</span>
          </div>

          <div className={styles.consoleWorkflowInfo}>
            <h4 className={styles.consoleWorkflowName}>Lead List Review Workflow</h4>
            <span className={styles.consoleWorkflowStatus}>Ready for outreach approval</span>
          </div>

          <div className={styles.consoleDivider} />

          <div className={`${styles.consoleSection} ${styles.consoleSectionInput}`}>
            <span className={styles.consoleSectionLabel}>Inputs gathered</span>
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
            <span className={styles.consoleSectionLabel}>Outputs ready</span>
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
            Outbound and lead generation teams rarely need another enrichment tool. They need the work between <strong>prospect research</strong>, <strong>lead list cleanup</strong>, <strong>ICP review</strong>, <strong>CRM updates</strong>, and <strong>campaign handoffs</strong> to become clearer.
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
            Practical systems for repeated outbound delivery.
          </h2>
          <p className="reveal delay-2">
            Each system starts with one repeated outbound workflow, then turns the review points into visible logic.
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
            What a reviewable outbound system can look like.
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
            Built for outbound work people can inspect.
          </h2>
        </div>
        <ul className={`${styles.principlesList} reveal-stagger`}>
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <section className={styles.aboutSection} id="about" aria-labelledby="about-title">
        <p className={`${styles.kicker} reveal`}>Founder-led</p>
        <div className={`${styles.aboutLayout} reveal delay-1`}>
          <div className={styles.aboutCopy}>
            <h2 id="about-title">Built from the work before the system.</h2>
            <div className={styles.aboutText}>
              <p>
                Hussain came into AI from a <strong>business background</strong>, not a traditional CS path. Before building workflow systems, he worked close to practical marketing and outbound execution: sales emails, ad copy, HubSpot campaigns, and agency support.
              </p>
              <p>
                He later built deeper technical foundations through CS50x and Stanford machine learning coursework, then moved into applied AI systems for lead research, qualification, CRM updates, and approval before outreach. That shows up in systems like the <strong>Outbound Lead Agent</strong> and <strong>Outbound Lead Qualifier</strong>: source checks, visible logic, and human review before anything reaches a prospect.
              </p>
            </div>
            <div className={styles.aboutLinks} aria-label="Public profile links">
              <a href="https://github.com/Hussain-memon06" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Image src="/logos/github.png" alt="" width={18} height={18} aria-hidden="true" />
              </a>
              <a href="https://www.upwork.com/freelancers/~010d4014910b3f3c85" target="_blank" rel="noreferrer" aria-label="Upwork profile">
                <Image src="/logos/upwork.png" alt="" width={18} height={18} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-hussain16/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Image src="/logos/linkedin.png" alt="" width={18} height={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className={styles.aboutPortrait}>
            <Image className={styles.aboutPortraitImage} src="/founder.jpeg" alt="Hussain, founder of HussainFlow" width={896} height={1194} sizes="(max-width: 768px) 320px, 340px" />
          </figure>
        </div>
      </section>
      <section className={`${styles.finalCta} reveal-scale`} id="contact" aria-labelledby="contact-title">
        <div>
          <p className={styles.kicker}>Next step</p>
          <h2 id="contact-title">Have a lead generation workflow your team keeps repeating?</h2>
          <p className={styles.finalCtaText}>Send the <strong>messy version</strong>: the lead list, research notes, personalization prep, CRM update, or client report. I will help turn the repeated parts into a <strong>clear, reviewable workflow</strong> your team can trust before outreach.</p>
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
