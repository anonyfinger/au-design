import { TELEGRAM_URL, CTA_PRIMARY, COMPANY_NAME, BRAND_SLUG } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="main-profile"
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="heroVideoWrap" aria-hidden="true">
        <video
          className="heroVideo"
          src="/AUDesign.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          title="에이유디자인 오피가이드 배너제작·프로필 제작 소개"
          aria-label="배너·프로필 제작 서비스 소개 영상"
        />
      </div>
      <div className="heroOverlay" aria-hidden="true" />
      <div className="heroInner">
        <div className="heroBadges">
          <span className="heroBadgeEvent">{COMPANY_NAME} · 배너·프로필 맞춤 제작</span>
          <span className="heroBadge">
            오피가이드 · 오피스타 · 퀸알바 · 부달 · 대밤
          </span>
        </div>
        <h1 id="hero-title" className="heroTitle">
          예약 문의가 늘어나는
          <br />
          <span className="heroTitleAccent">배너·프로필 맞춤 제작</span>
        </h1>
        <p className="heroBrandLine">{COMPANY_NAME}({BRAND_SLUG})이 플랫폼 규격에 맞춰 제작합니다.</p>
        <p className="heroDesc">
          오피가이드·오피스타·퀸알바 등 플랫폼 규격에 맞춘 메인 프로필·업체 소개·가격표·출근부
          <strong> 7컷 기본 패키지</strong>로 제공합니다.
          목록에서 스크롤 멈추는 비주얼로 업소 이미지를 바꿔 드립니다.
        </p>
        <div className="heroSocialProof">
          <span className="heroSocialProofItem">✓ 시안 먼저 확인 후 결정</span>
          <span className="heroSocialProofDivider">·</span>
          <span className="heroSocialProofItem">✓ 마음에 안 들면 부담 없이 취소</span>
          <span className="heroSocialProofDivider">·</span>
          <span className="heroSocialProofItem">✓ 규격 걱정 없이 맡기시면 끝</span>
        </div>
        <div className="heroActions">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="heroCtaPrimary"
            aria-label={`${CTA_PRIMARY} (텔레그램, 새 창)`}
          >
            {CTA_PRIMARY} →
          </a>
          <a href="#price" className="heroCtaSecondary">
            가격 · 패키지 보기
          </a>
        </div>
        <p className="heroUrgency">
          지금 문의하시면 견적 즉시 안내
        </p>
      </div>
    </section>
  );
}
