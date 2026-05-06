export default function RootLoading() {
  return (
    <main
      className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 font-mono"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="h-12 w-64 animate-pulse border-4 border-[var(--border-default)] bg-[var(--surface-muted)] shadow-[4px_4px_0px_0px_var(--border-default)]" />
      <div className="mt-6 h-6 w-full max-w-2xl animate-pulse border-4 border-[var(--border-default)] bg-[var(--surface-muted)] shadow-[4px_4px_0px_0px_var(--border-default)]" />
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 animate-pulse border-4 border-[var(--border-default)] bg-[var(--bg-card)] shadow-[8px_8px_0px_0px_var(--border-default)]" />
        ))}
      </div>
    </main>
  );
}
