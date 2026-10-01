import { Mark } from "@/components/Mark";
import { createPageMetadata } from "@/lib/seo";
import { githubUrl } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "ReFHIR",
  description:
    "ReFHIR is open reactive FHIR infrastructure from HAIHQ for healthcare applications and AI agents.",
  path: "/refhir",
});

export default function ReFhirPage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">HAIHQ / ReFHIR</p>
            <h1>ReFHIR</h1>
            <div className="prose">
              <p className="lede">
                Reactive FHIR infrastructure for applications and AI agents.
              </p>
            </div>
            <div className="actions">
              <a
                className="btn btn-primary"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                className="btn"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Read the technical report
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <Mark className="hero-mark" />
        </div>
      </section>

      <section className="section" aria-labelledby="overview-heading">
        <div className="wrap why">
          <h2 id="overview-heading">Overview</h2>
          <div className="prose">
            <p>
              ReFHIR explores a different programming model for healthcare
              applications and AI systems. Instead of treating FHIR mainly as a
              request-response API over healthcare data, it treats FHIR data as
              live application state.
            </p>
            <p>
              Applications and AI agents can run FHIR queries and stay
              subscribed to their results. When underlying resources change,
              ReFHIR finds which active queries are affected, updates those
              results, and keeps connected clients aligned with committed state.
            </p>
            <p>
              The goal is to make real-time healthcare applications and
              healthcare AI systems simpler to build while staying compatible
              with the FHIR ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="necessary-heading">
        <div className="wrap stack">
          <div className="head-close">
            <h2 id="necessary-heading">The answer does not last</h2>
            <p className="why-close">Every product rebuilds the list.</p>
          </div>
          <div className="moments">
            <article>
              <p className="kicker">When you ask</p>
              <p>
                A normal FHIR server returns the active medications. The list is
                true only for that moment.
              </p>
            </article>
            <article>
              <p className="kicker">A minute later</p>
              <p>
                A clinician stops one drug and starts another. The list you are
                holding is wrong. So is any AI system still reading it.
              </p>
            </article>
          </div>
          <div className="moment-note">
            <p className="kicker">The repair</p>
            <ol className="repair">
              <li>Ask for the list</li>
              <li>Wait for a notice</li>
              <li>Ask again</li>
              <li>Rebuild the list</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="does-heading">
        <div className="wrap stack">
          <h2 id="does-heading">What ReFHIR does</h2>
          <p className="lede">
            You subscribe to that same question. ReFHIR sends the current
            medication list and leaves the question open.
          </p>
          <ul className="shifts">
            <li>Added</li>
            <li>Changed</li>
            <li>Stopped</li>
            <li>Deleted</li>
          </ul>
          <div className="prose">
            <p>
              When a medication is added, changed, stopped, or deleted, ReFHIR
              sends the list as it is now.
            </p>
            <p>
              The application reads that list. It does not rebuild one from
              change notices.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ai-heading">
        <div className="wrap">
          <h2 id="ai-heading">What an AI system gets</h2>
          <ol className="score">
            <li>
              A health AI system reads a record, reasons about it, and may act.
              Other systems can change the record while it works.
            </li>
            <li>
              ReFHIR can tell the system the answer changed, and pass it the new
              answer.
            </li>
            <li>
              That does not make the system safe. It gives the system the record
              as it is now, rather than a copy from a minute ago.
            </li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="different-heading">
        <div className="wrap stack">
          <div className="head-close">
            <h2 id="different-heading">What is new</h2>
            <p className="why-close">The server holds the answer.</p>
          </div>
          <div className="versus">
            <figure>
              <figcaption className="kicker">The usual method</figcaption>
              <p>
                Ask for the list. Wait for a notice. Ask again. Rebuild the
                list.
              </p>
              <p className="versus-note">
                FHIR can already send a notice that something in the record
                changed. The notice does not include the current medication
                list. Whoever receives it still has to produce the list.
              </p>
            </figure>
            <figure className="versus-focus">
              <figcaption className="kicker">ReFHIR</figcaption>
              <p>Subscribe to the question. The list stays current.</p>
              <p className="versus-note">
                ReFHIR produces the list. That work has been sitting inside each
                application. Here it sits in the server.
              </p>
            </figure>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="open-heading">
        <div className="wrap stack">
          <h2 id="open-heading">Open research</h2>
          <p>
            ReFHIR is part of HAIHQ. A current patient record is something
            Health AI has been rebuilding inside each product. The server and
            the technical report are public.
          </p>
          <div className="actions">
            <a
              className="btn btn-primary"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="btn"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read the technical report
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
