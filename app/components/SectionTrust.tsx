import { COMPANY_NAME } from "../lib/constants";

const STATS = [
  { num: "500+", label: "누적 제작 건수", sub: "오피가이드·오피스타 등 플랫폼" },
  { num: "98%", label: "고객 만족률", sub: "재의뢰·추천 기반" },
  { num: "1시간", label: "평균 응답 시간", sub: "문의 접수 후 빠른 안내" },
  { num: "7컷", label: "기본 패키지 구성", sub: "메인·소개·주요 안내 중심" },
] as const;

const REASONS = [
  {
    icon: "🎯",
    title: "플랫폼 규격 100% 맞춤",
    desc: "오피가이드·오피스타·퀸알바 등 각 플랫폼 권장 사이즈·해상도에 최적화된 파일로 납품합니다.",
  },
  {
    icon: "⚡",
    title: "빠른 시안 제공",
    desc: "문의 후 빠른 시일 내에 시안을 제공해 드립니다. 수정은 만족할 때까지 반영합니다.",
  },
  {
    icon: "💎",
    title: "고퀄리티 보장",
    desc: "어디서도 보기 힘든 완성도. 업소 이미지를 한 단계 올려주는 브랜딩 디자인을 제공합니다.",
  },
  {
    icon: "🔒",
    title: "1:1 맞춤 제작",
    desc: "템플릿 재활용 없이 업소별 컨셉·지역·타겟에 맞춘 전용 디자인으로 진행합니다.",
  },
] as const;

export default function SectionTrust() {
  return (
    <section
      id="trust"
      className="sectionTrust"
      aria-labelledby="trust-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">왜 {COMPANY_NAME}인가</p>
          <h2 id="trust-title" className="sectionTitle">
            실적이 증명하는 퀄리티
          </h2>
          <p className="sectionDesc">
            {COMPANY_NAME}은 오피가이드 배너제작·프로필 제작 전문으로, 플랫폼 규격과 업소 컨셉에 맞춰 1:1로 제작합니다.
          </p>
        </div>

        <div className="trustStats">
          {STATS.map((s) => (
            <div key={s.label} className="trustStatItem">
              <span className="trustStatNum">{s.num}</span>
              <span className="trustStatLabel">{s.label}</span>
              <span className="trustStatSub">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="trustReasonGrid">
          {REASONS.map((r) => (
            <div key={r.title} className="trustReasonCard">
              <span className="trustReasonIcon">{r.icon}</span>
              <h3 className="trustReasonTitle">{r.title}</h3>
              <p className="trustReasonDesc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
