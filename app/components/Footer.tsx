
import { TELEGRAM_URL } from "../lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <p className="footerBrand">에이유디자인 · 오피가이드 배너제작 전문</p>
          <p className="footerBrandDesc">
            오피가이드 배너제작·오피가이드 프로필 제작, 오피스타·퀸알바·부달·대밤 등 홍보 플랫폼 맞춤 제작.
            시안 제공·상담 문의 텔레그램 @AUDesignlab
          </p>
        </div>
        <div>
          <p className="footerColTitle">바로가기</p>
          <ul className="footerLinks">
            <li>
              <Link href="/" className="footerLink">
                메인
              </Link>
            </li>
            <li>
              <Link href="/guide" className="footerLink">
                배너 제작 가이드
              </Link>
            </li>
            <li>
              <Link href="/keywords" className="footerLink">
                키워드별 보기
              </Link>
            </li>
            <li>
              <Link href="/platforms" className="footerLink">
                배너·프로필 제작 플랫폼
              </Link>
            </li>
            <li>
              <Link href="/#package" className="footerLink">
                제작 패키지
              </Link>
            </li>
            <li>
              <Link href="/#price" className="footerLink">
                가격 안내
              </Link>
            </li>
            <li>
              <Link href="/works" className="footerLink">
                제작 사례
              </Link>
            </li>
            <li>
              <Link href="/#notice" className="footerLink">
                주의사항
              </Link>
            </li>
            <li>
              <Link href="/#reservation" className="footerLink">
                예약방법
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="footerLink">
                문의하기
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footerColTitle">문의</p>
          <ul className="footerLinks">
            <li>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink"
                aria-label="텔레그램 @AUDesignlab 문의 (새 창)"
              >
                텔레그램 @AUDesignlab
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footerBottom">© 에이유디자인. 문의: 텔레그램 @AUDesignlab</p>
    </footer>
  );
}
