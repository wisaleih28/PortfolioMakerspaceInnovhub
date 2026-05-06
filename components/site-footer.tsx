export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-8 border-[var(--border-default)] bg-[var(--bg-card)] font-mono">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm font-black uppercase text-[var(--text-primary)] sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-md">Built with Next.js App Router, Tailwind CSS, and local JSON/Markdown content.</p>
          <a
            href="/accessibility"
            className="inline-flex min-h-12 items-center border-4 border-[var(--border-default)] bg-[var(--accent)] px-6 text-sm font-black uppercase text-white shadow-[4px_4px_0px_0px_var(--border-default)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
}
