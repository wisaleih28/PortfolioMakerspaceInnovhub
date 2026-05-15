import Link from "next/link";
import { PortfolioMain } from "@/components/portfolio-shell";
import { SectionHeading } from "@/components/section-heading";
import { getAllLogs } from "@/lib/portfolio-data";

export default async function LogsIndexPage() {
  const logs = await getAllLogs();

  return (
    <PortfolioMain>
      <div className="portfolio-section mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 font-mono">
        <SectionHeading title="Weekly Logs" subtitle="Markdown-driven internship logs with static generation." />
        <div className="mt-12 space-y-8">
          {logs.map((log) => (
            <article
              key={log.slug}
              className="border-4 border-[var(--border-default)] bg-[var(--bg-card)] p-8 shadow-[8px_8px_0px_0px_var(--border-default)] transition-all hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b-4 border-[var(--border-default)] pb-4">
                <p className="border-2 border-[var(--border-default)] bg-[var(--accent)] px-3 py-1 text-sm font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_var(--border-default)]">
                  Week {log.frontmatter.week}
                </p>
                <p className="text-sm font-black uppercase tracking-widest text-[var(--text-primary)]">{log.frontmatter.date}</p>
              </div>
              <h2 className="text-3xl font-black uppercase text-[var(--text-primary)]">{log.frontmatter.title}</h2>
              <p className="mt-4 text-base font-bold uppercase text-[var(--text-secondary)]">{log.frontmatter.summary}</p>
              <Link
                href={`/logs/${log.slug}`}
                aria-label={`Read full entry for Week ${log.frontmatter.week}: ${log.frontmatter.title}`}
                className="mt-8 inline-flex min-h-12 items-center border-4 border-[var(--border-default)] bg-[var(--accent)] px-8 text-sm font-black uppercase text-white shadow-[4px_4px_0px_0px_var(--border-default)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
              >
                Read full entry
                <span className="sr-only"> for Week {log.frontmatter.week}: {log.frontmatter.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PortfolioMain>
  );
}
