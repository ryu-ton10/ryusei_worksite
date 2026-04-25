import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mPlusRounded1c = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded-1c",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ryusei Nomi - A work website",
  description: "Ryusei Nomiのポートフォリオサイトです。Web開発者としての経歴やプロジェクトを紹介しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${nunito.variable} ${mPlusRounded1c.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
