"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../landing.module.scss";
import { TELEGRAM_URL } from "../lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerTop}>
          <Link
            href="/"
            className={styles.logoWrap}
            aria-label="에이유디자인 배너·프로필 제작 메인으로 이동"
          >
            <Image
              src="/AUWhiteLogo.png"
              alt="에이유디자인 배너·프로필 제작 로고"
              width={150}
              height={45}
              className={styles.logoImg}
              priority
            />
          </Link>
          <div className={styles.headerTopActions}>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              aria-label="텔레그램으로 배너·프로필 제작 문의 (새 창)"
            >
              텔레그램 문의
            </a>
            <button
              type="button"
              className={styles.hamburgerBtn}
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
        <nav className={styles.nav} aria-label="주요 메뉴">
          <Link href="/works" className={styles.navLink}>
            작업물
          </Link>
          <Link href="/guide" className={styles.navLink}>
            배너 제작 가이드
          </Link>
          <Link href="/keywords" className={styles.navLink}>
            키워드별 보기
          </Link>
          <Link href="/platforms" className={styles.navLink}>
            배너·프로필 제작 플랫폼
          </Link>
        </nav>
      </div>

      {/* 모바일: 햄버거 열림 시 드로어 */}
      <div
        className={styles.navDrawer}
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={styles.navDrawerBackdrop}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <div className={styles.navDrawerPanel}>
          <button
            type="button"
            className={styles.navDrawerClose}
            onClick={closeMenu}
            aria-label="메뉴 닫기"
          >
            닫기
          </button>
          <nav className={styles.navDrawerNav} aria-label="주요 메뉴">
            <Link href="/works" className={styles.navDrawerLink} onClick={closeMenu}>
              작업물
            </Link>
            <Link href="/guide" className={styles.navDrawerLink} onClick={closeMenu}>
              배너 제작 가이드
            </Link>
            <Link href="/keywords" className={styles.navDrawerLink} onClick={closeMenu}>
              키워드별 보기
            </Link>
            <Link href="/platforms" className={styles.navDrawerLink} onClick={closeMenu}>
              배너·프로필 제작 플랫폼
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
