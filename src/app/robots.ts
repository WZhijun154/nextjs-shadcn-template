import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils-server-side";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/user/",
          "/admin/",
          "/api/",
          "/site/",
          "/*/site/",
          "/whois/",
          "/*/whois/",
          "/traffic/",
          "/*/traffic/",
        ],
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
