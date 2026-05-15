import { PortfolioMain } from "@/components/portfolio-shell";
import { SectionHeading } from "@/components/section-heading";
export default function AccessibilityPage() {
  return (
    <PortfolioMain>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          title="Accessibility Statement"
          subtitle="This site is designed to be usable with keyboard navigation and screen readers."
        />

        <article className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] p-6 shadow-sm">
          <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-6">
            <p>
              The portfolio follows semantic HTML patterns (header/navigation/main landmarks) and uses clear focus styles.
              Interactive elements are built with touch-ready targets (minimum 44x44px).
            </p>
            <p className="text-[var(--text-primary)] font-medium">Keyboard support</p>
            <ul className="ml-5 list-disc marker:text-[var(--text-muted)]">
              <li>Use <span className="font-medium">Tab</span> to move through links and buttons.</li>
              <li>Use <span className="font-medium">Enter</span> to activate buttons/links.</li>
              <li>Use “Skip to content” to jump directly to the main page content.</li>
            </ul>

            <p className="text-[var(--text-primary)] font-medium">Theme support</p>
            <ul className="ml-5 list-disc marker:text-[var(--text-muted)]">
              <li>Dark mode applies at the document root (<code>html.dark</code>) to ensure consistent styling.</li>
              <li>Your choice is stored locally and won’t be overridden by system theme after you set it.</li>
            </ul>

            <p>
              If you find any accessibility issues, update components in <code>/components</code> so fixes are applied
              across the entire site.
            </p>
          </div>
        </article>
      </div>
    </PortfolioMain>
  );
}

