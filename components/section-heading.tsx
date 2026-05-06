type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-black uppercase tracking-tighter text-[var(--text-primary)] sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-base font-bold uppercase text-[var(--text-secondary)]">{subtitle}</p> : null}
    </div>
  );
}
