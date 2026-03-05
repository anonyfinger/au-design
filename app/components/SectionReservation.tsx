import styles from "../landing.module.scss";
import { TELEGRAM_URL, EVENT_LABEL, CTA_PRIMARY } from "../lib/constants";

const STEPS = [
  {
    emoji: "💬",
    title: "텔레그램으로 문의",
    desc: "@BroCPN으로 플랫폼·업종·수량을 보내 주시면 견적을 바로 안내해 드립니다.",
    highlight: "평균 응답 시간 1시간 이내",
  },
  {
    emoji: "📋",
    title: "견적 확인 & 10만원 할인 적용",
    desc: `${EVENT_LABEL} 적용 가격으로 안내해 드립니다. 코스와 구성을 함께 결정합니다.`,
    highlight: "이번 달 한정 할인",
  },
  {
    emoji: "🎨",
    title: "시안 확인 & 수정",
    desc: "시안을 먼저 보여드립니다. 마음에 드실 때까지 수정 반영 후 최종 확정합니다.",
    highlight: "만족 보장",
  },
  {
    emoji: "📦",
    title: "완성본 납품",
    desc: "플랫폼 규격에 맞는 고해상도 파일로 납품합니다. 바로 업로드 가능한 형태로 제공합니다.",
    highlight: "즉시 사용 가능",
  },
] as const;

export default function SectionReservation() {
  return (
    <section
      id="reservation"
      className={styles.section}
      aria-labelledby="reservation-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>제작 신청 절차</p>
          <h2 id="reservation-title" className={styles.sectionTitle}>예약방법 안내</h2>
          <p className={styles.sectionDesc}>
            배너 제작을 의뢰하시려면 아래 순서대로 진행해 주세요.
          </p>
        </div>
        <ol className={styles.reservationStepList}>
          {STEPS.map((step, i) => (
            <li key={step.title} className={styles.reservationStepItem}>
              <span className={styles.stepNum}>{step.emoji}</span>
              <div className={styles.stepBody}>
                <div className={styles.stepTitleRow}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <span className={styles.stepHighlight}>{step.highlight}</span>
                </div>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.sectionCta}>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramButton}
            aria-label={`${CTA_PRIMARY} (텔레그램, 새 창)`}
          >
            {CTA_PRIMARY} →
          </a>
          <p className={styles.reservationCtaNote}>텔레그램 @BroCPN · 평균 1시간 내 응답</p>
        </div>
      </div>
    </section>
  );
}
