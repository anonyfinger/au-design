"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
    <header className="header">
      <div className="headerInner">
        <div className="headerTop">
          <Link
            href="/"
            className="logoWrap"
            aria-label="에이유디자인 배너·프로필 제작 메인으로 이동"
          >
            <Image
              src="/AUWhiteLogo.png"
              alt="에이유디자인 배너·프로필 제작 로고"
              width={150}
              height={45}
              className="logoImg"
              priority
            />
          </Link>
          <div className="headerTopActions">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ctaButton"
              aria-label="텔레그램으로 배너·프로필 제작 문의 (새 창)"
            >
              텔레그램 문의
            </a>
            <button
              type="button"
              className="hamburgerBtn"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            >
              <span className="hamburgerLine" />
              <span className="hamburgerLine" />
              <span className="hamburgerLine" />
            </button>
          </div>
        </div>
        <nav className="nav" aria-label="주요 메뉴">
          <Link href="/works" className="navLink">
            작업물
          </Link>
          <Link href="/guide" className="navLink">
            배너 제작 가이드
          </Link>
          <Link href="/keywords" className="navLink">
            키워드별 보기
          </Link>
          <Link href="/platforms" className="navLink">
            배너·프로필 제작 플랫폼
          </Link>
        </nav>
      </div>

      {/* 모바일: 햄버거 열림 시 드로어 */}
      <div
        className="navDrawer"
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="navDrawerBackdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
        <div className="navDrawerPanel">
          <button
            type="button"
            className="navDrawerClose"
            onClick={closeMenu}
            aria-label="메뉴 닫기"
          >
            닫기
          </button>
          <nav className="navDrawerNav" aria-label="주요 메뉴">
            <Link href="/works" className="navDrawerLink" onClick={closeMenu}>
              작업물
            </Link>
            <Link href="/guide" className="navDrawerLink" onClick={closeMenu}>
              배너 제작 가이드
            </Link>
            <Link href="/keywords" className="navDrawerLink" onClick={closeMenu}>
              키워드별 보기
            </Link>
            <Link href="/platforms" className="navDrawerLink" onClick={closeMenu}>
              배너·프로필 제작 플랫폼
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
