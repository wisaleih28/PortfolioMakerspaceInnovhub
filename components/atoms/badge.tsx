type BadgeProps = {
  children: React.ReactNode;
  tone?: "neutral" | "indigo";
};

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  const className =
    tone === "indigo"
      ? "rounded-none border-2 border-[var(--border-default)] bg-[var(--accent)] px-3 py-1 text-xs font-black uppercase text-white shadow-[2px_2px_0px_0px_var(--border-default)]"
      : "rounded-none border-2 border-[var(--border-default)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-black uppercase text-[var(--text-primary)] shadow-[2px_2px_0px_0px_var(--border-default)]";
  return <span className={className}>{children}</span>;
}
