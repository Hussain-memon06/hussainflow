import Image from "next/image";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

const profileLinks = [
  { label: "GitHub profile", href: "https://github.com/Hussain-memon06", icon: "/logos/github.png" },
  { label: "Upwork profile", href: "https://www.upwork.com/freelancers/~010d4014910b3f3c85", icon: "/logos/upwork.png" },
  { label: "LinkedIn profile", href: "https://www.linkedin.com/in/muhammad-hussain16/", icon: "/logos/linkedin.png" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.primaryRow}>
          <div className={styles.identity}>
            <Link className={styles.brand} data-scroll-target="top" href="/" aria-label="HussainFlow home">
              <span className={styles.brandMark} aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>HussainFlow</span>
            </Link>
            <p>Human-reviewed AI workflow systems for outbound teams.</p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <Link href="/systems">Systems</Link>
            <Link href="/agents">Agents</Link>
            <Link data-scroll-target="about" href="/">About</Link>
            <a href="mailto:hussain@hussainflow.com">Email</a>
          </nav>
        </div>

        <div className={styles.secondaryRow}>
          <p>&copy; 2026 HussainFlow.</p>
          <div className={styles.profileLinks} aria-label="Public profile links">
            {profileLinks.map((profile) => (
              <a href={profile.href} target="_blank" rel="noreferrer" aria-label={profile.label} key={profile.label}>
                <Image src={profile.icon} alt="" width={17} height={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
