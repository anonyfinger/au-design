import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

const STEPS = [
  {
    emoji: "💬",
    title: "텔레그램으로 문의",
    desc: "@AUDesignlab으로 플랫폼·업종·수량을 보내 주시면 견적을 바로 안내해 드립니다.",
    highlight: "평균 응답 시간 1시간 이내",
  },
  {
    emoji: "📋",
    title: "견적 확인 & 구성 확정",
    desc: "컷수·구성 기준으로 가격을 안내해 드립니다. 코스와 상세 구성을 함께 결정합니다.",
    highlight: "맞춤 견적 안내",
  },
  {
    emoji: "🎨",
    title: "시안 확인 & 수정",
    desc: "시안을 먼저 보여드립니다. 마음에 드실 때까지 수정 반영 후 최종 확정합니다.",
    highlight: "만족 보장",
  },
  {
    emoji: "📦",
    title: "완성본 납품",
    desc: "플랫폼 규격에 맞는 고해상도 파일로 납품합니다. 바로 업로드 가능한 형태로 제공합니다.",
    highlight: "즉시 사용 가능",
  },
] as const;

export default function SectionReservation() {
  return (
    <section
      id="reservation"
      className="section"
      aria-labelledby="reservation-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">제작 신청 절차</p>
          <h2 id="reservation-title" className="sectionTitle">예약방법 안내</h2>
          <p className="sectionDesc">
            배너 제작을 의뢰하시려면 아래 순서대로 진행해 주세요.
          </p>
        </div>
        <ol className="reservationStepList">
          {STEPS.map((step) => (
            <li key={step.title} className="reservationStepItem">
              <span className="stepNum">{step.emoji}</span>
              <div className="stepBody">
                <div className="stepTitleRow">
                  <h3 className="stepTitle">{step.title}</h3>
                  <span className="stepHighlight">{step.highlight}</span>
                </div>
                <p className="stepDesc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="sectionCta">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="telegramButton"
            aria-label={`${CTA_PRIMARY} (텔레그램, 새 창)`}
          >
            {CTA_PRIMARY} →
          </a>
          <p className="reservationCtaNote">텔레그램 @AUDesignlab · 평균 1시간 내 응답</p>
        </div>
      </div>
    </section>
  );
}
