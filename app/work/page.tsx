import Link from "next/link";
import { PortfolioMain } from "@/components/portfolio-shell";
import { ProjectCard } from "@/components/molecules/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getProjects } from "@/lib/portfolio-data";
import { filterProjects, getUniqueCategories, getUniqueTechStack } from "@/lib/work-filter";

type WorkPageProps = {
  searchParams: Promise<{
    category?: string;
    tech?: string;
  }>;
};

function buildFilterHref(category?: string, tech?: string): string {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (tech) params.set("tech", tech);
  const query = params.toString();
  return query ? `/work?${query}` : "/work";
}

function filterChipClass(active: boolean) {
  if (active) {
    return "border-[var(--border-strong)] bg-[var(--accent-soft-bg)] text-[var(--accent-soft-text)]";
  }
  return "border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]";
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = await searchParams;
  const projects = getProjects();
  const filtered = filterProjects(projects, params);
  const categories = getUniqueCategories(projects);
  const technologies = getUniqueTechStack(projects);

  return (
    <PortfolioMain>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 font-mono">
        <SectionHeading
          title="Work Gallery"
          subtitle="Filter activities by category or tech stack without changing UI code."
        />

        <section className="border-4 border-[var(--border-default)] bg-[var(--bg-card)] p-8 shadow-[8px_8px_0px_0px_var(--border-default)]">
          <p className="text-lg font-black uppercase tracking-widest text-[var(--text-primary)]">Category Filters</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/work"
              aria-label="Show all projects"
              className={`inline-flex min-h-12 items-center border-4 border-[var(--border-default)] px-6 text-sm font-black uppercase transition-all ${
                !params.category && !params.tech
                  ? "bg-[var(--accent)] text-white shadow-none translate-x-[4px] translate-y-[4px]"
                  : "bg-[var(--bg-card)] text-[var(--text-primary)] shadow-[4px_4px_0px_0px_var(--border-default)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={buildFilterHref(category, params.tech)}
                aria-label={`Filter by ${category}`}
                className={`inline-flex min-h-12 items-center border-4 px-6 text-sm font-black uppercase transition-all ${
                  params.category === category
                    ? "border-[var(--border-default)] bg-[var(--accent)] text-white shadow-none translate-x-[4px] translate-y-[4px]"
                    : "border-[var(--border-default)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-[4px_4px_0px_0px_var(--border-default)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          <p className="mt-8 text-lg font-black uppercase tracking-widest text-[var(--text-primary)]">Tech Stack Filters</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <Link
                key={tech}
                href={buildFilterHref(params.category, tech)}
                aria-label={`Filter by ${tech}`}
                className={`inline-flex min-h-12 items-center border-4 px-6 text-sm font-black uppercase transition-all ${
                  params.tech === tech
                    ? "border-[var(--border-default)] bg-[var(--accent)] text-white shadow-none translate-x-[4px] translate-y-[4px]"
                    : "border-[var(--border-default)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-[4px_4px_0px_0px_var(--border-default)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                }`}
              >
                {tech}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 portfolio-section">
          <div className="mb-6 text-base font-bold uppercase text-[var(--text-primary)] border-l-8 border-[var(--accent)] pl-4">Showing {filtered.length} item(s).</div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </PortfolioMain>
  );
}
