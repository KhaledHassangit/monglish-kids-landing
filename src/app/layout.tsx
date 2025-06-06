// importing React components
import type { Metadata } from "next";
import { Cairo, Poppins } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import dynamic from "next/dynamic";
// importing Components
const ClientLanguageProvider = dynamic(
  () => import("@/app/lang/ClientLanguageProvider")
);
const Header = dynamic(() => import("@/app/utils/Header"));
const Footer = dynamic(() => import("@/app/utils/Footer"));
// importing PopupProvider
import { PopupProvider } from "./context/PopupContext";

// importing Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Monglish",
  description: "Monglish International Academy",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const direction = params.lang === "ar" ? "rtl" : "ltr";
  return (
    <html
      lang={params.lang}
      dir={direction}
      className={`${cairo.variable} ${poppins.variable}`}
    >
      <head>
        {/*  Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2QX8JL9');
            `}
        </Script>
        {/*  End Google Tag Manager */}
      </head>
      <body className={`${poppins.className} ${cairo.className} antialiased`}>
        <ClientLanguageProvider>
          <PopupProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </PopupProvider>
        </ClientLanguageProvider>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2QX8JL9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
