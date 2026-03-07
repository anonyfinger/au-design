import Link from "next/link";
import { COMPANY_NAME, BRAND_SLUG, TELEGRAM_ID } from "../lib/constants";

const GUIDE_LINKS = [
  { label: "오피가이드 배너제작", href: "/guide/오피가이드-배너-제작" },
  { label: "오피스타 배너제작", href: "/guide/오피스타-배너-제작" },
  { label: "퀸알바 배너·프로필 제작", href: "/guide/퀸알바-배너-프로필-제작" },
  { label: "오피뷰 배너 제작", href: "/guide/오피뷰-배너-제작" },
  { label: "외로운밤 배너 제작", href: "/guide/외로운밤-배너-제작" },
  { label: "오피아트 배너 제작", href: "/guide/오피아트-배너-제작" },
  { label: "오피스북 배너 제작", href: "/guide/오피스북-배너-제작" },
  { label: "밤공유 배너 제작", href: "/guide/밤공유-배너-제작" },
  { label: "대밤 배너 제작", href: "/guide/대밤-배너-제작" },
  { label: "마사지퀸 배너 제작", href: "/guide/마사지퀸-배너-제작" },
  { label: "인천달리기 배너 제작", href: "/guide/인천달리기-배너-제작" },
  { label: "부산달리기 배너 제작", href: "/guide/부산달리기-배너-제작" },
] as const;

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
            <strong>{COMPANY_NAME}(au-designlab)</strong>은{" "}
            <Link href="/guide/오피가이드-배너-제작" className="sectionSeoIntroLink">오피가이드 배너제작</Link>·
            <Link href="/guide/오피가이드-배너-제작" className="sectionSeoIntroLink">오피가이드 프로필 제작</Link>을 핵심으로,{" "}
            <Link href="/guide/오피스타-배너-제작" className="sectionSeoIntroLink">오피스타 배너제작</Link>,{" "}
            <Link href="/guide/오피뷰-배너-제작" className="sectionSeoIntroLink">오피뷰 배너 제작</Link>,{" "}
            <Link href="/guide/외로운밤-배너-제작" className="sectionSeoIntroLink">외로운밤 배너 제작</Link>,{" "}
            <Link href="/guide/오피아트-배너-제작" className="sectionSeoIntroLink">오피아트 배너 제작</Link>,{" "}
            <Link href="/guide/밤공유-배너-제작" className="sectionSeoIntroLink">밤공유 배너 제작</Link>,{" "}
            <Link href="/guide/대밤-배너-제작" className="sectionSeoIntroLink">대밤 배너 제작</Link>,{" "}
            <Link href="/guide/마사지퀸-배너-제작" className="sectionSeoIntroLink">마사지퀸 배너 제작</Link>,{" "}
            <Link href="/guide/퀸알바-배너-프로필-제작" className="sectionSeoIntroLink">퀸알바 배너·프로필 제작</Link>,{" "}
            <Link href="/guide/인천달리기-배너-제작" className="sectionSeoIntroLink">인천달리기 배너 제작</Link>,{" "}
            <Link href="/guide/부산달리기-배너-제작" className="sectionSeoIntroLink">부산달리기 배너 제작</Link> 등
            업소·홍보·지역 플랫폼에 등록할 <strong>배너 제작·프로필 제작</strong>을 맞춤 진행합니다.
          </p>
          <p>
            오피가이드 배너제작은 플랫폼 규격에 맞춘 메인 프로필·업체 소개·가격표·출근부 구성으로 진행하며,
            오피스타·퀸알바·오피뷰 등 타 플랫폼 배너·프로필 제작도 함께 의뢰 가능합니다.
            견적·시안 문의는 텔레그램 @{TELEGRAM_ID}으로 부담 없이 연락해 주세요.
            지원 플랫폼 전체 목록은{" "}
            <Link href="/platforms" className="sectionSeoIntroLink">지원 플랫폼 페이지</Link>에서 확인할 수 있습니다.
          </p>
        </div>

        {/* 플랫폼별 가이드 직접 링크 그리드 */}
        <nav className="sectionSeoIntroGuideGrid" aria-label="플랫폼별 배너 제작 가이드 바로가기">
          <p className="sectionSeoIntroNavLabel">플랫폼별 배너 제작 가이드</p>
          <ul className="sectionSeoIntroGuideList">
            {GUIDE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="sectionSeoIntroGuidePill">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="sectionSeoIntroNav" aria-label="서비스 바로가기">
          <span className="sectionSeoIntroNavLabel">더 보기</span>
          <Link href="/platforms" className="sectionSeoIntroPill">
            지원 플랫폼 목록
          </Link>
          <Link href="/guide" className="sectionSeoIntroPill">
            전체 가이드 목록
          </Link>
          <Link href="/keywords" className="sectionSeoIntroPill">
            키워드별 보기
          </Link>
        </nav>
      </div>
    </section>
  );
}
