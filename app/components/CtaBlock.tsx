
import { TELEGRAM_URL, TELEGRAM_ID, EVENT_LABEL, QUALITY_PROMISE, CTA_PRIMARY, COMPANY_NAME } from "../lib/constants";

export default function CtaBlock() {
  return (
    <section id="cta" className="ctaBlock" aria-labelledby="cta-title">
      <div className="ctaBlockBadge">🔥 {EVENT_LABEL} · 이번 달 한정</div>
      <h2 id="cta-title" className="ctaBlockTitle">
        지금 문의하면<br />할인가로 바로 시작됩니다
      </h2>
      <p className="ctaBlockQuality">{COMPANY_NAME}은 {QUALITY_PROMISE}</p>
      <p className="ctaBlockDesc">
        시안 먼저 확인하고 결정하세요. <strong>{COMPANY_NAME}</strong> 텔레그램 @{TELEGRAM_ID}으로 플랫폼·업종만 알려주시면
        견적을 즉시 안내해 드립니다.
      </p>
      <div className="ctaBlockActions">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ctaBlockButton"
          aria-label={`${CTA_PRIMARY} (텔레그램 @${TELEGRAM_ID}, 새 창)`}
        >
          {CTA_PRIMARY} →
        </a>
        <p className="ctaBlockNote">무료 상담 · 시안 먼저 확인 · 부담 없이 문의</p>
      </div>
    </section>
  );
}
