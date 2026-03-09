"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export type ScrollRevealVariant = "up" | "left" | "right" | "wipeLeft" | "wipeRight";

type Props = {
  children: ReactNode;
  /** 등장 방향: up(아래→위), left(왼쪽→), right(←오른쪽), wipeLeft(왼쪽에서 띠), wipeRight(오른쪽에서 띠) */
  variant?: ScrollRevealVariant;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
};

export default function ScrollReveal({
  children,
  variant = "up",
  threshold = 0.08,
  rootMargin = "0px 0px 60px 0px",
  once = true,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <div
      ref={ref}
      className={`scrollReveal scrollReveal--${variant} ${inView ? "scrollRevealInView" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
