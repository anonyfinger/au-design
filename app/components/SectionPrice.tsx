import React from "react";
import { TELEGRAM_URL, QUALITY_PROMISE, CTA_PRIMARY, CTA_PRIMARY_DESC } from "../lib/constants";

const CUT_ITEMS = [
  {
    type: "7컷",
    items: "메인 · 상호 · 주소 · 영업시간 · 연락처 · 인사말 · 주대 · 소개 · 이벤트",
    tip: <>노래방, 다국적 등 <strong className="emWarm">주대 안내가 짧은 업종</strong>에 적합합니다.</>,
  },
  {
    type: "10컷",
    items: "7컷 구성 + QA · 소개2",
    tip: <><strong className="emWarm">디테일한 안내</strong>가 필요한 업종에 추천드립니다.</>,
    badge: "인기",
  },
  {
    type: "14컷",
    items: "10컷 구성 + 추천 · 기타",
    tip: <><strong className="emWarm">다양한 정보</strong>를 담고 싶은 업소에 적합합니다.</>,
  },
] as const;

const BENEFITS: React.ReactNode[] = [
  <><strong className="emWarm">신규 업소 인증</strong> 시 할인 — 새로 생기는 업소 부담 줄여드려요</>,
  <><strong className="emWarm">배너 교체</strong> 시 할인 — 기존 업체도 부담 없이 바꾸세요</>,
  <><strong className="emWarm">고해상도</strong> 최종본 즉시 사용 가능</>,
  <>플랫폼 규격 맞춤 <strong className="emWarm">사이즈 최적화</strong> 제공</>,
  <><span className="emWarm">만족할 때까지</span> 수정 반영</>,
  <>마사지초이스 업체 배너 <span className="emWarm">1개월 무료 게재</span></>,
];

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
          <p className="sectionLabel">컷수별 구성</p>
          <h2 id="price-title" className="sectionTitle">
            문의하여 자세한 견적 받기
          </h2>
          <p className="sectionDesc">
            업종·구성에 맞춘 맞춤 견적을 <span className="emWarm">즉시</span> 안내해 드립니다.
            신규 업소·배너 교체 시 할인 혜택이 있습니다. 텔레그램으로 문의해 주세요.
          </p>
        </div>
        <article className="priceCardUnified" aria-label="컷수별 제작 구성 및 견적 문의">
          <div className="priceCardUnifiedBadge">즉시 견적 · 할인 혜택</div>
          <div className="priceCardUnifiedInner">
            {CUT_ITEMS.map((item, i) => (
              <div key={item.type} className={`priceCutRow ${item.badge ? "priceCutRowFeatured" : ""}`}>
                <div className="priceCutRowHead">
                  <span className="priceType">{item.type}</span>
                  {item.badge && <span className="priceCutBadge">{item.badge}</span>}
                </div>
                <p className="priceCutRowItems">{item.items}</p>
                <p className="priceCutRowTip">{item.tip}</p>
                {i < CUT_ITEMS.length - 1 && <hr className="priceCutRowDivider" />}
              </div>
            ))}
          </div>
          <div className="priceCtaWrap">
            <p className="priceCtaUrgency">지금 문의하시면 <strong>평균 1시간 내</strong> 견적 안내</p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="priceCta priceCtaAccent"
              aria-label={`${CTA_PRIMARY} (텔레그램)`}
            >
              {CTA_PRIMARY} →
            </a>
            <span className="priceCtaDesc">{CTA_PRIMARY_DESC}</span>
          </div>
        </article>
        <div className="priceBenefits">
          <p className="priceBenefitsTitle">기본 제공 혜택</p>
          <ul className="priceBenefitsList">
            {BENEFITS.map((node, i) => (
              <li key={i}>{node}</li>
            ))}
          </ul>
        </div>
        <div className="priceCutGuide" aria-label="컷수 안내">
          <p className="priceCutGuideHead">◀ 한컷 기준 세로 800PX</p>
          <div className="priceCutGuideBody">
            <p>한컷의 기준은 <span className="emWarm">800PX</span> 입니다. 주대안내나 기타내용 멘트 길이에 따라 2컷분량이 나올 수 있습니다.</p>
            <p className="priceCutGuideEmphasis">7컷은 유선문의 정도가 가장 이상적입니다.</p>
            <p className="priceCutGuideEmphasis">노래방, 다국적, 기타 주대안내가 중요하지 않은 업종</p>
            <p>디테일 있게 안내가 필요하면 10컷 이상을 추천드립니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
