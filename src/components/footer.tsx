import { LogoIcon } from "@/components/icons";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";

export const Footer = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  return (
    <footer
      id="footer"
      className="flex flex-col items-center bg-muted text-muted-foreground"
    >
      <hr className="w-full mx-auto" />
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <Link
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            {dictionary.brandName}
          </Link>
        </div>

        {dictionary.footer.subSections.map((subSection) => (
          <div key={subSection.h3} className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{subSection.h3}</h3>
            {subSection.items.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className="opacity-60 hover:opacity-100">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="container pb-14 text-center">
        <h3>{dictionary.footer.copyright}</h3>
      </section>
    </footer>
  );
};
