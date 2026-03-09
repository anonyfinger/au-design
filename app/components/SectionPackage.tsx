import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";
import { hl } from "../lib/highlight";

const PACKAGE_ITEMS = [
  {
    title: "메인 프로필",
    count: "1장",
    desc: "업소 대표 이미지 + 임팩트 있는 한 줄 슬로건 + 기본 정보(지역/컨셉)",
    effect: "고객의 시선을 ~~3초~~ 안에 사로잡는 강력한 첫인상 구축",
  },
  {
    title: "업체 소개",
    count: "1장",
    desc: "매장 특장점, 인테리어 분위기, 운영 철학 요약",
    effect: '"왜 우리 업소인가?"에 대한 해답 제시 및 **신뢰도 상승**',
  },
  {
    title: "이용 안내 & 주의사항",
    count: "1장",
    desc: "예약 규정, 노쇼 방지 안내, 매너 수칙",
    effect: "불필요한 **클레임을 사전 방지**하고 운영 효율 극대화",
  },
  {
    title: "코스 및 가격표",
    count: "1장",
    desc: "프로그램 구성, 소요 시간, 금액 정보",
    effect: "직관적인 가독성으로 문의 단계를 줄이고 **예약 전환 가속화**",
  },
  {
    title: "데일리 출근부",
    count: "3장",
    desc: "3일치 또는 3가지 타입의 템플릿 제공",
    effect: "매일 업데이트하기 편한 구조로, **관리 효율성 증대**",
  },
];

export default function SectionPackage() {
  return (
    <section
      id="package"
      className="section"
      aria-labelledby="package-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">패키지 구성</p>
          <h2 id="package-title" className="sectionTitle">
            기본 패키지 7컷 구성
          </h2>
          <p className="sectionDesc">
            오피가이드 배너제작·오피가이드 프로필 제작에 필요한 메인 프로필·업체 소개·가격표·출근부 등 기본 7컷 구성입니다. 이 구성으로 핵심 정보 전달과 브랜딩을 한 번에 완성할 수 있습니다.
          </p>
        </div>
        <div className="packageGrid">
          {PACKAGE_ITEMS.map((item) => (
            <article key={item.title} className="packageCard">
              <span className="packageNum">{item.count}</span>
              <h3 className="packageTitle">{item.title}</h3>
              <p className="packageDesc">{item.desc}</p>
              <p className="packageEffect">{hl(item.effect)}</p>
            </article>
          ))}
        </div>
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
