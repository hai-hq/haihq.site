import Link from "next/link";
import { Chain } from "@/components/Chain";
import { Mark } from "@/components/Mark";
import { createPageMetadata } from "@/lib/seo";
import { defaultDescription, githubUrl, siteTagline } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `HAIHQ / ${siteTagline}`,
  description: defaultDescription,
  path: "/",
  absoluteTitle: true,
});

const work = [
  {
    title: "Models",
    body: ["Healthcare-specific and healthcare-adapted AI models."],
  },
  {
    title: "Datasets",
    body: [
      "Open healthcare datasets for training, testing, and studying Health AI systems.",
    ],
  },
  {
    title: "Benchmarks",
    body: [
      "Evaluation systems for measuring capability, reliability, safety, robustness and real-world behavior.",
    ],
  },
  {
    title: "Tooling",
    body: [
      "Open infrastructure for building, testing and operating Health AI systems.",
    ],
  },
];

const method = [
  { label: "Research", text: "We start with a technical question." },
  {
    label: "Build",
    text: "We build the system needed to investigate it.",
  },
  { label: "Evaluate", text: "We measure what happens." },
  {
    label: "Open",
    text: "Then we release the useful parts openly.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">HAIHQ / Open research</p>
            <h1>Open research and infrastructure for Health AI.</h1>
            <div className="prose">
              <p className="lede">
                HAIHQ is a nonprofit, open-source research organization building{" "}
                <strong>
                  models, datasets, benchmarks, and tooling for Health AI.
                </strong>
              </p>
              <p>
                We research technical problems, build systems to investigate
                them, evaluate what works, and make the resulting work open.
              </p>
            </div>
            <div className="actions">
              <a className="btn btn-primary" href="#current-work">
                Explore our work
              </a>
              <a
                className="btn"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <Mark className="hero-mark" />
        </div>
      </section>

      <section className="section" aria-labelledby="work-heading">
        <div className="wrap stack">
          <h2 id="work-heading">What We Work On</h2>
          <div className="cols cols-4">
            {work.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <div className="prose">
                  {item.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="band"
        id="current-work"
        aria-labelledby="current-heading"
      >
        <div className="wrap">
          <div className="stack">
            <p className="kicker">Current work</p>
            <h2 id="current-heading">ReFHIR</h2>
            <p className="lede">
              Reactive FHIR infrastructure for applications and AI agents.
            </p>
            <div className="prose">
              <p>
                ReFHIR explores what FHIR should look like when software is
                continuously operating over changing healthcare state.
              </p>
              <p>
                Instead of manually combining queries, subscriptions, refetching
                and state reconciliation, applications and AI systems can
                subscribe directly to live FHIR query results.
              </p>
            </div>
            <Link className="text-action" href="/refhir">
              Explore ReFHIR →
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="method-heading">
        <div className="wrap stack">
          <h2 id="method-heading">Research through building.</h2>
          <Chain steps={method} />
        </div>
      </section>

      <section className="section" aria-labelledby="involved-heading">
        <div className="wrap stack">
          <h2 id="involved-heading">Get Involved</h2>
          <p>
            HAIHQ works with researchers, engineers, clinicians, healthcare
            organizations, universities and supporters interested in advancing
            open Health AI.
          </p>
          <p className="modes">Contribute · Collaborate · Sponsor</p>
          <Link className="text-action" href="/get-involved">
            Get involved →
          </Link>
        </div>
      </section>
    </main>
  );
}
