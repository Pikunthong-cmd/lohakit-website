// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/home/Header";
import FloatingLineButton from "@/components/FloatingLineButton";
import Script from "next/script";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://tnlohakit.com/";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-TR28K6G"; 

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const prompt = localFont({
  src: [
    { path: "../../public/fonts/Prompt-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Prompt-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Prompt-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Prompt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Prompt-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "บริษัท ทีเอ็น โลหะกิจ จำกัด | ร้านเหล็กบ้านบึง ชลบุรี",
    template: "%s | TN Lohakit",
  },
  keywords: [
    "ร้านเหล็ก ราคาส่ง",
    "บริการจัดส่งเหล็ก",
    "ออกใบกำกับภาษีเหล็ก",
    "ร้านเหล็กใกล้ฉัน",
    "เหล็กบ้านบึง ชลบุรี",
    "เหล็กรูปพรรณ",
    "เมทัลชีท",
    "เหล็ก พัทยา",
    "เหล็ก ระยอง ",
    "เหล็ก ศรีราชา",
    "เหล็ก บางแสน"
  ],
  description:
    "จำหน่ายเหล็กรูปพรรณ เหล็กกัลวาไนซ์ ฮาร์ดแวร์ บริการจัดส่งไวทั่วบ้านบึง-ชลบุรี ออกใบกำกับภาษีได้",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "บริษัท ทีเอ็น โลหะกิจ จำกัด",
    description: "เหล็กครบจบในที่เดียว บริการจัดส่งไว ออกใบกำกับภาษีได้",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "TN Lohakit" }],
    siteName: "TN Lohakit",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "บริษัท ทีเอ็น โลหะกิจ จำกัด",
    description: "เหล็กครบจบในที่เดียว บริการจัดส่งไว ออกใบกำกับภาษีได้",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

function OrgJsonLd() {
  const url = siteUrl;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "บริษัท ทีเอ็น โลหะกิจ จำกัด",
    url,
    logo: `${url}/images/logo.png`,
    sameAs: [
      "https://www.facebook.com/tnlohakit",
      "https://line.me/R/ti/p/@tnlohakit",
    ],
    description:
      "ร้านเหล็ก ราคาส่ง บริการจัดส่งเหล็ก ออกใบกำกับภาษีเหล็ก ร้านเหล็กใกล้ฉัน ครบจบในที่เดียว",
    address: {
      "@type": "PostalAddress",
      streetAddress: "81 หมู่ 9 ถนน 344 บ้านบึง-แกลง ต.หนองอิรุณ",
      addressLocality: "บ้านบึง",
      addressRegion: "ชลบุรี",
      postalCode: "20220",
      addressCountry: "TH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+66-96-903-9955",
      contactType: "customer service",
      areaServed: "TH",
      availableLanguage: ["Thai"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TN Lohakit",
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/products?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: "บริษัท ทีเอ็น โลหะกิจ จำกัด",
    image: `${url}/images/logo.png`,
    url,
    telephone: "+66-96-903-9955",
    address: {
      "@type": "PostalAddress",
      streetAddress: "81 หมู่ 9 ถนน 344 บ้านบึง-แกลง ต.หนองอิรุณ",
      addressLocality: "บ้านบึง",
      addressRegion: "ชลบุรี",
      postalCode: "20220",
      addressCountry: "TH",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={prompt.variable}>
      <head>
        {/* GA4 (หากจะใช้ผ่าน GTM ให้ลบสองบรรทัดนี้ทิ้ง แล้วไปสร้าง GA4 Tag ใน GTM แทน) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M6GVC2DF17"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M6GVC2DF17', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Google Tag Manager — วางใน <head> */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) — วางทันทีหลัง <body> เปิด */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <OrgJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingLineButton />
      </body>
    </html>
  );
}
