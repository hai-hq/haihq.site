import { Mark } from "@/components/Mark";
import { createPageMetadata } from "@/lib/seo";
import { contactEmail, contactUrl, githubUrl } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Get Involved",
  description:
    "Contribute, collaborate, or sponsor HAIHQ's open research and infrastructure for Health AI.",
  path: "/get-involved",
});

const contribute = [
  "software development",
  "AI and agent systems",
  "research",
  "benchmarking",
  "healthcare expertise",
  "FHIR and interoperability",
  "model evaluation",
  "documentation",
  "testing",
];

const partners = [
  "universities",
  "research groups",
  "healthcare organizations",
  "open-source communities",
  "technology companies",
];

const support = [
  "financial sponsorship",
  "cloud credits",
  "GPU compute",
  "model inference",
  "datasets",
  "infrastructure",
  "engineering support",
];

export default function GetInvolvedPage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">HAIHQ / Get involved</p>
            <h1>Help build open Health AI.</h1>
            <p className="lede">
              HAIHQ works with people and organizations interested in advancing
              open research and infrastructure for Health AI.
            </p>
          </div>
          <Mark className="hero-mark" />
        </div>
      </section>

      <section
        className="section"
        id="contribute"
        aria-labelledby="contribute-heading"
      >
        <div className="wrap stack">
          <div className="why">
            <h2 id="contribute-heading">Contribute</h2>
            <div className="prose">
              <p>
                Engineers, researchers, clinicians, designers and technical
                writers can contribute directly to HAIHQ projects.
              </p>
            </div>
          </div>
          <div className="labeled">
            <p className="kicker">Areas may include</p>
            <ul className="directory">
              {contribute.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <a
            className="text-action"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View open projects →
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section
        className="section"
        id="collaborate"
        aria-labelledby="collaborate-heading"
      >
        <div className="wrap stack">
          <h2 id="collaborate-heading">Collaborate</h2>
          <p className="lede">HAIHQ is open to research partnerships with:</p>
          <ul className="roster">
            {partners.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Collaborations may involve joint experiments, benchmark development,
            system evaluation, healthcare-domain expertise or shared research
            questions.
          </p>
          <a className="text-action" href={contactUrl}>
            Partner with HAIHQ →
          </a>
        </div>
      </section>

      <section
        className="section"
        id="sponsor"
        aria-labelledby="sponsor-heading"
      >
        <div className="wrap stack">
          <div className="head-close">
            <h2 id="sponsor-heading">Sponsor</h2>
            <p className="why-close">
              Sponsors support the work, not the conclusions.
            </p>
          </div>
          <p>
            Open research requires compute, engineering time, infrastructure and
            funding.
          </p>
          <div className="labeled">
            <p className="kicker">Organizations can support HAIHQ through</p>
            <ul className="catalog">
              {support.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <a className="text-action" href={contactUrl}>
            Sponsor HAIHQ →
          </a>
        </div>
      </section>

      <section className="band" id="contact" aria-labelledby="contact-heading">
        <div className="wrap stack">
          <h2 id="contact-heading">Contact</h2>
          <p className="lede">
            Interested in contributing, collaborating or supporting HAIHQ?
          </p>
          <div className="contact-grid">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <strong>
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </strong>
              <span>For code and open-source contributions.</span>
            </a>
            <a href={contactUrl}>
              <strong>Contact HAIHQ</strong>
              <span>
                {contactEmail}. Research partnerships and sponsorship.
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
