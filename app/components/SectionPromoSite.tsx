import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

const PROMO_FEATURES = [
  {
    icon: "📱",
    title: "모바일 최적화 디자인",
    desc: "스마트폰에서 완벽하게 보이는 반응형 레이아웃. 업소 이미지·코스·가격을 한눈에 전달합니다.",
  },
  {
    icon: "🔍",
    title: "구글·네이버 검색 노출",
    desc: "SEO 최적화 설정으로 '[지역] [업종]' 검색 시 업소 전용 사이트가 검색 결과에 노출됩니다.",
  },
  {
    icon: "💬",
    title: "텔레그램 예약 연동",
    desc: "사이트 방문 고객이 텔레그램으로 바로 예약·문의할 수 있도록 CTA 버튼을 연결합니다.",
  },
  {
    icon: "🗂️",
    title: "업소 정보 풀 구성",
    desc: "업소 소개·코스·가격표·실장님 소개·이용 안내·오시는 길 등 필요한 섹션을 모두 구성합니다.",
  },
  {
    icon: "🌐",
    title: "전용 도메인 연결",
    desc: "업소 이름에 맞는 도메인을 사용해 브랜드 신뢰도를 높이고 고객이 직접 접속할 수 있습니다.",
  },
  {
    icon: "📊",
    title: "방문자 분석 설정",
    desc: "Google Analytics 연동으로 방문자 수·유입 경로를 파악해 마케팅 전략 수립에 활용할 수 있습니다.",
  },
] as const;

const PROMO_STEPS = [
  { step: "01", label: "업소 정보 전달", desc: "코스·가격·소개·이미지 등 기본 정보를 텔레그램으로 전달" },
  { step: "02", label: "사이트 시안 제작", desc: "업소 컨셉에 맞는 디자인 시안 제공 및 수정 반영" },
  { step: "03", label: "SEO·도메인 설정", desc: "검색 노출 최적화, 도메인 연결, 텔레그램 예약 연동" },
  { step: "04", label: "런칭 및 인계", desc: "사이트 오픈 후 관리 방법 안내 및 콘텐츠 업데이트 지원" },
] as const;

export default function SectionPromoSite() {
  return (
    <section
      id="promo-site"
      className="sectionAlt"
      aria-labelledby="promo-site-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">신규 서비스</p>
          <h2 id="promo-site-title" className="sectionTitle">
            업소 단독 홍보 사이트 제작
          </h2>
          <p className="sectionDesc">
            플랫폼 등록에 그치지 않고, 업소만의 전용 홍보 사이트를 구축해 드립니다.
            구글·네이버 검색 노출 + 텔레그램 예약 연동으로 독립적인 마케팅 채널을 확보하세요.
          </p>
        </div>

        <div className="promoSiteGrid">
          {PROMO_FEATURES.map((item) => (
            <article key={item.title} className="promoSiteCard">
              <span className="promoSiteIcon">{item.icon}</span>
              <h3 className="promoSiteTitle">{item.title}</h3>
              <p className="promoSiteDesc">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="promoSiteSteps" aria-label="홍보 사이트 제작 절차">
          <p className="promoSiteStepsTitle">제작 진행 절차</p>
          <ol className="promoSiteStepList">
            {PROMO_STEPS.map((s) => (
              <li key={s.step} className="promoSiteStepItem">
                <span className="promoSiteStepNum">{s.step}</span>
                <div className="promoSiteStepContent">
                  <strong className="promoSiteStepLabel">{s.label}</strong>
                  <span className="promoSiteStepDesc">{s.desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="promoSiteCta">
          <p className="promoSiteCtaNote">
            견적은 사이트 구성 규모에 따라 다릅니다. 텔레그램으로 업소 정보를 알려주시면 맞춤 견적을 안내해 드립니다.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="telegramButton"
            aria-label={`업소 단독 홍보 사이트 ${CTA_PRIMARY} (텔레그램)`}
          >
            {CTA_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  );
}
