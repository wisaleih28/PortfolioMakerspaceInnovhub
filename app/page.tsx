import Image from "next/image";
import Link from "next/link";
import { getProjects, getWeeklyLogs } from "@/lib/portfolio-data";

const expertise = [
  {
    title: "Branding",
    description: "Identity systems and visual direction for products that need clarity and memorability."
  },
  {
    title: "Web Design",
    description: "Clean, conversion-focused interfaces designed for speed, accessibility, and modern UX."
  },
  {
    title: "UI/UX Design",
    description: "Research-backed user flows and interaction patterns tailored for real-world usage."
  },
  {
    title: "Web Development",
    description: "Production-grade React and Next.js implementations with modular architecture."
  }
];

export default function HomePage() {
  const projects = getProjects();
  const weeklyLogs = getWeeklyLogs();
  const featured = projects.slice(0, 3);
  const articleLogs = weeklyLogs.slice(0, 3);

  return (
    <main id="main-content" className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-mono">
      <section className="border-b-8 border-[var(--border-default)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
          <div>
            <p className="inline-block border-2 border-[var(--border-default)] bg-[var(--accent)] px-2 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_var(--border-default)]">Professional Portfolio</p>
            <h1 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl">
              Im Wesley Lebusta, Frontend Dev
            </h1>
            <p className="mt-6 max-w-xl text-base font-bold leading-relaxed text-[var(--text-primary)] sm:text-lg uppercase">
              I build clean and performant digital products using a modular, data-driven workflow. This portfolio
              showcases internship outputs, case highlights, and weekly activity logs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="/work"
                className="inline-flex min-h-14 items-center justify-center border-4 border-[var(--border-default)] bg-[var(--accent)] px-8 text-base font-black uppercase text-white shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all"
              >
                Browse Portfolio
              </Link>
              <Link
                href="/logs"
                className="inline-flex min-h-14 items-center justify-center border-4 border-[var(--border-default)] bg-[var(--accent)] px-8 text-base font-black uppercase text-white shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all"
              >
                View Weekly Logs
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-8 border-[var(--border-default)] shadow-[12px_12px_0px_0px_var(--border-default)] sm:h-64 sm:w-64 md:h-80 md:w-80">
              <Image src="/images/profile/profile-photo.jpg" alt="Wesley Lebusta Profile Photo" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">My Expertise</h2>
        <p className="mt-4 max-w-2xl text-base font-bold uppercase text-[var(--text-primary)]">
          End-to-end support from strategy to implementation, adapted to startup and product-team workflows.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {expertise.map((item) => (
            <article key={item.title} className="border-4 border-[var(--border-default)] bg-[var(--bg-card)] p-6 shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all">
              <h3 className="text-2xl font-black uppercase">{item.title}</h3>
              <p className="mt-4 text-base font-bold uppercase leading-relaxed text-[var(--text-primary)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t-8 border-[var(--border-default)] bg-[var(--surface-muted)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">Featured Highlights</h2>
              <p className="mt-4 max-w-2xl text-base font-bold uppercase text-[var(--text-primary)]">
                Selected highlights from internship projects covering frontend implementation, research, and system validation.
              </p>
            </div>
            <Link href="/work" className="inline-flex min-h-14 items-center border-4 border-[var(--border-default)] bg-[var(--accent)] px-8 text-sm font-black uppercase text-white shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all">
              View all work
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featured.map((project) => (
              <article key={project.id} className="border-4 border-[var(--border-default)] bg-[var(--bg-card)] shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all">
                <div className="relative h-56 border-b-4 border-[var(--border-default)]">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="inline-block border-2 border-[var(--border-default)] bg-[var(--accent)] px-2 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_var(--border-default)]">{project.category}</p>
                  <h3 className="mt-4 text-2xl font-black uppercase leading-tight">{project.title}</h3>
                  <p className="mt-4 text-base font-bold uppercase text-[var(--text-primary)]">{project.description}</p>
                  <p className="mt-6 text-sm font-black uppercase tracking-widest text-[var(--accent)]">{project.completionDate}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-8 border-[var(--border-default)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">Live Internship Timeline</h2>
              <p className="mt-4 max-w-2xl text-base font-bold uppercase text-[var(--text-primary)]">
                Week-by-week progress from OJT activities, features, audits, and deployment tasks.
              </p>
            </div>
            <Link href="/logs" className="inline-flex min-h-14 items-center border-4 border-[var(--border-default)] bg-[var(--accent)] px-8 text-sm font-black uppercase text-[var(--bg-page)] shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all">
              Open all weekly logs
            </Link>
          </div>

          <div className="mt-12 space-y-6">
            {weeklyLogs.slice(0, 6).map((log) => (
              <article
                key={log.slug}
                className="border-4 border-[var(--border-default)] bg-[var(--bg-card)] p-6 shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b-4 border-[var(--border-default)] pb-4">
                  <p className="border-2 border-[var(--border-default)] bg-[var(--accent)] px-3 py-1 text-sm font-black uppercase tracking-widest text-[var(--bg-page)] shadow-[4px_4px_0px_0px_var(--border-default)]">Week {log.week}</p>
                  <p className="text-sm font-black uppercase tracking-widest text-[var(--text-primary)]">{log.dateRange}</p>
                </div>
                <h3 className="text-3xl font-black uppercase">{log.title}</h3>
                <p className="mt-3 text-base font-bold uppercase text-[var(--text-primary)]">{log.focus}</p>
                <Link
                  href={`/logs/${log.slug}`}
                  className="mt-6 inline-flex min-h-14 items-center border-4 border-[var(--border-default)] bg-[var(--accent)] px-8 text-sm font-black uppercase text-white shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all"
                >
                  Read weekly details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-8 border-[var(--border-default)] bg-[var(--accent)]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-[var(--bg-page)] sm:text-7xl">Lets Skyrocket Your Next Project Together</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg font-bold uppercase leading-relaxed text-[var(--bg-page)]">
            I focus on scalable code architecture, user-centered interfaces, and clear delivery milestones from concept
            to production.
          </p>
          <Link
            href="/work"
            className="mt-10 inline-flex min-h-16 items-center border-4 border-[var(--border-default)] bg-[var(--bg-card)] px-10 text-xl font-black uppercase text-[var(--text-primary)] shadow-[12px_12px_0px_0px_var(--border-default)] hover:translate-x-[12px] hover:translate-y-[12px] hover:shadow-none transition-all"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="border-t-8 border-[var(--border-default)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">About Me</h2>
          <p className="mt-6 max-w-4xl text-lg font-bold uppercase leading-relaxed text-[var(--text-primary)]">
            My internship work spans PandaChain DMS, community research workflows, and MediTrack platform development.
            I combine design thinking and frontend engineering to deliver maintainable, high-impact digital solutions.
          </p>
        </div>
      </section>

      <section className="border-t-8 border-[var(--border-default)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl">My Articles</h2>
            <Link href="/logs" className="inline-flex min-h-14 items-center border-4 border-[var(--border-default)] bg-[var(--accent)] px-8 text-sm font-black uppercase text-white shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all">
              Explore all logs
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {articleLogs.map((log) => (
              <article key={log.slug} className="border-4 border-[var(--border-default)] bg-[var(--bg-card)] p-6 shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all">
                <p className="inline-block border-2 border-[var(--border-default)] bg-[var(--accent)] px-2 py-1 text-xs font-black uppercase tracking-widest text-[var(--bg-page)] shadow-[4px_4px_0px_0px_var(--border-default)]">Week {log.week}</p>
                <h3 className="mt-6 text-2xl font-black uppercase leading-tight">{log.title}</h3>
                <p className="mt-4 text-base font-bold uppercase text-[var(--text-primary)]">{log.focus}</p>
                <Link href={`/logs/${log.slug}`} className="mt-8 inline-flex min-h-14 w-full items-center justify-center border-4 border-[var(--border-default)] bg-[var(--bg-page)] px-8 text-sm font-black uppercase shadow-[8px_8px_0px_0px_var(--border-default)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
