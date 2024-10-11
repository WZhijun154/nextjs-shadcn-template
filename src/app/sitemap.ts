import { SITE_URL, TODAY_DATE } from "@/lib/utils-server-side";
// export async function generateSitemaps() {
//   // Fetch the total number of products and calculate the number of sitemaps needed
//   return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
// }

export default function sitemap() {
  const current = TODAY_DATE.toISOString().split("T")[0];
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: current,
    },
  ];
}
