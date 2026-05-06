export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: "SEO Audit" | "Frontend" | "Research" | "Backend" | "DevOps" | "Documentation";
  image: string;
  featured?: boolean;
  highlights: string[];
};

export type WeeklyLog = {
  week: number;
  slug: string;
  title: string;
  dateRange: string;
  focus: string;
  outcomes: string[];
  blockers?: string[];
};

export type Audit = {
  id: string;
  area: string;
  finding: string;
  action: string;
  severity: "low" | "medium" | "high";
};

export type Reflection = {
  title: string;
  updatedAt: string;
  body: string;
};

export type LogFrontmatter = {
  title: string;
  summary: string;
  week: number;
  date: string;
};

export type LogEntry = {
  slug: string;
  frontmatter: LogFrontmatter;
  contentHtml: string;
};
