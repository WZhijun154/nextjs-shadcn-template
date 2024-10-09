// import localFont from "next/font/local";
import "./globals.css";
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
import { IS_PRODUCTION, SITE_URL } from "@/lib/utils";

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

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const GoogleTag = ({ gtagId }: { gtagId: string }) => {
  return (
    <div className="hidden">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}');
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`transition-all duration-300`}>
        <Providers>
          <Navbar />
          <FloatingSearchButton items={searchItems} />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster closeButton richColors />
          <GoogleTag gtagId="G-XXXXXXX" />
        </Providers>
      </body>
    </html>
  );
}
