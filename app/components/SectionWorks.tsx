import Link from "next/link";
import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

export default function SectionWorks() {
  return (
    <section
      id="works"
      className="section"
      aria-labelledby="works-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">에이유디자인 작업물 · 오피가이드 배너제작 등</p>
          <h2 id="works-title" className="sectionTitle">
            제작 사례
          </h2>
          <p className="sectionDesc">
            오피가이드 배너제작·오피가이드 프로필 제작을 비롯해 오피스타·퀸알바 등 배너·프로필 맞춤 제작 사례를 모아두었습니다.
          </p>
        </div>
        <div className="worksCtaRow">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="telegramButton"
            aria-label={`${CTA_PRIMARY} (텔레그램)`}
          >
            {CTA_PRIMARY}
          </a>
          <Link href="/works" className="worksCtaSecondary">
            제작 사례 전체 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
