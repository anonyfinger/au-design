import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { SITE_URL, OG_IMAGE } from "../lib/constants";
import { getOrderedGuidePosts } from "../lib/guidePosts";

export const metadata = {
  title: "오피가이드 배너제작 가이드 목록",
  description:
    "오피가이드·오피스타·오피뷰·외로운밤·오피아트·퀸알바·인천달리기·부산달리기 등 플랫폼별 배너·프로필 제작 가이드 모음. 에이유디자인 맞춤 제작 안내.",
  keywords: [
    "오피가이드 배너제작 가이드",
    "오피가이드 배너 제작 방법",
    "배너 제작 가이드",
    "프로필 제작 가이드",
    "오피스타 배너제작",
    "퀸알바 프로필 제작",
    "인천달리기 배너 제작",
    "부산달리기 배너 제작",
    "에이유디자인",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/guide`,
    title: "오피가이드 배너제작 가이드 목록 | 에이유디자인",
    description:
      "오피가이드·오피스타·오피뷰·퀸알바 등 플랫폼별 배너·프로필 제작 가이드. 맞춤 제작 문의 텔레그램 @AUDesignlab.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/guide` },
};

export default function GuidePage() {
  return (
    <div className="wrapper">
      <Header />
      <main id="main-content" className="main" aria-label="배너·프로필 제작 가이드">
        <section className="platformPageHero" aria-labelledby="guide-page-title">
          <div className="container">
            <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "배너 제작 가이드" }]} />
            <h1 id="guide-page-title" className="platformPageLead">
              플랫폼별 <strong>배너·프로필 제작</strong> 가이드
            </h1>
            <p className="platformPageSub">
              오피가이드 배너제작·오피가이드 배너 제작을 비롯해 오피스타·퀸알바·인천달리기·부산달리기 등 키워드별 SEO 최적화 글을 정리했습니다. 지속적으로 플랫폼을 추가합니다.
              플랫폼별·지역별로 묶어서 보시려면{" "}
              <Link href="/keywords" className="sectionSeoIntroLink">
                키워드별 보기
              </Link>
              에서 확인할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="guide-list-title">
          <div className="container">
            <h2 id="guide-list-title" className="sectionTitle">
              가이드 목록
            </h2>
            <ul className="guideList" aria-label="가이드 글 목록">
              {getOrderedGuidePosts().map((post) => (
                <li key={post.slug} className="guideListItem">
                  <Link
                    href={`/guide/${post.slug}`}
                    className="guideListLink"
                  >
                    <span className="guideListTitle">{post.title}</span>
                    <span className="guideListDesc">{post.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
