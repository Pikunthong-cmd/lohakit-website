import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/home/Header";

const prompt = localFont({
  src: [
    {
      path: "../../public/fonts/Prompt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Prompt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Prompt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Prompt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Prompt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ชื่อเว็บ",
  description: "รายละเอียดเว็บ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={prompt.variable}>
      <body>
        <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
