import type { WeeklyLog } from "@/types/portfolio";

type WeeklyLogCardProps = {
  log: WeeklyLog;
};

export function WeeklyLogCard({ log }: WeeklyLogCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-soft-text)]">Week {log.week}</p>
      <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{log.title}</h3>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{log.dateRange}</p>
      <p className="mt-3 text-sm text-[var(--text-secondary)]">
        <span className="font-medium text-[var(--text-primary)]">Focus:</span> {log.focus}
      </p>

      <div className="mt-4">
        <p className="text-sm font-medium text-[var(--text-primary)]">Outcomes</p>
        <ul className="mt-2 space-y-1 text-sm text-[var(--text-secondary)]">
          {log.outcomes.map((item) => (
            <li key={item} className="ml-5 list-disc marker:text-[var(--text-muted)]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {log.blockers?.length ? (
        <div className="mt-4 rounded-lg border border-amber-200/70 bg-amber-50/90 p-3 dark:border-amber-500/30 dark:bg-amber-500/15">
          <p className="text-sm font-medium text-amber-900 dark:text-amber-200">Blockers</p>
          <ul className="mt-2 space-y-1 text-sm text-amber-800 dark:text-amber-100">
            {log.blockers.map((item) => (
              <li key={item} className="ml-5 list-disc marker:text-amber-500 dark:marker:text-amber-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
