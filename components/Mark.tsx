type MarkProps = {
  className?: string;
};

export function Mark({ className }: MarkProps) {
  return (
    <img
      src="/brand/symbol.png"
      alt=""
      width={1024}
      height={1024}
      className={className ? `mark ${className}` : "mark"}
    />
  );
}
