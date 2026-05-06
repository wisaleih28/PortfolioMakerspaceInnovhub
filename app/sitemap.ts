import type { MetadataRoute } from "next";
import { getLogStaticParams } from "@/lib/portfolio-data";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const now = new Date();
  const logs = getLogStaticParams().map(({ slug }) => ({
    url: `${baseUrl}/logs/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/logs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/accessibility`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    ...logs
  ];
}

