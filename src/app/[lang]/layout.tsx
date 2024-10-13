import localFont from "next/font/local";
import "../globals.css";
import Script from "next/script";
import { Footer } from "@/components/footer";
import {
  Providers,
  Navbar,
  Toaster,
  ScrollToTop,
  FloatingSearchButton,
} from "@/components/dynamics";
import { ProxyAgent, setGlobalDispatcher } from "undici";
import { IS_PRODUCTION, SITE_URL, GTAG_ID } from "@/lib/utils-server-side";
import { i18n, Locale } from "@/lib/utils-common";
import { ScrollProgress } from "@/components/dynamics";
import { getDictionary } from "@/lib/dictionaries";

// let server side fetch operations use proxy agent in development environment
if (!IS_PRODUCTION) {
  // modify this to your proxy agent url
  setGlobalDispatcher(new ProxyAgent("http://localhost:7897"));
}

export const metadata = {
  // make sure to set the title and description at every page, not here
  // however, the title and description here will be used as fallback
  // if no title and description are set at the page level
  title: `${SITE_URL}`,
  description: `${SITE_URL}`,
  // setting metadata base to the site url and canonical to ./
  // will automatically generate canonical urls for all pages
  // see https://github.com/vercel/next.js/issues/49743
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
};

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const GoogleTag = () => {
  if (GTAG_ID === "not-set") return null;
  return (
    <div className="hidden">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}');
      `,
        }}
      />
    </div>
  );
};

const searchItems = [
  { value: "google", label: "Google" },
  { value: "bing", label: "Bing" },
  { value: "duckduckgo", label: "DuckDuckGo" },
];

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<RootLayoutProps>) {
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300`}
      >
        <Providers>
          {/* UI */}
          <Navbar dictionary={dictionary} />
          <main className="min-h-[60vh]">{children}</main>
          <Footer lang={lang} />
          {/* Fixed */}
          <ScrollProgress />
          <ScrollToTop />
          <FloatingSearchButton items={searchItems} />
          {/* Functional */}
          <Toaster closeButton richColors />
          <GoogleTag />
        </Providers>
      </body>
    </html>
  );
}
