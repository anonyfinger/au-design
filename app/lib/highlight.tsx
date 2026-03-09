import React from "react";

/**
 * 문자열 안의 마커를 인라인 강조 span으로 변환합니다.
 * **텍스트** → <strong className="emWarm"> (앰버 bold)
 * ~~텍스트~~ → <span className="emWarm">   (앰버 bold)
 */
export function hl(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|~~[^~]+~~)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="emWarm">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("~~") && part.endsWith("~~")) {
      return (
        <span key={i} className="emWarm">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

/**
 * 가이드 글 본문 자동 강조.
 * 미리 정의한 핵심 키워드를 emWarm으로 자동 처리합니다.
 * 수동 마커(**...**) 처리 후 나머지 텍스트에 자동 강조를 적용합니다.
 */
const AUTO_HIGHLIGHT_TERMS = [
  "텔레그램 @AUDesignlab",
  "1:1 맞춤 제작",
  "1:1 디자인",
  "패키지 할인",
  "즉시 사용",
  "플랫폼 규격",
  "8장 패키지",
  "7컷 패키지",
  "10컷 패키지",
];

// 정규식을 한 번만 컴파일
const AUTO_HL_REGEX = new RegExp(
  `(${AUTO_HIGHLIGHT_TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g"
);

export function autoHl(text: string): React.ReactNode {
  // 1단계: 수동 마커 처리
  const afterManual = hl(text);

  // hl() 결과가 단순 문자열(강조 없음)이면 자동 강조도 적용
  if (typeof afterManual === "string") {
    return applyAutoHighlight(afterManual);
  }

  // hl()이 배열을 반환한 경우: 각 요소에 대해 처리
  if (Array.isArray(afterManual)) {
    return afterManual.map((node, i) => {
      if (typeof node === "string") {
        const highlighted = applyAutoHighlight(node);
        return Array.isArray(highlighted) ? (
          <React.Fragment key={i}>{highlighted}</React.Fragment>
        ) : (
          highlighted
        );
      }
      return node;
    });
  }

  return afterManual;
}

function applyAutoHighlight(text: string): React.ReactNode {
  const parts = text.split(AUTO_HL_REGEX);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    AUTO_HIGHLIGHT_TERMS.includes(part) ? (
      <span key={i} className="emWarm">
        {part}
      </span>
    ) : (
      part
    )
  );
}
