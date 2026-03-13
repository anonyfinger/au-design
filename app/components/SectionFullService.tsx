import { TELEGRAM_URL, CTA_PRIMARY, COMPANY_NAME } from "../lib/constants";

const TEAM_ROLES = [
  {
    label: "디자이너",
    desc: "배너·프로필 비주얼, 브랜딩, 레이아웃",
  },
  {
    label: "개발자",
    desc: "사이트 구축, SEO, 링크 배치, 기술 지원",
  },
] as const;

const EXTRA_SERVICES = [
  "업소 전용 홍보 사이트 제작",
  "구글·네이버 검색 노출(SEO)",
  "텔레그램 문의 링크 배치",
  "출근부·배너 지속 관리",
] as const;

export default function SectionFullService() {
  return (
    <section
      id="full-service"
      className="section sectionFullService"
      aria-labelledby="full-service-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">배너만 제작하나요?</p>
          <h2 id="full-service-title" className="sectionTitle">
            디자이너 + 개발자 상주,
            <br />
            <span className="emWarm">더 나은 서비스</span>를 받을 수 있습니다
          </h2>
          <p className="sectionDesc">
            {COMPANY_NAME}은 배너 제작뿐 아니라 <strong className="emWarm">디자이너와 개발자</strong>가 함께 상주합니다.
            업소 전용 사이트, 검색 노출, 문의 링크 배치, 지속 관리까지 — 배너 한 장을 넘어 <strong>종합 솔루션</strong>을 제공합니다.
          </p>
        </div>

        <div className="fullServiceTeam">
          <div className="fullServiceTeamInner">
            {TEAM_ROLES.map((role) => (
              <div key={role.label} className="fullServiceRole">
                <span className="fullServiceRoleLabel">{role.label}</span>
                <span className="fullServiceRoleDesc">{role.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fullServiceBenefits">
          <p className="fullServiceBenefitsTitle">추가로 받을 수 있는 서비스</p>
          <ul className="fullServiceBenefitsList">
            {EXTRA_SERVICES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="fullServiceCta">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="telegramButton"
            aria-label={`종합 서비스 ${CTA_PRIMARY} (텔레그램)`}
          >
            {CTA_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  );
}
