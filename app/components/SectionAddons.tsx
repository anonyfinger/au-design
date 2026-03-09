import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

const ADDON_ITEMS = [
  {
    icon: "📅",
    title: "출근부 정기 업데이트",
    desc: "매주·매월 출근부 디자인을 새로 제작해 드립니다. 한 번 제작 후에도 꾸준히 신선한 이미지를 유지할 수 있습니다.",
    tag: "월정기",
  },
  {
    icon: "🎉",
    title: "시즌·이벤트 배너 리뉴얼",
    desc: "명절·이벤트·프로모션 시즌에 맞춘 배너 재제작. 플랫폼 노출 우선권을 유지하고 신규 고객 유입을 늘립니다.",
    tag: "시즌별",
  },
  {
    icon: "📰",
    title: "마사지초이스 게재 유지",
    desc: "마사지초이스 업체 배너 게재를 연장 관리해 드립니다. 검색 노출이 끊기지 않도록 지속적으로 관리합니다.",
    tag: "월정기",
  },
  {
    icon: "🖼️",
    title: "구글 이미지 노출 관리",
    desc: "구글 이미지 검색에 업체 배너가 지속 노출되도록 관리합니다. 온라인 브랜드 인지도를 꾸준히 높입니다.",
    tag: "지속관리",
  },
  {
    icon: "🔄",
    title: "가격·코스 업데이트",
    desc: "가격표·코스·연락처 등 정보가 바뀔 때 빠르게 배너를 수정해 드립니다. 잘못된 정보로 인한 고객 불만을 방지합니다.",
    tag: "수시",
  },
  {
    icon: "➕",
    title: "신규 플랫폼 추가 등록",
    desc: "새로운 플랫폼에 등록할 때 기존 디자인을 해당 규격으로 변환·추가 제작해 드립니다. 멀티 플랫폼 운영이 편해집니다.",
    tag: "수시",
  },
] as const;

export default function SectionAddons() {
  return (
    <section
      id="addons"
      className="section"
      aria-labelledby="addons-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">제작 이후에도 함께</p>
          <h2 id="addons-title" className="sectionTitle">
            한 번으로 끝나지 않는 서비스
          </h2>
          <p className="sectionDesc">
            배너 제작 납품 이후에도 플랫폼 노출·이미지 관리·정보 업데이트까지 지속적으로 지원합니다.
            꾸준한 관리가 곧 예약률 유지의 핵심입니다.
          </p>
        </div>
        <div className="addonsGrid">
          {ADDON_ITEMS.map((item) => (
            <article key={item.title} className="addonCard">
              <div className="addonCardTop">
                <span className="addonIcon">{item.icon}</span>
                <span className="addonTag">{item.tag}</span>
              </div>
              <h3 className="addonTitle">{item.title}</h3>
              <p className="addonDesc">{item.desc}</p>
            </article>
          ))}
        </div>
        <div className="sectionCta">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="telegramButton"
            aria-label={`지속 관리 서비스 ${CTA_PRIMARY} (텔레그램)`}
          >
            {CTA_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  );
}
