import Link from "next/link";
import styles from "../landing.module.scss";
import { Header, Footer, Breadcrumb } from "../components";

export default function GuideNotFound() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={`${styles.main} ${styles.mainGuide}`} id="main-content" aria-label="가이드를 찾을 수 없습니다">
        <section className={styles.guideArticle}>
          <div className={styles.container}>
            <Breadcrumb
              items={[
                { label: "홈", href: "/" },
                { label: "가이드", href: "/guide" },
                { label: "페이지 없음" },
              ]}
            />
            <h1 className={styles.guideArticleTitle}>가이드를 찾을 수 없습니다</h1>
            <p className={styles.guidePostBody}>
              요청하신 가이드 페이지가 없거나 이동되었을 수 있습니다.
            </p>
            <Link href="/guide" className={styles.guideArticleBackLink}>
              ← 가이드 목록으로 돌아가기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
