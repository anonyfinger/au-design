"use client";

import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

export default function HeroPriceStrip() {
  return (
    <section
      className="heroPriceStrip"
      aria-label="제작 혜택 안내"
    >
      <div className="heroPriceStripInner">
        <div className="heroPriceStripContent">
          <span className="heroPriceStripText">
            <strong>신규 업소 인증 할인</strong> · <strong>배너 교체 할인</strong> · 업소 상황에 맞춘 <strong>맞춤 견적</strong>
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
