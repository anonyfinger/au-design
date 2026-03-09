import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { TELEGRAM_URL, SITE_URL, OG_IMAGE } from "../lib/constants";
import { PLATFORM_LIST } from "../lib/platforms";
import { getOrderedGuidePosts } from "../lib/guidePosts";

export const metadata = {
  title: "배너·프로필 제작 가능 플랫폼 목록",
  description:
    "오피가이드·오피스타·오피뷰·외로운밤·오피아트·오피스북·밤공유·부달·대밤·마사지퀸·퀸알바·인천달리기·부산달리기 등 홍보·지역 플랫폼 배너·프로필 맞춤 제작. 플랫폼 규격 1:1 제작. 텔레그램 @AUDesignlab.",
  keywords: [
    "오피가이드 배너제작",
    "오피가이드 배너 제작",
    "배너 제작 플랫폼",
    "오피가이드",
    "오피스타",
    "오피뷰",
    "외로운밤",
    "오피아트",
    "오피스북",
    "밤공유",
    "퀸알바",
    "부달",
    "대밤",
    "마사지퀸",
    "인천달리기",
    "부산달리기",
    "에이유디자인",
    "플랫폼 규격 배너",
    "등록용 배너 제작",
    "홍보 플랫폼 배너",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/platforms`,
    title: "배너·프로필 제작 가능 플랫폼 목록 | 에이유디자인",
    description:
      "오피가이드·오피스타·오피뷰·퀸알바 등 플랫폼별 배너·프로필 맞춤 제작. 규격에 맞는 1:1 제작. 텔레그램 @AUDesignlab.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/platforms` },
};

export default function PlatformsPage() {
  const guidePosts = getOrderedGuidePosts();

  return (
    <div className="wrapper">
      <Header />
      <main id="main-content" className="main" aria-label="배너·프로필 제작 플랫폼 안내">
        <section className="platformPageHero" aria-labelledby="platforms-page-title">
          <div className="container">
            <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "지원 플랫폼" }]} />
            <h1 id="platforms-page-title" className="platformPageLead">
              홍보를 맡기려면 <strong className="emWarm">배너·프로필이 필요합니다.</strong>
              <br />
              그 배너·프로필을 <strong className="emWarm">맞춤 제작</strong>해 드립니다.
            </h1>
            <p className="platformPageSub">
              아래 플랫폼에 등록·게시할 배너·프로필을 <span className="emWarm">플랫폼 규격</span>에 맞춰 제작해 드립니다.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="platformCustomBlock">
              <h2 className="platformCustomTitle">
                대량 시안이 아닌, <span>맞춤형 제작</span>
              </h2>
              <p className="platformCustomDesc">
                업체별·플랫폼별 규격과 컨셉에 맞춘 <strong className="emWarm">1:1 맞춤 제작</strong>입니다.
                <strong>템플릿 납품이 아니라</strong>, 업소 특성과 홍보 목적에 맞게 디자인부터
                조정해 드립니다.
              </p>
              <ul className="platformCustomList">
                <li><span className="emWarm">플랫폼 규격·가이드</span>에 맞춘 사이즈·형식 제작</li>
                <li>업체 <span className="emWarm">컨셉·타겟</span>에 맞춘 디자인 구성</li>
                <li>문의 시 용도·플랫폼 알려주시면 <span className="emWarm">맞춤 견적</span> 안내</li>
              </ul>
            </div>

            <h2 className="sectionTitle">배너 제작 가능 플랫폼</h2>
            <p className="sectionDesc">
              아래와 같은 플랫폼에 올라갈 배너를 제작해 드립니다. <span className="emWarm">목록 외 플랫폼도</span> 문의 주시면 가능 여부 안내해 드립니다.
            </p>
            <ul className="platformGrid">
              {PLATFORM_LIST.map((item) => (
                <li key={item.name} className="platformCard">
                  <span className="platformName">{item.name}</span>
                  {item.region && (
                    <span className="platformRegion">{item.region}</span>
                  )}
                  {item.guideSlug && (
                    <Link
                      href={`/guide/${item.guideSlug}`}
                      className="platformGuideLink"
                      aria-label={`${item.name} 배너 제작 가이드 보기`}
                    >
                      가이드 보기 →
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="sectionCta">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="telegramButton"
              >
                맞춤 견적 문의하기 (텔레그램)
              </a>
            </div>
          </div>
        </section>

        {/* 플랫폼별 SEO 가이드 목록 */}
        <section className="section" aria-labelledby="platforms-guide-title">
          <div className="container">
            <h2 id="platforms-guide-title" className="sectionTitle">
              플랫폼별 배너 제작 가이드
            </h2>
            <p className="sectionDesc">
              오피가이드 배너제작·오피스타 배너제작 등 <span className="emWarm">플랫폼별 규격·제작 방법</span>을 정리했습니다.
            </p>
            <ul className="platformGuideList" aria-label="플랫폼별 배너 제작 가이드 목록">
              {guidePosts.map((post) => (
                <li key={post.slug} className="platformGuideItem">
                  <Link href={`/guide/${post.slug}`} className="platformGuideItemLink">
                    <span className="platformGuideItemTitle">{post.title}</span>
                    <span className="platformGuideItemDesc">{post.description}</span>
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
