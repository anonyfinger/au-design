import styles from "../landing.module.scss";
import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

const CUSTOM_ITEMS = [
  "주요 섹션: 메인 / 구인 / 소개 / 코스 / 서비스(이벤트)",
  "서비스 포인트 강조: 픽업 서비스, 케이크 이벤트, 의상 컨셉 등 맞춤 아이콘 제작",
  "특색 강조: 우리 매장만의 독보적인 차별점(시설, 실장님 마인드 등) 부각",
] as const;

export default function SectionCustom() {
  return (
    <section
      id="custom"
      className={styles.section}
      aria-labelledby="custom-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>선택 가능</p>
          <h2 id="custom-title" className={styles.sectionTitle}>
            커스텀 서비스 항목
          </h2>
          <p className={styles.sectionDesc}>
            업체별 특색에 맞춰 세부 항목을 정밀하게 조정해 드립니다.
          </p>
        </div>
        <ul className={styles.customList}>
          {CUSTOM_ITEMS.map((text) => (
            <li key={text} className={styles.customItem}>
              {text}
            </li>
          ))}
        </ul>
        <div className={styles.sectionCta}>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramButton}
            aria-label={`${CTA_PRIMARY} (텔레그램)`}
          >
            {CTA_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  );
}
