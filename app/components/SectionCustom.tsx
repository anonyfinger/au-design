import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

const CUSTOM_ITEMS = [
  "주요 섹션: 메인 / 구인 / 소개 / 코스 / 서비스(이벤트)",
  "서비스 포인트 강조: 픽업 서비스, 케이크 이벤트, 의상 컨셉 등 맞춤 아이콘 제작",
  "특색 강조: 우리 매장만의 독보적인 차별점(시설, 실장님 마인드 등) 부각",
] as const;

export default function SectionCustom() {
  return (
    <section
      id="custom"
      className="section"
      aria-labelledby="custom-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">선택 가능</p>
          <h2 id="custom-title" className="sectionTitle">
            커스텀 서비스 항목
          </h2>
          <p className="sectionDesc">
            업체별 특색에 맞춰 세부 항목을 정밀하게 조정해 드립니다.
          </p>
        </div>
        <ul className="customList">
          {CUSTOM_ITEMS.map((text) => (
            <li key={text} className="customItem">
              {text}
            </li>
          ))}
        </ul>
        <div className="sectionCta">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="telegramButton"
            aria-label={`${CTA_PRIMARY} (텔레그램)`}
          >
            {CTA_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  );
}
