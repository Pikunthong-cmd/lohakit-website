import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "ชื่อเว็บ",
  description: "รายละเอียดเว็บ"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={prompt.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
