/**
 * 배너를 게시·등록하는 플랫폼 목록.
 * guideSlug: 해당 플랫폼 전용 SEO 가이드 글 slug (없으면 null)
 */
export const PLATFORM_LIST = [
  { name: "오피가이드", region: null, guideSlug: "오피가이드-배너-제작" },
  { name: "오피스타", region: null, guideSlug: "오피스타-배너-제작" },
  { name: "퀸알바", region: null, guideSlug: "퀸알바-배너-프로필-제작" },
  { name: "오피뷰", region: null, guideSlug: "오피뷰-배너-제작" },
  { name: "오피매니아", region: null, guideSlug: null },
  { name: "외로운밤", region: null, guideSlug: "외로운밤-배너-제작" },
  { name: "오피아트", region: null, guideSlug: "오피아트-배너-제작" },
  { name: "오피스북", region: null, guideSlug: "오피스북-배너-제작" },
  { name: "밤공유", region: null, guideSlug: "밤공유-배너-제작" },
  { name: "부달", region: "부산유흥", guideSlug: "부산달리기-배너-제작" },
  { name: "대밤", region: "대구유흥", guideSlug: "대밤-배너-제작" },
  { name: "마사지퀸", region: null, guideSlug: "마사지퀸-배너-제작" },
] satisfies { name: string; region: string | null; guideSlug: string | null }[];
