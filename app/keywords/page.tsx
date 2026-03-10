import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { SITE_URL, OG_IMAGE, COMPANY_NAME } from "../lib/constants";
import { getGuidePostsByCategory } from "../lib/guidePosts";

export const metadata = {
  title: "플랫폼·지역별 배너 제작 키워드 목록",
  description:
    "오피가이드·오피스타·퀸알바·오피뷰·외로운밤·오피아트·오피스북·밤공유·대밤·마사지퀸·인천달리기·부산달리기 플랫폼·지역별 배너·프로필 제작 가이드 목록. 에이유디자인.",
  keywords: [
    "오피가이드 배너제작",
    "오피가이드 배너 제작",
    "오피가이드 프로필 제작",
    "배너 제작 키워드",
    "프로필 제작 키워드",
    "오피스타 배너 제작",
    "퀸알바 프로필 제작",
    "인천달리기 배너 제작",
    "부산달리기 배너 제작",
    "파주가라오케 배너 제작",
    "파주노래방 배너 제작",
    "파주 퍼블릭 배너 제작",
    "플랫폼별 배너 제작",
    "지역별 배너 제작",
    "에이유디자인",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: `${SITE_URL}/keywords`,
    title: "플랫폼·지역별 배너 제작 키워드 목록 | 에이유디자인",
    description:
      "오피가이드·오피스타·퀸알바·인천달리기·부산달리기 등 플랫폼별·지역별 배너·프로필 제작 가이드. 텔레그램 @AUDesignlab.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/keywords` },
};

const CATEGORY_LABELS: Record<"platform" | "region", string> = {
  platform: "플랫폼별 배너·프로필 제작",
  region: "지역별 배너·프로필 제작",
};

export default function KeywordsPage() {
  const { platform, region } = getGuidePostsByCategory();
  const allPosts = [...platform, ...region];

  const platformListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/keywords#platform-list`,
    name: "플랫폼별 배너·프로필 제작 가이드",
    url: `${SITE_URL}/keywords`,
    numberOfItems: platform.length,
    itemListElement: platform.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/guide/${post.slug}`,
      name: post.title,
    })),
  };

  const regionListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/keywords#region-list`,
    name: "지역별 배너·프로필 제작 가이드",
    url: `${SITE_URL}/keywords`,
    numberOfItems: region.length,
    itemListElement: region.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/guide/${post.slug}`,
      name: post.title,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "키워드별 보기", item: `${SITE_URL}/keywords` },
    ],
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/keywords`,
    name: "플랫폼·지역별 배너 제작 키워드 목록",
    description: "오피가이드·오피스타·오피매니아·밤의전쟁·알밤·건마존·퀸알바·인천달리기·부산달리기 플랫폼·지역별 배너·프로필 제작 가이드 목록. 에이유디자인.",
    url: `${SITE_URL}/keywords`,
    inLanguage: "ko",
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: COMPANY_NAME },
    numberOfItems: allPosts.length,
    mainEntity: [
      { "@id": `${SITE_URL}/keywords#platform-list` },
      { "@id": `${SITE_URL}/keywords#region-list` },
    ],
  };

  return (
    <div className="wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(platformListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(regionListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <Header />
      <main id="main-content" className="main" aria-label="키워드별 보기">
        <section className="platformPageHero" aria-labelledby="keywords-page-title">
          <div className="container">
            <Breadcrumb
              items={[
                { label: "홈", href: "/" },
                { label: "키워드별 보기" },
              ]}
            />
            <h1 id="keywords-page-title" className="platformPageLead">
              키워드별 <strong>배너·프로필 제작</strong> 가이드
            </h1>
            <p className="platformPageSub">
              플랫폼별·지역별로 정리한 SEO 최적화 글입니다. 새 플랫폼·지역이 추가될 때마다 목록이 확장됩니다.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="platform-keywords-title">
          <div className="container">
            <h2 id="platform-keywords-title" className="sectionTitle">
              {CATEGORY_LABELS.platform}
            </h2>
            <p className="sectionDesc">
              오피가이드 배너제작·오피가이드 프로필 제작을 비롯해 오피스타, 퀸알바, 오피뷰, 외로운밤, 오피아트, 오피스북, 밤공유, 대밤, 마사지퀸 등 플랫폼에 등록할 배너·프로필 맞춤 제작 가이드입니다.
            </p>
            <ul className="guideList" aria-label="플랫폼별 키워드 목록">
              {platform.map((post) => (
                <li key={post.slug} className="guideListItem">
                  <Link href={`/guide/${post.slug}`} className="guideListLink">
                    <span className="guideListTitle">{post.title}</span>
                    <span className="guideListDesc">{post.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="region-keywords-title">
          <div className="container">
            <h2 id="region-keywords-title" className="sectionTitle">
              {CATEGORY_LABELS.region}
            </h2>
            <p className="sectionDesc">
              인천달리기, 부산달리기 등 지역 플랫폼용 배너·프로필 제작 가이드입니다. 지역이 추가될 때마다 목록이 늘어납니다.
            </p>
            <ul className="guideList" aria-label="지역별 키워드 목록">
              {region.map((post) => (
                <li key={post.slug} className="guideListItem">
                  <Link href={`/guide/${post.slug}`} className="guideListLink">
                    <span className="guideListTitle">{post.title}</span>
                    <span className="guideListDesc">{post.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="sectionDesc">
              다른 플랫폼·지역 가이드가 필요하면{" "}
              <Link href="/guide" className="sectionSeoIntroLink">
                배너 제작 가이드
              </Link>
              에서 전체 목록을 볼 수 있으며, 플랫폼별 규격은{" "}
              <Link href="/platforms" className="sectionSeoIntroLink">
                배너·프로필 제작 플랫폼
              </Link>
              에서 확인할 수 있습니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
