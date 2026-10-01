import Link from "next/link";
import { contactEmail, contactUrl, githubUrl, nav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-bar">
        <div className="footer-brand">
          <Link href="/" className="lockup" aria-label="HAIHQ, home">
            <img
              src="/brand/logo.png"
              alt=""
              width={806}
              height={304}
              className="footer-logo"
            />
          </Link>
          <p>© 2026 HAIHQ</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a className="footer-email" href={contactUrl}>
            {contactEmail}
          </a>
        </nav>
      </div>
    </footer>
  );
}
