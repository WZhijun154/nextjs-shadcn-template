import { LogoIcon } from "@/components/icons";
import { LocalizeLink } from "./localize-link";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/utils-common";

export const Footer = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);
  return (
    <footer
      id="footer"
      className="flex flex-col items-center bg-muted text-foreground"
    >
      <hr className="w-full mx-auto" />
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <LocalizeLink
            rel="noreferrer noopener"
            href="/"
            lang={lang}
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            {dictionary.brandName}
          </LocalizeLink>
        </div>

        {dictionary.footer.subSections.map((subSection) => (
          <div key={subSection.category} className="flex flex-col gap-2">
            <p className="font-bold text-lg">{subSection.category}</p>
            {subSection.items.map((item) => (
              <div key={item.label}>
                <LocalizeLink
                  href={item.href}
                  lang={lang}
                  className="opacity-50 hover:opacity-100 duration-300 transition-all"
                >
                  {item.label}
                </LocalizeLink>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="container pb-14 text-center">
        &copy; <p className="inline">{dictionary.footer.copyright}</p>
      </section>
    </footer>
  );
};
