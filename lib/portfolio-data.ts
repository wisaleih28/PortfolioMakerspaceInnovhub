import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import type { Audit, LogEntry, LogFrontmatter, Project, Reflection, WeeklyLog } from "@/types/portfolio";

const dataDir = path.join(process.cwd(), "data");
const contentDir = path.join(process.cwd(), "content");
const logsDir = path.join(contentDir, "logs");

function readJsonFile<T>(fileName: string): T {
  const filePath = path.join(dataDir, fileName);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function getProjects(): Project[] {
  return readJsonFile<Project[]>("projects.json");
}

export function getWeeklyLogs(): WeeklyLog[] {
  const logs = readJsonFile<WeeklyLog[]>("weekly-logs.json");
  return logs.sort((a, b) => b.week - a.week);
}

export function getAudits(): Audit[] {
  return readJsonFile<Audit[]>("audits.json");
}

export function getReflection(): Reflection {
  const filePath = path.join(contentDir, "reflection.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    title: String(data.title ?? "Professional Reflection"),
    updatedAt: String(data.updatedAt ?? "TBD"),
    body: content.trim()
  };
}

function getLogSlugs(): string[] {
  if (!fs.existsSync(logsDir)) return [];
  return fs
    .readdirSync(logsDir)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

async function markdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(markdown);
  return String(processed);
}

export async function getAllLogs(): Promise<LogEntry[]> {
  const slugs = getLogSlugs();
  const entries = await Promise.all(slugs.map((slug) => getLogBySlug(slug)));
  return entries.sort((a, b) => b.frontmatter.week - a.frontmatter.week);
}

export async function getLogBySlug(slug: string): Promise<LogEntry> {
  const filePath = path.join(logsDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const frontmatter: LogFrontmatter = {
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    week: Number(data.week ?? 0),
    date: String(data.date ?? "TBD")
  };

  return {
    slug,
    frontmatter,
    contentHtml: await markdownToHtml(content)
  };
}

export function getLogStaticParams(): Array<{ slug: string }> {
  return getLogSlugs().map((slug) => ({ slug }));
}
