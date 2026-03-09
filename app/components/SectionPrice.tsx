import { TELEGRAM_URL, QUALITY_PROMISE, CTA_PRIMARY, CTA_PRIMARY_DESC } from "../lib/constants";

const PRICE_ITEMS = [
  {
    type: "7컷",
    salePrice: 250000,
    desc: "메인 · 상호 주소 영업시간 · 연락처 · 인사말 · 주대 · 소개 · 이벤트",
  },
  {
    type: "10컷",
    salePrice: 350000,
    desc: "메인 · 상호 주소 영업시간 · 연락처 · 인사말 · 주대 · 소개 · QA · 소개2 · 이벤트",
  },
  {
    type: "14컷",
    salePrice: 450000,
    desc: "메인 · 상호 주소 영업시간 · 연락처 · 인사말 · 주대 · 소개 · QA · 소개2 · 추천 · 기타 · 이벤트",
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
  "마사지초이스 업체 배너 1개월 무료 게재",
  "구글 이미지 검색 노출 지원",
] as const;

export default function SectionPrice() {
  return (
    <section
      id="price"
      className="sectionAlt"
      aria-labelledby="price-title"
    >
      <div className="container">
        <div className="priceEventBanner" role="status" aria-live="polite">
          <span className="priceEventQuality">{QUALITY_PROMISE}</span>
        </div>
        <div className="sectionHead">
          <p className="sectionLabel">컷수별 제작가격</p>
          <h2 id="price-title" className="sectionTitle">
            투명한 가격 공개
          </h2>
          <p className="sectionDesc">
            전달해주신 구성 기준의 가격입니다. 상세 항목은 업종·구성에 맞게 조정 가능하며,
            텔레그램 문의 시 즉시 안내해 드립니다.
          </p>
        </div>
        <div className="priceGrid">
          {PRICE_ITEMS.map((item) => (
            <article
              key={item.type}
              className="priceCard"
              aria-label={`${item.type} 제작 문의하기`}
            >
              <div className="priceCardHead">
                <span className="priceType">{item.type}</span>
              </div>
              <div className="priceAmount" aria-label="가격">
                <span className="priceSale">
                  {formatPrice(item.salePrice)}원
                </span>
              </div>
              <p className="priceDesc">{item.desc}</p>
              <div className="priceCtaWrap">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="priceCta"
                  aria-label={`${item.type} 제작 ${CTA_PRIMARY} (텔레그램)`}
                >
                  {CTA_PRIMARY}
                </a>
                <span className="priceCtaDesc">{CTA_PRIMARY_DESC}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="priceBenefits">
          <p className="priceBenefitsTitle">기본 제공 혜택</p>
          <ul className="priceBenefitsList">
            {BENEFITS.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
        <div className="priceCutGuide" aria-label="컷수 안내">
          <p className="priceCutGuideHead">◀ 한컷 기준 세로 800PX</p>
          <div className="priceCutGuideBody">
            <p>한컷의 기준은 800PX 입니다. 주대안내나 기타내용 멘트 길이에 따라 2컷분량이 나올 수 있습니다.</p>
            <p className="priceCutGuideEmphasis">7컷은 유선문의 정도가 가장 이상적입니다.</p>
            <p className="priceCutGuideEmphasis">노래방, 다국적, 기타 주대안내가 중요하지 않은 업종</p>
            <p>디테일 있게 안내가 필요하면 10컷 이상을 추천드립니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
