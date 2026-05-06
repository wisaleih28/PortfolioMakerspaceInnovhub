import Image from "next/image";
import { Badge } from "@/components/atoms/badge";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border-4 border-[var(--border-default)] bg-[var(--bg-card)] shadow-[8px_8px_0px_0px_var(--border-default)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      <div className="relative h-56 w-full border-b-4 border-[var(--border-default)]">
        <Image
          src={project.image}
          alt={`${project.title} cover`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={Boolean(project.featured)}
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-2xl font-black uppercase text-[var(--text-primary)]">{project.title}</h3>
          <Badge>{project.category}</Badge>
        </div>

        <p className="mt-4 text-sm font-black uppercase tracking-widest text-[var(--accent)]">{project.completionDate}</p>

        <p className="mt-4 text-base font-bold uppercase text-[var(--text-primary)]">{project.description}</p>

        <ul className="mt-4 space-y-2 text-sm font-bold uppercase text-[var(--text-secondary)]">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="list-disc marker:text-[var(--text-muted)] ml-5">
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="border-2 border-[var(--border-default)] bg-[var(--pill-tech-bg)] px-2 py-1 text-xs font-black uppercase text-[var(--pill-tech-text)] shadow-[2px_2px_0px_0px_var(--border-default)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

