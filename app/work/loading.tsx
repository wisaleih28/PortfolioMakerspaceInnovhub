export default function WorkLoading() {
  return (
    <main
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-7 w-40 animate-pulse rounded bg-[var(--surface-muted)]" />
      <div className="mt-6 h-28 animate-pulse rounded-2xl bg-[var(--surface-muted)]" />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="h-64 animate-pulse rounded-2xl bg-[var(--surface-muted)]" />
        <div className="h-64 animate-pulse rounded-2xl bg-[var(--surface-muted)]" />
        <div className="h-64 animate-pulse rounded-2xl bg-[var(--surface-muted)]" />
      </div>
    </main>
  );
}
