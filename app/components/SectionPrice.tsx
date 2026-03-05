import styles from "../landing.module.scss";
import { TELEGRAM_URL, EVENT_LABEL, QUALITY_PROMISE, CTA_PRIMARY, CTA_PRIMARY_DESC } from "../lib/constants";

const PRICE_ITEMS = [
  {
    type: "이미지형",
    sub: "정적 디자인",
    originalPrice: 350000,
    salePrice: 250000,
    desc: "깔끔하고 선명한 고해상도 디자인. 게시·공유에 최적화된 정적 배너를 어디보다 완성도 높은 퀄리티로 제작해 드립니다.",
  },
  {
    type: "애니메이션형",
    sub: "모션 디자인",
    originalPrice: 450000,
    salePrice: 350000,
    desc: "시선을 끄는 모션 그래픽. 스토리·릴스·커뮤니티 홍보 시 압도적인 주목도를 높여 드립니다.",
  },
] as const;

function formatPrice(n: number) {
  return n.toLocaleString("ko-KR");
}

const BENEFITS = [
  "고해상도 최종본 즉시 사용 가능",
  "플랫폼 규격 맞춤 사이즈 최적화 제공",
  "만족할 때까지 수정 반영",
  "추가 비용 없는 투명한 견적",
] as const;

export default function SectionPrice() {
  return (
    <section
      id="price"
      className={styles.sectionAlt}
      aria-labelledby="price-title"
    >
      <div className={styles.container}>
        <div className={styles.priceEventBanner} role="status" aria-live="polite">
          <span className={styles.priceEventLabel}>🔥 이번 달 한정 {EVENT_LABEL}</span>
          <span className={styles.priceEventQuality}>{QUALITY_PROMISE}</span>
        </div>
        <div className={styles.sectionHead}>
          <p className={styles.sectionLabel}>제작 타입 &amp; 가격</p>
          <h2 id="price-title" className={styles.sectionTitle}>
            투명한 가격 공개
          </h2>
          <p className={styles.sectionDesc}>
            숨겨진 추가비 없이 투명하게 공개합니다. 스웨디시·유흥업소 등 업종별 맞춤 견적은
            텔레그램 문의 시 즉시 안내해 드립니다.
          </p>
        </div>
        <div className={styles.priceGrid}>
          {PRICE_ITEMS.map((item) => (
            <article
              key={item.type}
              className={styles.priceCard}
              aria-label={`${item.type} 할인받고 제작하기`}
            >
              <div className={styles.priceCardHead}>
                <span className={styles.priceType}>{item.type}</span>
                {item.sub && (
                  <span className={styles.priceSub}>{item.sub}</span>
                )}
              </div>
              <div className={styles.priceAmount} aria-label="가격">
                <span className={styles.priceOriginal}>
                  {formatPrice(item.originalPrice)}원
                </span>
                <span className={styles.priceSale}>
                  {formatPrice(item.salePrice)}원
                </span>
              </div>
              <p className={styles.priceDesc}>{item.desc}</p>
              <div className={styles.priceCtaWrap}>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.priceCta}
                  aria-label={`${item.type} ${CTA_PRIMARY} (텔레그램)`}
                >
                  {CTA_PRIMARY}
                </a>
                <span className={styles.priceCtaDesc}>{CTA_PRIMARY_DESC}</span>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.priceBenefits}>
          <p className={styles.priceBenefitsTitle}>기본 제공 혜택</p>
          <ul className={styles.priceBenefitsList}>
            {BENEFITS.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
