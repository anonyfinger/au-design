import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, Breadcrumb } from "../../components";
import { SITE_URL, TELEGRAM_URL, COMPANY_NAME, OG_IMAGE } from "../../lib/constants";
import { getGuidePost, getAllGuideSlugs } from "../../lib/guidePosts";

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
  if (!post) return { title: "가이드" };
  const canonicalUrl = `${SITE_URL}/guide/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: [
      post.title,
      "배너 제작",
      "프로필 제작",
      "맞춤형 배너",
      "플랫폼 규격 배너",
      "시안 제공",
      "견적 문의",
      COMPANY_NAME,
    ],
    openGraph: {
      url: canonicalUrl,
      title: `${post.title} | 에이유디자인`,
      description: post.description,
      type: "article",
      images: [OG_IMAGE],
    },
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true },
  };
}

function GuidePostBody({ post }: { post: NonNullable<Awaited<ReturnType<typeof getGuidePost>>> }) {
  if (post.bodySections && post.bodySections.length > 0) {
    return (
      <div className="guidePostBody">
        {post.bodySections.map((section, i) => (
          <section key={i} className="guidePostSection">
            <h2 className="guidePostSectionTitle">{section.title}</h2>
            <div className="guidePostSectionContent">
              {section.content.split(/\n\n+/).map((para, j) => (
                <p key={j}>{para.trim()}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }
  return (
    <div className="guidePostBody">
      {post.body?.split(/\n\n+/).map((para, i) => (
        <p key={i}>{para.trim()}</p>
      ))}
    </div>
  );
}

export default async function GuidePostPage({ params }: Props) {
  const { slug } = await params;
  const post = getGuidePost(slug);
  if (!post) notFound();

  const articleUrl = `${SITE_URL}/guide/${post.slug}`;
  const logoUrl = `${SITE_URL}/globe.svg`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: logoUrl,
    author: { "@type": "Organization", name: COMPANY_NAME },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      logo: { "@type": "ImageObject", url: logoUrl, width: 512, height: 512 },
    },
    datePublished: post.createdAt,
    dateModified: post.createdAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
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
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
