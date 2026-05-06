export default function LogLoading() {
  return (
    <main
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-8 w-72 animate-pulse rounded bg-[var(--surface-muted)]" />
      <div className="mt-3 h-4 w-32 animate-pulse rounded bg-[var(--surface-muted)]" />
      <div className="mt-8 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-[var(--surface-muted)]" />
        <div className="h-4 w-full animate-pulse rounded bg-[var(--surface-muted)]" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-[var(--surface-muted)]" />
      </div>
    </main>
  );
}
