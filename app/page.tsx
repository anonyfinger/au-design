import type { Metadata } from "next";
import {
  Header,
  Footer,
  Hero,
  HeroPriceStrip,
  SectionTrust,
  SectionPrice,
  SectionFullService,
  SectionCustom,
  SectionNotice,
  CtaBlock,
  FloatingCta,
  SectionPromoSite,
  ScrollReveal,
  PortfolioSection,
} from "./components";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  OG_IMAGE,
} from "./lib/constants";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: [
    "오피가이드 배너제작",
    "오피가이드 배너 제작",
    "오피가이드 프로필 제작",
    "오피가이드 프로필제작",
    "오피스타 배너제작",
    "오피스타 프로필제작",
    "퀸알바 프로필 제작",
    "부달 배너",
    "대밤 배너",
    "에이유디자인",
    "업소 배너 제작",
    "스웨디시 배너 제작",
    "배너 제작 업체",
    "메인 프로필 제작",
    "맞춤형 배너",
    "플랫폼 규격 배너",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "에이유디자인",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@AUDesignlab",
    site: "@AUDesignlab",
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: SITE_URL },
};

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main id="main-content" className="main" aria-label="메인 콘텐츠">
        <Hero />
        <HeroPriceStrip />
        <SectionTrust />
        <ScrollReveal variant="up">
          <PortfolioSection />
        </ScrollReveal>
        <ScrollReveal variant="left">
          <SectionPrice />
        </ScrollReveal>
        <ScrollReveal variant="right">
          <SectionFullService />
        </ScrollReveal>
        <ScrollReveal variant="left">
          <SectionCustom />
        </ScrollReveal>
        <ScrollReveal variant="right">
          <SectionPromoSite />
        </ScrollReveal>
        <ScrollReveal variant="left">
          <SectionNotice />
        </ScrollReveal>
        <ScrollReveal variant="up">
          <CtaBlock />
        </ScrollReveal>
      
      </main>
      <FloatingCta />
      <Footer />
    </div>
  );
}
