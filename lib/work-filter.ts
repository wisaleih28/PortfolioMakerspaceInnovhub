import type { Project } from "@/types/portfolio";

export type WorkFilterParams = {
  category?: string;
  tech?: string;
};

export function getUniqueCategories(projects: Project[]): string[] {
  return [...new Set(projects.map((project) => project.category))].sort();
}

export function getUniqueTechStack(projects: Project[]): string[] {
  return [...new Set(projects.flatMap((project) => project.techStack))].sort((a, b) => a.localeCompare(b));
}

export function filterProjects(projects: Project[], filters: WorkFilterParams): Project[] {
  return projects.filter((project) => {
    const categoryMatch = !filters.category || project.category === filters.category;
    const techMatch = !filters.tech || project.techStack.includes(filters.tech);
    return categoryMatch && techMatch;
  });
}
