import Link from "next/link";
import styles from "../landing.module.scss";
import { Header, Footer, Breadcrumb } from "../components";
import { SITE_URL, OG_IMAGE } from "../lib/constants";
import { getGuidePostsByCategory } from "../lib/guidePosts";

export const metadata = {
  title: "키워드별 보기 · 배너·프로필 제작",
  description:
    "오피가이드 배너제작·오피가이드 배너 제작 키워드. 오피스타, 퀸알바, 오피뷰, 외로운밤, 오피아트, 오피스북, 밤공유, 대밤, 마사지퀸, 인천달리기, 부산달리기 등 플랫폼별·지역별 배너·프로필 제작 키워드 목록. 에이유디자인.",
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
    "플랫폼별 배너 제작",
    "지역별 배너 제작",
    "에이유디자인",
  ],
  openGraph: {
    url: `${SITE_URL}/keywords`,
    title: "키워드별 보기 · 오피가이드 배너제작 등 | 에이유디자인",
    description:
      "오피가이드 배너제작·오피가이드 배너 제작 키워드. 오피스타, 퀸알바, 인천달리기, 부산달리기 등 플랫폼별·지역별 배너·프로필 제작 키워드 목록. 텔레그램 @AuDesign.",
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

  return (
    <div className={styles.wrapper}>
      <Header />
      <main id="main-content" className={styles.main} aria-label="키워드별 보기">
        <section className={styles.platformPageHero} aria-labelledby="keywords-page-title">
          <div className={styles.container}>
            <Breadcrumb
              items={[
                { label: "홈", href: "/" },
                { label: "키워드별 보기" },
              ]}
            />
            <h1 id="keywords-page-title" className={styles.platformPageLead}>
              키워드별 <strong>배너·프로필 제작</strong> 가이드
            </h1>
            <p className={styles.platformPageSub}>
              플랫폼별·지역별로 정리한 SEO 최적화 글입니다. 새 플랫폼·지역이 추가될 때마다 목록이 확장됩니다.
            </p>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="platform-keywords-title">
          <div className={styles.container}>
            <h2 id="platform-keywords-title" className={styles.sectionTitle}>
              {CATEGORY_LABELS.platform}
            </h2>
            <p className={styles.sectionDesc}>
              오피가이드 배너제작·오피가이드 프로필 제작을 비롯해 오피스타, 퀸알바, 오피뷰, 외로운밤, 오피아트, 오피스북, 밤공유, 대밤, 마사지퀸 등 플랫폼에 등록할 배너·프로필 맞춤 제작 가이드입니다.
            </p>
            <ul className={styles.guideList} aria-label="플랫폼별 키워드 목록">
              {platform.map((post) => (
                <li key={post.slug} className={styles.guideListItem}>
                  <Link href={`/guide/${post.slug}`} className={styles.guideListLink}>
                    <span className={styles.guideListTitle}>{post.title}</span>
                    <span className={styles.guideListDesc}>{post.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="region-keywords-title">
          <div className={styles.container}>
            <h2 id="region-keywords-title" className={styles.sectionTitle}>
              {CATEGORY_LABELS.region}
            </h2>
            <p className={styles.sectionDesc}>
              인천달리기, 부산달리기 등 지역 플랫폼용 배너·프로필 제작 가이드입니다. 지역이 추가될 때마다 목록이 늘어납니다.
            </p>
            <ul className={styles.guideList} aria-label="지역별 키워드 목록">
              {region.map((post) => (
                <li key={post.slug} className={styles.guideListItem}>
                  <Link href={`/guide/${post.slug}`} className={styles.guideListLink}>
                    <span className={styles.guideListTitle}>{post.title}</span>
                    <span className={styles.guideListDesc}>{post.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionDesc}>
              다른 플랫폼·지역 가이드가 필요하면{" "}
              <Link href="/guide" className={styles.sectionSeoIntroLink}>
                배너 제작 가이드
              </Link>
              에서 전체 목록을 볼 수 있으며, 플랫폼별 규격은{" "}
              <Link href="/platforms" className={styles.sectionSeoIntroLink}>
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
