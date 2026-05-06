export default function LogsLoading() {
  return (
    <main
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-7 w-40 animate-pulse rounded bg-[var(--surface-muted)]" />
      <div className="mt-6 space-y-4">
        <div className="h-28 animate-pulse rounded-xl bg-[var(--surface-muted)]" />
        <div className="h-28 animate-pulse rounded-xl bg-[var(--surface-muted)]" />
      </div>
    </main>
  );
}
