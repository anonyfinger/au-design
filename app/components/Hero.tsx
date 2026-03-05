import styles from "../landing.module.scss";
import { TELEGRAM_URL, EVENT_LABEL, QUALITY_PROMISE, CTA_PRIMARY } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="main-profile"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div className={styles.heroVideoWrap} aria-hidden="true">
        <video
          className={styles.heroVideo}
          src="/AUDesign.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          title="에이유디자인 오피가이드 배너제작·프로필 제작 소개"
          aria-label="배너·프로필 제작 서비스 소개 영상"
        />
      </div>
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroBadges}>
          <span className={styles.heroBadgeEvent}>🔥 {EVENT_LABEL} 진행 중</span>
          <span className={styles.heroBadge}>
            오피가이드 · 오피스타 · 퀸알바 · 부달 · 대밤
          </span>
        </div>
        <h1 id="hero-title" className={styles.heroTitle}>
          예약 문의가 늘어나는
          <br />
          <span className={styles.heroTitleAccent}>배너·프로필 맞춤 제작</span>
        </h1>
        <p className={styles.heroDesc}>
          오피가이드·오피스타·퀸알바 등 플랫폼 규격에 맞춘 메인 프로필·업체 소개·가격표·출근부
          <strong> 8장 패키지</strong>를 <strong>10만원 할인</strong>에 제공합니다.
          디자인 하나로 업소 이미지가 달라집니다.
        </p>
        <div className={styles.heroSocialProof}>
          <span className={styles.heroSocialProofItem}>✓ 누적 500건+ 제작</span>
          <span className={styles.heroSocialProofDivider}>·</span>
          <span className={styles.heroSocialProofItem}>✓ 고객 만족률 98%</span>
          <span className={styles.heroSocialProofDivider}>·</span>
          <span className={styles.heroSocialProofItem}>✓ 시안 먼저 확인</span>
        </div>
        <div className={styles.heroActions}>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCtaPrimary}
            aria-label={`${CTA_PRIMARY} (텔레그램, 새 창)`}
          >
            {CTA_PRIMARY} →
          </a>
          <a href="#price" className={styles.heroCtaSecondary}>
            할인가 · 패키지 보기
          </a>
        </div>
        <p className={styles.heroUrgency}>
          ⏰ 이번 달 한정 10만원 할인 · 지금 문의하시면 견적 즉시 안내
        </p>
      </div>
    </section>
  );
}
