export function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <figure className="code">
      <figcaption className="kicker">{label}</figcaption>
      <pre>
        <code>{code}</code>
      </pre>
    </figure>
  );
}

export function StepStack({ steps }: { steps: string[] }) {
  return (
    <ol className="step-stack">
      {steps.map((step, index) => (
        <li key={step}>
          {index > 0 ? (
            <span className="plus" aria-hidden="true">
              +
            </span>
          ) : null}
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function StackFrame({
  label,
  steps,
}: {
  label: string;
  steps: string[];
}) {
  return (
    <figure className="code">
      <figcaption className="kicker">{label}</figcaption>
      <div className="code-body">
        <StepStack steps={steps} />
      </div>
    </figure>
  );
}
