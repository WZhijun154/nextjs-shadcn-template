import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Providers, Navbar, Toaster, ScrollToTop } from "@/components/dynamics";

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

export const metadata: Metadata = {
  title: "Nextjs shadcn template",
  description: "Nextjs shadcn template",
};

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
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster closeButton richColors />
          <GoogleTag gtagId="XXXXXXX" />
        </Providers>
      </body>
    </html>
  );
}
