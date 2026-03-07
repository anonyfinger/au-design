"use client";

import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

export default function HeroPriceStrip() {
  return (
    <section
      className="heroPriceStrip"
      aria-label="제작 가격 안내"
    >
      <div className="heroPriceStripInner">
        <div className="heroPriceStripContent">
          <span className="heroPriceStripText">
            <strong>7컷 18만원</strong> · <strong>10컷 26만원</strong> · <strong>14컷 35만원</strong>
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
