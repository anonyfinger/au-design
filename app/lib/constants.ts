export const TELEGRAM_URL = "https://t.me/BroCPN";
export const TELEGRAM_ID = "BroCPN";

/** SEO: 프로덕션 도메인. NEXT_PUBLIC_SITE_URL으로 스테이징 등 오버라이드 가능 */
export const SITE_URL =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
  process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://au-designlab.com";

/** 업체명 (브랜드) */
export const COMPANY_NAME = "에이유디자인";
/** 브랜드 영어명 · 도메인과 일치 권장 */
export const BRAND_SLUG = "au-designlab";
/** 사이트/서비스 타이틀 — 오피가이드 배너제작 최상위 키워드 */
export const SITE_NAME =
  "에이유디자인 | 오피가이드 배너제작·오피가이드 프로필 제작·오피스타 퀸알바 배너";
/** 메타 설명: 155자 이내 권장 (검색 스니펫 절단 방지) */
export const SITE_DESCRIPTION =
  "에이유디자인(au-designlab) 오피가이드 배너제작·프로필 제작 전문. 오피스타·퀸알바·부달·대밤 등 플랫폼 규격 맞춤 8장 패키지, 10만원 할인. 견적·시안 문의 텔레그램 @BroCPN.";

/** 프로모션·퀄리티 메시지 (랜딩·CTA 통일) */
export const EVENT_DISCOUNT = "10만원";
export const EVENT_LABEL = "10만원 할인 이벤트";
export const QUALITY_PROMISE =
  "어디보다 완성도 높은 퀄리티로 제작해 드립니다.";

/** 메인 CTA 문구 — 전환 통일 */
export const CTA_PRIMARY = "지금 할인받고 제작하기";
export const CTA_PRIMARY_DESC = "텔레그램으로 바로 연결 · 할인가 적용";

/** OG 이미지: 상대 경로 (metadataBase와 조합해 절대 URL 생성) */
export const OG_IMAGE_PATH = "/grok-image-596dc355-e482-4cc1-a76c-6cef059a8be6.png";
export const OG_IMAGE = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: "에이유디자인 au-designlab 배너·프로필 제작",
} as const;
