"use client";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 z-50 rounded-lg bg-[var(--surface-elevated)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] border border-[var(--border-default)] shadow-sm"
    >
      Skip to content
    </a>
  );
}

