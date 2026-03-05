import styles from "../landing.module.scss";
import { TELEGRAM_URL } from "../lib/constants";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <p className={styles.footerBrand}>에이유디자인 · 오피가이드 배너제작 전문</p>
          <p className={styles.footerBrandDesc}>
            오피가이드 배너제작·오피가이드 프로필 제작, 오피스타·퀸알바·부달·대밤 등 홍보 플랫폼 맞춤 제작.
            시안 제공·상담 문의 텔레그램 @BroCPN
          </p>
        </div>
        <div>
          <p className={styles.footerColTitle}>바로가기</p>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/" className={styles.footerLink}>
                메인
              </a>
            </li>
            <li>
              <a href="/guide" className={styles.footerLink}>
                배너 제작 가이드
              </a>
            </li>
            <li>
              <a href="/keywords" className={styles.footerLink}>
                키워드별 보기
              </a>
            </li>
            <li>
              <a href="/platforms" className={styles.footerLink}>
                배너·프로필 제작 플랫폼
              </a>
            </li>
            <li>
              <a href="/#package" className={styles.footerLink}>
                제작 패키지
              </a>
            </li>
            <li>
              <a href="/#price" className={styles.footerLink}>
                가격 안내
              </a>
            </li>
            <li>
              <a href="/works" className={styles.footerLink}>
                제작 사례
              </a>
            </li>
            <li>
              <a href="/#notice" className={styles.footerLink}>
                주의사항
              </a>
            </li>
            <li>
              <a href="/#reservation" className={styles.footerLink}>
                예약방법
              </a>
            </li>
            <li>
              <a href="/#contact" className={styles.footerLink}>
                문의하기
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={styles.footerColTitle}>문의</p>
          <ul className={styles.footerLinks}>
            <li>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                aria-label="텔레그램 @BroCPN 문의 (새 창)"
              >
                텔레그램 @BroCPN
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.footerBottom}>© 에이유디자인. 문의: 텔레그램 @BroCPN</p>
    </footer>
  );
}
