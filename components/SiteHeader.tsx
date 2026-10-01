"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { githubUrl, nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const open = menuOpen && menuPath === pathname;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link href="/" className="lockup" aria-label="HAIHQ, home">
          <img
            src="/brand/logo.png"
            alt=""
            width={806}
            height={304}
            className="lockup-logo"
          />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => {
            setMenuPath(pathname);
            setMenuOpen((value) => !value);
          }}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="primary-nav"
          className={open ? "nav is-open" : "nav"}
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => {
                window.setTimeout(() => setMenuOpen(false), 0);
              }}
            >
              {item.label}
            </Link>
          ))}
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
