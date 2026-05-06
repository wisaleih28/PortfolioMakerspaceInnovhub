import { NavLink } from "@/components/molecules/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { SkipToContent } from "@/components/skip-to-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b-8 border-[var(--border-default)] bg-[var(--bg-page)] font-mono">
      <SkipToContent />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-xl font-black uppercase tracking-tighter text-[var(--text-primary)]">Portfolio / Activity Log</p>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-3" aria-label="Primary">
            <NavLink href="/" label="Home" />
            <NavLink href="/work" label="Work" />
            <NavLink href="/logs" label="Logs" />
          </nav>
          <div className="border-l-4 border-[var(--border-default)] pl-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
