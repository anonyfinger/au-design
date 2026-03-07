import { Header, Footer, WorkImage, Breadcrumb } from "../components";
import { TELEGRAM_URL, SITE_URL, OG_IMAGE } from "../lib/constants";
import { WORKS } from "../lib/works";

export const metadata = {
  title: "작업물 · 제작 사례",
  description:
    "에이유디자인 오피가이드 배너제작·오피가이드 프로필 제작 사례. 오피스타·퀸알바 등 플랫폼용 맞춤 제작. 문의 텔레그램 @AUDesignlab.",
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
      "에이유디자인 오피가이드 배너제작·프로필 제작 사례. 오피스타·퀸알바 등 맞춤 제작. 텔레그램 @AUDesignlab.",
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
              배너 작업물 갤러리
            </h2>
            <ul className="worksPageGrid" aria-label="제작 사례 갤러리">
              {WORKS.map((work, index) => (
                <li key={work.src} className="worksPageCard">
                  <WorkImage
                    src={work.src}
                    alt={work.alt}
                    wide={false}
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
                텔레그램 @AUDesignlab
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
