"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { PORTFOLIO_WORKS } from "../lib/works";
import { TELEGRAM_URL, CTA_PRIMARY } from "../lib/constants";

const CARDS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(PORTFOLIO_WORKS.length / CARDS_PER_PAGE);
const CARD_WIDTH = 130;
const CARD_GAP = 16;
const PAGE_SCROLL = (CARD_WIDTH + CARD_GAP) * CARDS_PER_PAGE;

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const goToPage = useCallback((page: number) => {
    const clamped = Math.max(0, Math.min(page, TOTAL_PAGES - 1));
    setCurrentPage(clamped);
    isScrollingRef.current = true;
    const targetScroll = clamped * PAGE_SCROLL;
    stackRef.current?.scrollTo({ left: targetScroll, behavior: "smooth" });
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 400);
  }, []);

  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;
    const onScroll = () => {
      if (isScrollingRef.current) return;
      const scrollLeft = el.scrollLeft;
      const page = Math.round(scrollLeft / PAGE_SCROLL);
      setCurrentPage(Math.max(0, Math.min(page, TOTAL_PAGES - 1)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goPrev = () => goToPage(currentPage - 1);
  const goNext = () => goToPage(currentPage + 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="portfolio"
      className="section portfolioSection"
      aria-labelledby="portfolio-title"
    >
      <div className="container">
        <div className="sectionHead">
          <p className="sectionLabel">에이유디자인 작업물 · 배너 제작 포트폴리오</p>
          <h2 id="portfolio-title" className="sectionTitle">
            제작 사례
          </h2>
          <p className="sectionDesc">
            오피가이드·오피스타·퀸알바 등 플랫폼용 배너·프로필 맞춤 제작 사례입니다.
            클릭하면 크게 보기. 마우스를 올리거나 페이지 버튼·슬라이드로 탐색하세요.
          </p>
        </div>

        {/* PC: 카드 나열 + 호버 확대 + 하단 페이지네이션 */}
        <div className="portfolioStackWrap">
        <div
          ref={stackRef}
          className="portfolioStack"
          role="list"
          aria-label="제작 사례 포트폴리오"
        >
          {PORTFOLIO_WORKS.map((work, index) => (
            <div
              key={work.src}
              className={`portfolioCard ${activeIndex === index ? "portfolioCardActive" : ""}`}
              role="listitem"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ zIndex: activeIndex === index ? 999 : 1 }}
            >
              <button
                type="button"
                className="portfolioCardBtn"
                onClick={() => setLightboxIndex(index)}
                aria-label={`${index + 1}번 작업물 크게 보기`}
              >
                <div className="portfolioCardInner">
                  <img
                    src={work.src}
                    alt={work.alt}
                    className="portfolioCardImage"
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              </button>
            </div>
          ))}
          <span className="portfolioStackSpacer portfolioStackSpacerEnd" aria-hidden="true" />
        </div>
        <nav className="portfolioPagination" aria-label="작업물 페이지네이션">
          <button
            type="button"
            className="portfolioPageBtn"
            onClick={goPrev}
            disabled={currentPage === 0}
            aria-label="이전 페이지"
          >
            이전
          </button>
          <div className="portfolioPageDots" role="tablist">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={currentPage === i}
                aria-label={`${i + 1}페이지`}
                className={`portfolioPageDot ${currentPage === i ? "portfolioPageDotActive" : ""}`}
                onClick={() => goToPage(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="portfolioPageBtn"
            onClick={goNext}
            disabled={currentPage >= TOTAL_PAGES - 1}
            aria-label="다음 페이지"
          >
            다음
          </button>
        </nav>
        </div>

        {/* 포토북 효과 라이트박스 */}
        {lightboxIndex !== null && (
          <div
            className="portfolioLightbox"
            role="dialog"
            aria-modal="true"
            aria-label="작업물 크게 보기"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="portfolioLightboxInner"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PORTFOLIO_WORKS[lightboxIndex].src}
                alt={PORTFOLIO_WORKS[lightboxIndex].alt}
                className="portfolioLightboxImage"
              />
              <button
                type="button"
                className="portfolioLightboxClose"
                onClick={() => setLightboxIndex(null)}
                aria-label="닫기"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* 모바일: 슬라이드 스크롤 */}
        <div
          className="portfolioSlider"
          role="list"
          aria-label="제작 사례 슬라이드"
        >
          {PORTFOLIO_WORKS.map((work, index) => (
            <div key={work.src} className="portfolioSliderItem" role="listitem">
              <button
                type="button"
                className="portfolioSliderCard"
                onClick={() => setLightboxIndex(index)}
                aria-label={`${index + 1}번 작업물 크게 보기`}
              >
                <img
                  src={work.src}
                  alt={work.alt}
                  className="portfolioSliderImage"
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
              </button>
            </div>
          ))}
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
        </div>
      </div>
    </section>
  );
}
