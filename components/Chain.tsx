export function Chain({ steps }: { steps: { label: string; text: string }[] }) {
  return (
    <ol className="chain">
      {steps.map((step, index) => (
        <li key={step.label}>
          <span className="chain-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="chain-label">{step.label}</span>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
