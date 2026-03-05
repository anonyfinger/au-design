import Link from "next/link";
import styles from "../landing.module.scss";
import { Header, Footer, Breadcrumb } from "../components";
import { TELEGRAM_URL, SITE_URL, OG_IMAGE } from "../lib/constants";
import { PLATFORM_LIST } from "../lib/platforms";

export const metadata = {
  title: "배너·프로필 제작 플랫폼 안내",
  description:
    "오피가이드 배너제작·오피가이드 배너 제작 가능 플랫폼. 오피스타, 오피뷰, 외로운밤, 오피아트, 오피스북, 밤공유, 부달, 대밤, 마사지퀸, 퀸알바 등 홍보·지역 플랫폼 배너·프로필 맞춤 제작. 규격 1:1 제작. 텔레그램 @BroCPN.",
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
  ],
  openGraph: {
    url: `${SITE_URL}/platforms`,
    title: "배너·프로필 제작 플랫폼 안내",
    description:
      "오피가이드 배너제작·오피가이드 배너 제작 가능 플랫폼. 오피스타·오피뷰·퀸알바 등 플랫폼별 배너·프로필 맞춤 제작. 텔레그램 @BroCPN.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: `${SITE_URL}/platforms` },
};

export default function PlatformsPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main id="main-content" className={styles.main} aria-label="배너·프로필 제작 플랫폼 안내">
        <section className={styles.platformPageHero} aria-labelledby="platforms-page-title">
          <div className={styles.container}>
            <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "배너·프로필 제작 플랫폼" }]} />
            <h1 id="platforms-page-title" className={styles.platformPageLead}>
              홍보를 맡기려면 <strong>배너·프로필이 필요합니다.</strong>
              <br />
              그 배너·프로필을 <strong>맞춤 제작</strong>해 드립니다.
            </h1>
            <p className={styles.platformPageSub}>
              아래 플랫폼에 등록·게시할 배너·프로필을 플랫폼 규격에 맞춰 제작해 드립니다.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.platformCustomBlock}>
              <h2 className={styles.platformCustomTitle}>
                대량 시안이 아닌, <span>맞춤형 제작</span>
              </h2>
              <p className={styles.platformCustomDesc}>
                업체별·플랫폼별 규격과 컨셉에 맞춘 <strong>1:1 맞춤 제작</strong>입니다.
                템플릿 납품이 아니라, 업소 특성과 홍보 목적에 맞게 디자인부터
                조정해 드립니다.
              </p>
              <ul className={styles.platformCustomList}>
                <li>플랫폼 규격·가이드에 맞춘 사이즈·형식 제작</li>
                <li>업체 컨셉·타겟에 맞춘 디자인 구성</li>
                <li>문의 시 용도·플랫폼 알려주시면 맞춤 견적 안내</li>
              </ul>
            </div>

            <h2 className={styles.sectionTitle}>배너 제작 가능 플랫폼</h2>
            <p className={styles.sectionDesc}>
              아래와 같은 플랫폼에 올라갈 배너를 제작해 드립니다. 목록 외
              플랫폼도 문의 주시면 가능 여부 안내해 드립니다.
            </p>
            <ul className={styles.platformGrid}>
              {PLATFORM_LIST.map((item) => (
                <li key={item.name} className={styles.platformCard}>
                  <span className={styles.platformName}>{item.name}</span>
                  {item.region && (
                    <span className={styles.platformRegion}>{item.region}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className={styles.sectionCta}>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.telegramButton}
              >
                맞춤 견적 문의하기 (텔레그램)
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
