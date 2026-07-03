import Image from "next/image";
import Link from "next/link";
import { HeroWorkflow } from "./HeroWorkflow";
import { ScrollEffects } from "./ScrollEffects";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import styles from "./page.module.css";

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
      <SiteHeader variant="home" />

      <HeroWorkflow />

      <section className={styles.workflowBridge} aria-label="Workflow overview">
        <p className="reveal">From raw lead lists to approved campaign handoffs.</p>
        <a className="reveal delay-1" href="/systems">
          See how the workflow works <span aria-hidden="true">→</span>
        </a>
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
          <a className={styles.primaryAction} href="mailto:hussain@hussainflow.com">
            Book a workflow audit
          </a>
          <Link className={styles.secondaryAction} data-scroll-target="examples" href="/">
            See example systems
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
