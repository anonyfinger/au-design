
import { TELEGRAM_URL, TELEGRAM_ID, QUALITY_PROMISE, CTA_PRIMARY, COMPANY_NAME } from "../lib/constants";

export default function CtaBlock() {
  return (
    <section id="cta" className="ctaBlock" aria-labelledby="cta-title">
      <div className="ctaBlockBadge">맞춤 제작 상담 진행 중</div>
      <div className="ctaBlockPainPointWrap">
        <p className="ctaBlockPainPoint">
          가게 홍보 페이지가 <strong className="emWarm">눈에 잘 안들어 오신다면</strong>
          <br />
          <span className="ctaBlockPainPointCta">저희에게 한번 맡겨주세요.</span>
        </p>
      </div>
      <h2 id="cta-title" className="ctaBlockTitle">
        지금 문의하면<br />바로 제작 상담됩니다
      </h2>
      <p className="ctaBlockQuality">{COMPANY_NAME}은 {QUALITY_PROMISE}</p>
      <p className="ctaBlockDesc">
        플랫폼·업종만 알려주시면 견적을 즉시 안내합니다. 시안 보고 마음에 들면 진행, 아니면 <strong>부담 없이</strong> 취소해도 됩니다. 텔레그램 @{TELEGRAM_ID}으로 문의해 주세요.
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
