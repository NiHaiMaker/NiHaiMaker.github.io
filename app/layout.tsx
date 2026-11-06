import type { Metadata, Viewport } from "next";
import "./globals.css";

const owner = "NiHaiMaker";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const projectPath =
  repository && repository !== `${owner}.github.io` ? `/${repository}` : "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  `https://${owner.toLowerCase()}.github.io${projectPath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NiHaiMaker｜独立软件作品集",
  description:
    "NiHaiMaker 的个人软件作品主页，收录独立设计、开发与维护的桌面工具和实验项目。",
  applicationName: "NiHaiMaker",
  authors: [{ name: "NiHaiMaker", url: "https://github.com/NiHaiMaker" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    title: "NiHaiMaker｜独立软件作品集",
    description: "把想法做成真正有用的软件。",
    siteName: "NiHaiMaker",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1731,
        height: 909,
        alt: "NiHaiMaker 独立软件作品集，当前作品 PurrClick v2.0.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NiHaiMaker｜独立软件作品集",
    description: "把想法做成真正有用的软件。",
    images: [`${siteUrl}/og.png`],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f8fb",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
