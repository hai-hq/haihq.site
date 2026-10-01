import { Mark } from "@/components/Mark";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "HAIHQ is a nonprofit, open-source research organization focused on models, benchmarks, and technical infrastructure for Health AI.",
  path: "/about",
});

const build = [
  {
    title: "Models",
    text: "We explore healthcare-specific AI capabilities, architectures and applications.",
  },
  {
    title: "Benchmarks",
    text: "We develop ways to measure how Health AI systems behave beyond simple static tests.",
  },
  {
    title: "Tooling",
    text: "We build open infrastructure for healthcare data, interoperability, evaluation and the systems that AI models and agents rely on.",
  },
];

const artifacts = [
  "software",
  "a benchmark",
  "a model",
  "a dataset",
  "a specification",
  "a technical report",
  "a research paper",
];

const principles = [
  {
    title: "Open by default.",
    text: "Research becomes more valuable when others can inspect and extend it.",
  },
  {
    title: "Measure before claiming progress.",
    text: "Health AI systems should be evaluated against clearly defined capabilities and failure modes.",
  },
  {
    title: "Build to understand.",
    text: "Working systems reveal problems theory alone may miss.",
  },
  {
    title: "Healthcare deserves healthcare-specific research.",
    text: "General AI is not enough to solve every healthcare problem.",
  },
  {
    title: "Infrastructure matters.",
    text: "Progress depends on more than models.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="kicker">HAIHQ / About</p>
            <h1>Building open foundations for Health AI.</h1>
            <p className="lede">
              HAIHQ is a nonprofit, open-source research organization focused on
              models, benchmarks and technical infrastructure for Health AI.
            </p>
          </div>
          <Mark className="hero-mark" />
        </div>
      </section>

      <section className="section" aria-labelledby="why-heading">
        <div className="wrap why">
          <h2 id="why-heading">Why HAIHQ Exists</h2>
          <div className="prose">
            <p>
              AI is advancing quickly, but healthcare introduces its own
              technical problems.
            </p>
            <p>
              Healthcare systems have specialized data structures, terminology,
              workflows, interoperability requirements, safety constraints and
              operational realities.
            </p>
            <p>
              AI systems operating in healthcare also need reliable ways to
              access current state, use tools, interact with existing systems
              and remain correct as the environment changes around them.
            </p>
            <p>Those problems need dedicated research and infrastructure.</p>
          </div>
          <p className="why-close">HAIHQ exists to work on them.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="build-heading">
        <div className="wrap stack">
          <h2 id="build-heading">What We Build</h2>
          <div className="builds">
            {build.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how-heading">
        <div className="wrap stack">
          <h2 id="how-heading">How We Work</h2>
          <p className="lede">
            HAIHQ is driven by building and experimentation.
          </p>
          <div className="stack">
            <p className="kicker">A project may produce:</p>
            <ul className="catalog">
              {artifacts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p>
            The goal is to leave behind useful artifacts others can inspect,
            reproduce and build on.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-heading">
        <div className="wrap stack">
          <h2 id="principles-heading">Principles</h2>
          <div className="manifesto">
            {principles.map((item) => (
              <article className="pair" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="direction-heading">
        <div className="wrap stack">
          <h2 id="direction-heading">Long-Term Direction</h2>
          <p className="lede">
            HAIHQ aims to become a home for serious open research and
            infrastructure in Health AI.
          </p>
          <p className="kicker">Our role is simple:</p>
          <blockquote className="pull">
            <p>
              Research important problems, build useful systems, evaluate them
              rigorously, and make the work open.
            </p>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
