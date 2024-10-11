import { LogoIcon } from "@/components/icons";
import { UI_TITLE } from "@/lib/utils";
import Link from "next/link";
import { TODAY_YEAR } from "@/lib/utils";

export const Footer = () => {
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
            {UI_TITLE}
          </Link>
        </div>

        {/* <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow me</h3>
          <div>
            <Link
              rel="noreferrer noopener"
              href={AUTHOR_GITHUB_URL}
              className="opacity-60 hover:opacity-100"
            >
              Github
            </Link>
          </div>

          <div>
            <Link
              rel="noreferrer noopener"
              href={AUTHOR_X_URL}
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </Link>
          </div>
        </div> */}

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </Link>
          </div>

          {/* <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </Link>
          </div>

          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </Link>
          </div> */}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </Link>
          </div>

          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </Link>
          </div>

          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </Link>
          </div>

          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Feedback
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Find more tools</h3>
          <div>
            <Link
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; {TODAY_YEAR} {UI_TITLE}. All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
