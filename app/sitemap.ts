import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/constants";
import { getAllGuideSlugs } from "./lib/guidePosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const guideSlugs = getAllGuideSlugs();
  const guideEntries: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${SITE_URL}/guide/${encodeURIComponent(slug)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/platforms`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guide`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/keywords`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...guideEntries,
  ];
}
