import { TELEGRAM_URL, TELEGRAM_ID, CTA_PRIMARY } from "../lib/constants";

export default function SectionContact() {
  return (
    <section
      id="contact"
      className="sectionAlt"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">연락처</p>
          <h2 id="contact-title" className="sectionTitle">
            문의하기
          </h2>
          <p className="sectionDesc">
            어디보다 완성도 높은 퀄리티로 제작해 드립니다. 10만원 할인 이벤트 적용 중 · 문의 주시면 시안 제공 및 상담을 해드리며, 배너 제작 문의·견적·예약은 텔레그램으로 보내 주세요.
          </p>
        </div>
        <div className="contactCard">
          <p className="contactDesc">
            배너 제작 견적·코스·시안 문의는 텔레그램으로 보내 주시면 빠르게 답변해 드립니다. 할인 적용 견적 안내해 드립니다.
          </p>
          <p className="contactId">
            텔레그램 ID: <strong>@{TELEGRAM_ID}</strong>
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="telegramButton"
            aria-label={`${CTA_PRIMARY} (텔레그램, 새 창)`}
            >
            {CTA_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  );
}
