import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/constants";

/**
 * 쿼리 파라미터가 있는 URL(?city=...&district=...&category=... 등)도
 * 색인 허용. noindex 미적용.
 */
export default function robots(): MetadataRoute.Robots {
  /** 제작 사례 이미지: 검색엔진 색인 제외 */
  const disallowWorkImages = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/군산 미끄덩.gif",
    "/군산 오식도식.gif",
    "/군산 크림범벅.gif",
    "/이든배너.gif",
    "/익산 롤렉스.gif",
    "/익산 트와이스 스웨.gif",
    "/파주 운정 케이실장.gif",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowWorkImages,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: disallowWorkImages,
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
