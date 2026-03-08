import Link from "next/link";
import { Header, Footer, WorkImage, Breadcrumb } from "../components";
import { TELEGRAM_URL, SITE_URL, OG_IMAGE } from "../lib/constants";
import { WORKS } from "../lib/works";

/** 가로 배너를 먼저, 나머지는 원래 순서 — 다단 레이아웃에서 빈칸 최소화 */
const WORKS_ORDERED = [...WORKS].sort((a, b) =>
  "wide" in b && b.wide ? 1 : "wide" in a && a.wide ? -1 : 0
);

export const metadata = {
  title: "작업물 · 제작 사례",
  description:
    "에이유디자인 오피가이드 배너제작·오피가이드 프로필 제작 사례. 오피스타·퀸알바 등 플랫폼용 맞춤 제작. 문의 텔레그램 @BroCPN.",
  keywords: [
    "오피가이드 배너제작",
    "오피가이드 배너 제작",
    "작업물",
    "제작 사례",
    "배너 제작",
    "프로필 제작",
    "에이유디자인",
    "오피스타 배너 제작",
    "퀸알바 프로필 제작",
    "맞춤형 배너",
  ],
  openGraph: {
    url: `${SITE_URL}/works`,
    title: "작업물 · 오피가이드 배너제작 사례 | 에이유디자인",
    description:
      "에이유디자인 오피가이드 배너제작·프로필 제작 사례. 오피스타·퀸알바 등 맞춤 제작. 텔레그램 @BroCPN.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/works` },
};

export default function WorksPage() {
  return (
    <div className="wrapper">
      <Header />
      <main id="main-content" className="main" aria-label="작업물 · 제작 사례">
        <section className="platformPageHero" aria-labelledby="works-page-hero-title">
          <div className="container">
            <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "제작 사례" }]} />
            <h1 id="works-page-hero-title" className="platformPageLead">
              에이유디자인 <strong>제작 사례</strong>
            </h1>
            <p className="platformPageSub">
              오피가이드 배너제작·오피가이드 프로필 제작을 비롯해 오피스타·퀸알바 등 플랫폼용 맞춤 제작 사례입니다.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="works-page-title">
          <div className="container">
            <h2 id="works-page-title" className="sectionTitle">
              작업물 갤러리
            </h2>
            <ul className="worksPageGrid" aria-label="제작 사례 갤러리">
              {WORKS_ORDERED.map((work, index) => (
                <li
                  key={work.src}
                  className={"wide" in work && work.wide ? "worksPageCard worksPageCardWide" : "worksPageCard"}
                >
                  <WorkImage
                    src={work.src}
                    alt={work.alt}
                    wide={"wide" in work && work.wide}
                    priority={index < 2}
                  />
                </li>
              ))}
            </ul>
            <p className="worksPageCta">
              제작 문의·견적은{" "}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="worksPageCtaLink"
              >
                텔레그램 @BroCPN
              </a>
              으로 부담 없이 연락해 주세요.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
