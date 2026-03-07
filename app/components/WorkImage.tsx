"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  alt: string;
  wide?: boolean;
  priority?: boolean;
};

export default function WorkImage({ src, alt, wide, priority }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // createPortal은 클라이언트에서만 사용 가능 — SSR 방어
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []); // eslint-disable-line

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <div className={`worksPageImageWrap ${loaded ? "worksPageImageWrapLoaded" : ""}`}>
        <button
          type="button"
          className="worksPageImageButton"
          onClick={() => setIsOpen(true)}
          aria-label={`${alt} 확대 보기`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={wide ? "(max-width: 768px) 100vw, 560px" : "(max-width: 768px) 50vw, 280px"}
            className="worksPageImage"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoaded(true)}
          />
        </button>
      </div>

      {mounted && isOpen && createPortal(
        <>
          {/* 배경: body 직속 레이어 — 컴포넌트 CSS 영향 완전 차단 */}
          <div
            className="worksLightboxBackdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            className="worksLightboxContent"
            role="dialog"
            aria-modal="true"
            aria-label="작업물 확대 보기"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              className="worksLightboxClose"
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              aria-label="확대 이미지 닫기"
            >
              ✕ 닫기
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="worksLightboxImage"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </>,
        document.body
      )}
    </>
  );
}
