import styles from "../landing.module.scss";
import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

const NOTICE_ITEMS = [
  {
    title: "제작 기간",
    text: "시안 확정 후 제작·납품까지 소요 기간이 있습니다. 급한 경우 텔레그램으로 먼저 일정을 문의해 주세요.",
  },
  {
    title: "수정 횟수",
    text: "시안 수정은 코스에 따라 횟수가 다릅니다. 추가 수정 요청 시 별도 안내해 드립니다.",
  },
  {
    title: "파일·문구",
    text: "로고·이미지·문구는 고객님께서 제공해 주셔야 합니다. 없으시면 텔레그램으로 상담 가능합니다.",
  },
  {
    title: "문의 채널",
    text: "배너 제작 문의·견적·예약은 텔레그램(@BroCPN)으로만 받습니다.",
  },
] as const;

export default function SectionNotice() {
  return (
    <section
      id="notice"
      className={styles.sectionAlt}
      aria-labelledby="notice-title"
    >
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>의뢰 전 확인</p>
          <h2 id="notice-title" className={styles.sectionTitle}>의뢰 시 주의사항</h2>
          <p className={styles.sectionDesc}>
            배너 제작 의뢰 전에 아래 내용을 확인해 주세요.
          </p>
        </div>
        <ul className={styles.noticeList}>
          {NOTICE_ITEMS.map((item, i) => (
            <li key={item.title} className={styles.noticeItem}>
              <span className={styles.noticeIcon}>{i + 1}</span>
              <div>
                <strong>{item.title}</strong> — {item.text}
              </div>
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
