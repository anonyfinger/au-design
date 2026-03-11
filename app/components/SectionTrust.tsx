import { COMPANY_NAME } from "../lib/constants";
import { hl } from "../lib/highlight";

const MARKETING_COPIES = [
  { headline: "목록 1페이지에 먼저", sub: "클릭·문의가 달라집니다" },
  { headline: "우리만의 디자인", sub: "업소 전용 맞춤" },
  { headline: "시안 보고 맡기세요", sub: "마음에 안 들면 안 해도 됩니다" },
  { headline: "규격 걱정 없이", sub: "맡기시면 끝입니다" },
] as const;

const REASONS = [
  {
    icon: "🎯",
    title: "목록에서 잘리지 않게",
    desc: "오피가이드·오피스타·퀸알바 등 각 플랫폼 권장 사이즈에 맞춰 제작합니다. 업로드 시 잘림·깨짐 없이 **그대로 노출**됩니다.",
  },
  {
    icon: "⚡",
    title: "시안 보고 결정",
    desc: "문의 후 빠르게 시안을 보내 드립니다. 마음에 들면 진행, 아니면 **부담 없이** 취소 가능합니다.",
  },
  {
    icon: "💎",
    title: "경쟁 업소보다 눈에 띄게",
    desc: "목록에서 스크롤 멈추는 비주얼. **같은 업소도** 배너에 따라 클릭률이 달라집니다.",
  },
  {
    icon: "🔒",
    title: "우리 업소만의 톤",
    desc: "템플릿 복붙이 아닌, 사장님 업소의 컨셉·지역·타겟에 맞춘 **전용 디자인**입니다.",
  },
];

export default function SectionTrust() {
  return (
    <section
      id="trust"
      className="sectionTrust"
      aria-labelledby="trust-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">사장님·실장님이 선택하는 이유</p>
          <h2 id="trust-title" className="sectionTitle">
            목록에서 먼저 보이면, 예약이 먼저 옵니다
          </h2>
          <p className="sectionDesc">
            오피가이드·퀸알바 목록에서 경쟁 업소에 밀리고 있나요? 같은 업소라도 비주얼이 다르면 <strong className="emWarm">클릭과 문의가 달라집니다</strong>. {COMPANY_NAME}은 사장님 업소만의 톤으로 1:1 맞춤 제작합니다.
          </p>
          <p className="sectionTrustSocialProof">
            이미 많은 <strong className="emWarm">사장님, 실장님</strong>이 이용 중입니다.
          </p>
        </div>

        <div className="trustMarketingGrid">
          {MARKETING_COPIES.map((m) => (
            <div key={m.headline} className="trustMarketingCard">
              <span className="trustMarketingHeadline">{m.headline}</span>
              <span className="trustMarketingSub">{m.sub}</span>
            </div>
          ))}
        </div>

        <div className="trustReasonGrid">
          {REASONS.map((r) => (
            <div key={r.title} className="trustReasonCard">
              <span className="trustReasonIcon">{r.icon}</span>
              <h3 className="trustReasonTitle">{r.title}</h3>
              <p className="trustReasonDesc">{hl(r.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
