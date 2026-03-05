import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, COMPANY_NAME, BRAND_SLUG, OG_IMAGE } from "./lib/constants";
import "./globals.scss";
import JsonLd from "./components/JsonLd";

const naemojin = localFont({
  src: [
    { path: "../fonts/210 네모진OTF 010.otf", weight: "100" },
    { path: "../fonts/210 네모진OTF 020.otf", weight: "300" },
    { path: "../fonts/210 네모진OTF 030.otf", weight: "400" },
    { path: "../fonts/210 네모진OTF 040.otf", weight: "500" },
    { path: "../fonts/210 네모진OTF 050.otf", weight: "700" },
  ],
  variable: "--font-naemojin",
  display: "swap",
});

const title = SITE_NAME;
const description = SITE_DESCRIPTION;
const keywords = [
  "오피가이드 배너제작",
  "오피가이드 배너 제작",
  "오피가이드 프로필 제작",
  "오피가이드 프로필제작",
  "오피스타 배너제작",
  "오피스타 배너 제작",
  "오피스타 프로필 제작",
  "오피뷰 배너 제작",
  "오피뷰 배너제작",
  "외로운밤 배너 제작",
  "외로운밤 배너제작",
  "오피아트 배너 제작",
  "오피아트 배너제작",
  "오피스북 배너 제작",
  "밤공유 배너 제작",
  "대밤 배너 제작",
  "대밤 배너제작",
  "마사지퀸 배너 제작",
  "마사지퀸 배너제작",
  "인천달리기 배너 제작",
  "부산달리기 배너 제작",
  "오피뷰 프로필 제작",
  "외로운밤 프로필 제작",
  "오피아트 프로필 제작",
  "퀸알바 배너 제작",
  "퀸알바 프로필 제작",
  "부달 배너",
  "부달 프로필 제작",
  "대밤 프로필 제작",
  "배너업체",
  "배너 제작 업체",
  "프로필 제작",
  "배너 맞춤 제작",
  "홍보 배너 제작",
  "에이유디자인",
  "배너 디자인",
  "업소 배너 제작",
  "업소 프로필 제작",
  "스웨디시 배너 제작",
  "스웨 배너",
  "유흥업소 배너",
  "홍보물 제작",
  "메인 프로필 제작",
  "출근부 제작",
  "맞춤형 배너",
  "프리미엄 배너 제작",
  "플랫폼 규격 배너",
  "등록용 배너 제작",
  "광고 배너 제작",
  "채널 배너 제작",
  "au-designlab",
  "에이유디자인 배너",
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: COMPANY_NAME,
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords,
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    telephone: false,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: `${COMPANY_NAME} (${BRAND_SLUG})`,
    title,
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@AuDesign",
    site: "@AuDesign",
    images: [OG_IMAGE.url],
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${naemojin.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          본문으로 건너뛰기
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
