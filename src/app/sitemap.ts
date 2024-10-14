import { SITE_URL, TODAY_DATE } from "@/lib/utils-server-side";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const current = TODAY_DATE.toISOString().split("T")[0];
  return [
    {
      url: `${SITE_URL}`,
      lastModified: current,
    },
  ];
}
