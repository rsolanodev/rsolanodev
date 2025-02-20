export default function Section({
  children,
  name,
  className,
}: {
  children: React.ReactNode;
  name?: string;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border bg-card text-card-foreground shadow p-6 backdrop-blur-md bg-black/50 ${
        name ? `section-${name}` : ""
      } ${className || ""}`}
    >
      {children}
    </section>
  );
}
