import styles from "../landing.module.scss";
import { TELEGRAM_URL, EVENT_LABEL, QUALITY_PROMISE, CTA_PRIMARY } from "../lib/constants";

export default function CtaBlock() {
  return (
    <section id="cta" className={styles.ctaBlock} aria-labelledby="cta-title">
      <div className={styles.ctaBlockBadge}>🔥 {EVENT_LABEL} · 이번 달 한정</div>
      <h2 id="cta-title" className={styles.ctaBlockTitle}>
        지금 문의하면<br />할인가로 바로 시작됩니다
      </h2>
      <p className={styles.ctaBlockQuality}>{QUALITY_PROMISE}</p>
      <p className={styles.ctaBlockDesc}>
        시안 먼저 확인하고 결정하세요. 텔레그램 @AuDesign으로 플랫폼·업종만 알려주시면
        견적을 즉시 안내해 드립니다.
      </p>
      <div className={styles.ctaBlockActions}>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBlockButton}
          aria-label={`${CTA_PRIMARY} (텔레그램 @AuDesign, 새 창)`}
        >
          {CTA_PRIMARY} →
        </a>
        <p className={styles.ctaBlockNote}>무료 상담 · 시안 먼저 확인 · 부담 없이 문의</p>
      </div>
    </section>
  );
}
