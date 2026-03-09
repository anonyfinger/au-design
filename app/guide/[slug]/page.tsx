import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, Breadcrumb } from "../../components";
import { SITE_URL, TELEGRAM_URL, COMPANY_NAME, OG_IMAGE, BRAND_SLUG } from "../../lib/constants";
import { getGuidePost, getAllGuideSlugs, getOrderedGuidePosts } from "../../lib/guidePosts";
import { autoHl } from "../../lib/highlight";

type Props = { params: Promise<{ slug: string }> };

/** 빌드 시 모든 가이드 slug로 정적 페이지 생성 */
export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

/** 목록에 없는 slug 요청도 이 라우트에서 처리 후 notFound */
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getGuidePost(slug);
  if (!post) return { title: "가이드 | 에이유디자인" };
  const canonicalUrl = `${SITE_URL}/guide/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: [
      post.title,
      "오피가이드 배너제작",
      "배너 제작",
      "프로필 제작",
      "맞춤형 배너",
      "플랫폼 규격 배너",
      "시안 제공",
      "견적 문의",
      COMPANY_NAME,
      BRAND_SLUG,
    ],
    openGraph: {
      url: canonicalUrl,
      title: `${post.title} | 에이유디자인`,
      description: post.description,
      type: "article",
      locale: "ko_KR",
      images: [
        {
          ...OG_IMAGE,
          alt: `${post.title} | 에이유디자인`,
        },
      ],
      publishedTime: post.createdAt,
      modifiedTime: new Date().toISOString(),
    },
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  };
}

/** Q./A. 패턴 단락을 감지해 강조 렌더링, 일반 단락은 \n을 <br>로 */
function renderParagraph(text: string, key: number) {
  const trimmed = text.trim();
  const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);

  // Q./A. 패턴 감지: 첫 줄이 "Q."로 시작하거나 lines 중 Q./A.가 있으면 Q&A 블록으로 렌더링
  const hasQA = lines.some((l) => l.startsWith("Q.") || l.startsWith("A."));

  if (hasQA) {
    const pairs: { q: string; a: string }[] = [];
    let currentQ = "";
    for (const line of lines) {
      if (line.startsWith("Q.")) {
        currentQ = line;
      } else if (line.startsWith("A.") && currentQ) {
        pairs.push({ q: currentQ, a: line });
        currentQ = "";
      }
    }
    if (pairs.length > 0) {
      return (
        <>
          {pairs.map((pair, pi) => (
            <div key={`${key}-qa-${pi}`} className="guideQaBlock">
              <span className="guideQaQuestion">{autoHl(pair.q)}</span>
              <span className="guideQaAnswer">{autoHl(pair.a)}</span>
            </div>
          ))}
        </>
      );
    }
  }

  // 일반 단락: \n을 <br>로 처리, autoHl로 핵심 키워드 강조
  return (
    <p key={key}>
      {lines.map((line, li) => (
        <span key={li}>
          {autoHl(line)}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

function GuidePostBody({ post }: { post: NonNullable<Awaited<ReturnType<typeof getGuidePost>>> }) {
  if (post.bodySections && post.bodySections.length > 0) {
    return (
      <div className="guidePostBody">
        {post.bodySections.map((section, i) => (
          <section key={i} className="guidePostSection">
            <h2 className="guidePostSectionTitle">{section.title}</h2>
            <div className="guidePostSectionContent">
              {section.content.split(/\n\n+/).map((para, j) =>
                renderParagraph(para, j)
              )}
            </div>
          </section>
        ))}
      </div>
    );
  }
  return (
    <div className="guidePostBody">
      {post.body?.split(/\n\n+/).map((para, i) => renderParagraph(para, i))}
    </div>
  );
}

export default async function GuidePostPage({ params }: Props) {
  const { slug } = await params;
  const post = getGuidePost(slug);
  if (!post) notFound();

  const relatedPosts = getOrderedGuidePosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 5);

  const articleUrl = `${SITE_URL}/guide/${post.slug}`;
  const ogImageUrl = `${SITE_URL}${OG_IMAGE.url}`;
  const orgId = `${SITE_URL}/#organization`;

  const rawText = post.bodySections
    ? post.bodySections.map((s) => s.title + " " + s.content).join(" ")
    : post.body ?? "";
  const wordCount = Math.round(rawText.replace(/\s+/g, "").length / 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": articleUrl,
    headline: post.title,
    description: post.description,
    keywords: [post.title, "배너 제작", "프로필 제작", "플랫폼 규격 배너", COMPANY_NAME],
    about: { "@type": "Thing", name: post.title },
    wordCount,
    image: { "@type": "ImageObject", url: ogImageUrl, width: OG_IMAGE.width, height: OG_IMAGE.height },
    author: { "@type": "Organization", "@id": orgId, name: COMPANY_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      "@id": orgId,
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico`, width: 48, height: 48 },
    },
    datePublished: post.createdAt,
    dateModified: new Date().toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    isPartOf: { "@type": "CollectionPage", "@id": `${SITE_URL}/guide` },
    url: articleUrl,
    inLanguage: "ko",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "가이드", item: `${SITE_URL}/guide` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  const faqSchema =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Header />
      <main className="main mainGuide" id="main-content" aria-label={post.title}>
        <article className="guideArticle">
          <div className="container">
            <Breadcrumb
              items={[
                { label: "홈", href: "/" },
                { label: "가이드", href: "/guide" },
                { label: post.title },
              ]}
            />
            <h1 className="guideArticleTitle">
              {post.title}
            </h1>
            <div className="guideArticleBodyWrap">
              <GuidePostBody post={post} />
            </div>
            <aside className="guideArticleCtaBox" aria-label="제작 문의">
              <p className="guideArticleCta">
                제작 문의·견적은{" "}
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="guideArticleCtaButton"
                >
                  텔레그램 @AUDesignlab
                </a>
                으로 연락해 주세요.
              </p>
              <Link href="/guide" className="guideArticleBackLink">
                ← 가이드 목록으로
              </Link>
            </aside>

            {relatedPosts.length > 0 && (
              <nav className="guideRelated" aria-labelledby="related-guides-title">
                <h2 id="related-guides-title" className="guideRelatedTitle">
                  다른 플랫폼 배너 제작 가이드
                </h2>
                <ul className="guideRelatedList">
                  {relatedPosts.map((related) => (
                    <li key={related.slug} className="guideRelatedItem">
                      <Link href={`/guide/${related.slug}`} className="guideRelatedLink">
                        <span className="guideRelatedLinkTitle">{related.title}</span>
                        <span className="guideRelatedLinkDesc">{related.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/platforms" className="guideRelatedMoreLink">
                  지원 플랫폼 전체 보기 →
                </Link>
              </nav>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
