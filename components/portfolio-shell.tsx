import type { PropsWithChildren } from "react";

/**
 * Roots portfolio pages to semantic surfaces so toggling `.dark` on <html>
 * flows through CSS variables (not scattered light-only slate utilities).
 */
export function PortfolioMain({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <main
      id="main-content"
      className={["min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]", className].filter(Boolean).join(" ")}
    >
      {children}
    </main>
  );
}
