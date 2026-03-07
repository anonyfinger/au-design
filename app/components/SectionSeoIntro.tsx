import Link from "next/link";
import { COMPANY_NAME, BRAND_SLUG, TELEGRAM_ID } from "../lib/constants";

/**
 * SEO용 소개 문단. 검색엔진 수집용 키워드·내부 링크 보강.
 */
export default function SectionSeoIntro() {
  return (
    <section
      className="sectionSeoIntro"
      aria-labelledby="seo-intro-title"
    >
      <div className="container">
        <h2 id="seo-intro-title" className="sectionSeoIntroTitle">
          {COMPANY_NAME}({BRAND_SLUG}) 서비스 소개
        </h2>
        <div className="sectionSeoIntroText">
          <p>
            <strong>{COMPANY_NAME}(au-designlab)</strong>은 <strong>오피가이드 배너제작·오피가이드 배너 제작·오피가이드 프로필 제작</strong>을 핵심으로,
            오피스타, 오피뷰, 외로운밤, 오피아트, 오피스북, 밤공유, 대밤, 마사지퀸, 퀸알바, 인천달리기, 부산달리기, 부달(부산유흥) 등
            업소·홍보·지역 플랫폼에 등록할 <strong>배너 제작·프로필 제작</strong>을 맞춤 진행합니다.
            어디보다 완성도 높은 퀄리티를 제공하며, 컷수별 기준으로 투명한 가격 안내를 제공합니다.
          </p>
          <p>
            오피가이드 배너제작은 플랫폼 규격에 맞춘 메인 프로필·업체 소개·가격표·출근부 8장 패키지로 진행하며,
            오피스타·퀸알바·오피뷰 등 타 플랫폼 배너·프로필 제작도 함께 의뢰 가능합니다.
            패키지별 견적·시안 문의는 텔레그램 @{TELEGRAM_ID}으로 부담 없이 연락해 주세요.
          </p>
        </div>
        <nav className="sectionSeoIntroNav" aria-label="서비스 바로가기">
          <span className="sectionSeoIntroNavLabel">바로가기</span>
          <Link href="/keywords" className="sectionSeoIntroPill">
            키워드별 보기
          </Link>
          <Link href="/guide" className="sectionSeoIntroPill">
            배너 제작 가이드
          </Link>
          <Link href="/platforms" className="sectionSeoIntroPill">
            배너·프로필 제작 플랫폼
          </Link>
        </nav>
      </div>
    </section>
  );
}
