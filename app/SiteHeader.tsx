import Link from "next/link";
import styles from "./page.module.css";

type SiteHeaderProps = {
  variant?: "home" | "internal";
};

const sectionLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Systems", href: "/systems" },
  { label: "Method", href: "#method" },
  { label: "Examples", href: "#examples" },
];

export function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const brandHref = "/";

  return (
    <header className={styles.header} data-page-variant={variant}>
      <Link className={styles.brand} data-scroll-target="top" href={brandHref} aria-label="HussainFlow home">
        <span className={styles.brandMark} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>HussainFlow</span>
      </Link>
      <nav className={styles.nav} aria-label="Primary navigation">
        {sectionLinks.map((link) => (
          <Link
            data-scroll-target={link.href.startsWith("#") ? link.href.slice(1) : undefined}
            href={link.href.startsWith("#") ? "/" : link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/agents">Agents</Link>
        <Link data-scroll-target="about" href="/">About</Link>
        <Link className={styles.navCta} data-scroll-target="contact" href="/">
          Book audit
        </Link>
      </nav>
    </header>
  );
}
