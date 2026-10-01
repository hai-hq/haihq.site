import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero">
      <div className="wrap hero-copy">
        <p className="kicker">HAIHQ / 404</p>
        <h1>This page is not on the site.</h1>
        <p className="lede">The address does not match a page.</p>
        <Link className="btn btn-primary" href="/">
          Back to home
        </Link>
      </div>
    </main>
  );
}
