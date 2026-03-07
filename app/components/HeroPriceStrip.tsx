"use client";

import { TELEGRAM_URL, EVENT_LABEL, CTA_PRIMARY } from "../lib/constants";

export default function HeroPriceStrip() {
  return (
    <section
      className="heroPriceStrip"
      aria-label="할인 가격 안내"
    >
      <div className="heroPriceStripInner">
        <div className="heroPriceStripContent">
          <span className="heroPriceStripBadge">{EVENT_LABEL}</span>
          <span className="heroPriceStripText">
            이미지형 <strong>25만원</strong> · 애니메이션 <strong>35만원</strong>부터
          </span>
        </div>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="heroPriceStripCta"
          aria-label={`${CTA_PRIMARY} (텔레그램)`}
        >
          {CTA_PRIMARY}
        </a>
      </div>
    </section>
  );
}
