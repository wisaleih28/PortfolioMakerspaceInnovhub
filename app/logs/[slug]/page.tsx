import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioMain } from "@/components/portfolio-shell";
import { getAllLogs, getLogBySlug, getLogStaticParams } from "@/lib/portfolio-data";

type LogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getLogStaticParams();
}

export async function generateMetadata({ params }: LogPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const log = await getLogBySlug(slug);
    return {
      title: `${log.frontmatter.title} | Internship Log`,
      description: log.frontmatter.summary
    };
  } catch {
    return {
      title: "Log Not Found | Internship Log"
    };
  }
}

export default async function LogDetailPage({ params }: LogPageProps) {
  const { slug } = await params;
  const logs = await getAllLogs();
  const existing = logs.find((item) => item.slug === slug);
  if (!existing) notFound();

  return (
    <PortfolioMain>
      <div className="portfolio-section mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 font-mono">
        <article className="border-8 border-[var(--border-default)] bg-[var(--bg-card)] p-10 shadow-[12px_12px_0px_0px_var(--border-default)]">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b-8 border-[var(--border-default)] pb-8">
            <p className="border-4 border-[var(--border-default)] bg-[var(--accent)] px-4 py-2 text-lg font-black uppercase tracking-widest text-white shadow-[6px_6px_0px_0px_var(--border-default)]">
              Week {existing.frontmatter.week}
            </p>
            <p className="text-base font-black uppercase tracking-widest text-[var(--text-primary)]">{existing.frontmatter.date}</p>
          </div>
          <h1 className="text-5xl font-black uppercase leading-tight tracking-tighter text-[var(--text-primary)] sm:text-6xl">{existing.frontmatter.title}</h1>
          <div className="log-html mt-12 max-w-none border-t-4 border-[var(--border-default)] pt-12" dangerouslySetInnerHTML={{ __html: existing.contentHtml }} />
        </article>
      </div>
    </PortfolioMain>
  );
}
