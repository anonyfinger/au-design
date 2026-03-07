"use client";

import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

export default function FloatingCta() {
  return (
    <div className="floatingCta" role="complementary" aria-label="제작 문의 바로가기">
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floatingCtaBtn"
        aria-label={`${CTA_PRIMARY} (텔레그램)`}
      >
        <span className="floatingCtaIcon">💬</span>
        <span className="floatingCtaText">{CTA_PRIMARY}</span>
      </a>
    </div>
  );
}
