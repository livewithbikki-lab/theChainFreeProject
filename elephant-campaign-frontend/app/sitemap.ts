import type { MetadataRoute } from "next";
import { SITE, UPDATES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticRoutes = [
    "",
    "/about",
    "/campaign",
    "/experiences",
    "/updates",
    "/gallery",
    "/get-involved",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const updateRoutes = UPDATES.map((post) => ({
    url: `${base}/updates/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...updateRoutes];
}
