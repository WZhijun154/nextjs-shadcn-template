import fs from "fs";
import path from "path";
import React from "react";
import Link from "next/link";

export function getAllPageLinks() {
  const pagesDir = path.join(process.cwd(), "src/app");

  function getPageLinks(dir: string): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let links: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        links = links.concat(getPageLinks(fullPath));
      } else if (
        entry.isFile() &&
        (entry.name === "page.tsx" || entry.name === "page.dev.tsx")
      ) {
        const relativePath = path.relative(pagesDir, fullPath);
        const pageName = path.dirname(relativePath);
        links.push(pageName === "." ? "/" : `/${pageName}`);
      }
    }

    return links;
  }

  return getPageLinks(pagesDir);
}

const PageLinks = () => {
  const links = getAllPageLinks();

  return (
    <div className="p-5">
      <h2 className="custom-h2">All Pages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {links.map((link) => (
          <div key={link} className="mb-5">
            <Link href={link}>
              <p className="text-primary hover:underline">{link}</p>
            </Link>
            <iframe
              src={link}
              className="w-full h-64 border-none"
              title={`Page Preview - ${link}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageLinks;
