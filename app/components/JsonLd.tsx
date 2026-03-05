import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  COMPANY_NAME,
  TELEGRAM_URL,
} from "../lib/constants";

export default function JsonLd() {
  const organizationId = `${SITE_URL}/#organization`;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: COMPANY_NAME,
    alternateName: ["에이유디자인", "BroCPN", "au-designlab", "au-designlab.com"],
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.png`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Korean",
      url: TELEGRAM_URL,
      areaServed: "KR",
    },
    sameAs: [TELEGRAM_URL],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    sameAs: [TELEGRAM_URL],
    image: `${SITE_URL}/favicon.png`,
    priceRange: "₩250,000–₩450,000",
    areaServed: { "@type": "Country", name: "대한민국" },
    knowsAbout: [
      "오피가이드 배너제작",
      "오피가이드 배너 제작",
      "오피가이드 프로필 제작",
      "오피스타 배너제작",
      "오피스타 배너 제작",
      "오피스타 프로필 제작",
      "오피뷰 배너 제작",
      "오피뷰 배너제작",
      "오피뷰 프로필 제작",
      "외로운밤 배너 제작",
      "외로운밤 배너제작",
      "외로운밤 프로필 제작",
      "오피아트 배너 제작",
      "오피아트 배너제작",
      "오피아트 프로필 제작",
      "오피스북 배너 제작",
      "오피스북 배너제작",
      "오피스북 프로필 제작",
      "밤공유 배너 제작",
      "밤공유 배너제작",
      "밤공유 프로필 제작",
      "대밤 배너 제작",
      "대밤 배너제작",
      "대밤 프로필 제작",
      "마사지퀸 배너 제작",
      "마사지퀸 배너제작",
      "마사지퀸 프로필 제작",
      "인천달리기 배너 제작",
      "부산달리기 배너 제작",
      "퀸알바 배너 제작",
      "퀸알바 프로필 제작",
      "부달 배너",
      "부달 프로필 제작",
      "인천달리기 프로필 제작",
      "부산달리기 프로필 제작",
      "홍보 플랫폼 배너·프로필 디자인",
      "업소 배너 제작",
      "업소 프로필 제작",
      "스웨디시 배너 제작",
      "메인 프로필 제작",
      "출근부 제작",
      "맞춤형 배너",
      "플랫폼 규격 배너",
      "등록용 배너 제작",
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "오피가이드 배너제작·오피가이드 프로필 제작·오피스타·오피뷰·퀸알바 등 배너·프로필 제작",
    description: SITE_DESCRIPTION,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "대한민국" },
    serviceType: "홍보·지역 플랫폼용 배너 제작·프로필 제작·맞춤 디자인",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ["에이유디자인", "au-designlab"],
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "ko",
    publisher: { "@id": organizationId },
    potentialAction: {
      "@type": "ContactAction",
      name: "텔레그램으로 배너·프로필 제작 문의",
      target: TELEGRAM_URL,
      contactMethod: "https://schema.org/InstantMessaging",
    },
  };

  const breadcrumbHome = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: SITE_URL,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "오피가이드 배너제작·오피가이드 프로필 제작 문의는 어떻게 하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "텔레그램 @BroCPN으로 연락해 주시면 됩니다. 용도·플랫폼·수량을 알려주시면 견적과 제작 기간을 안내해 드립니다.",
        },
      },
      {
        "@type": "Question",
        name: "배너 제작 기간은 얼마나 걸리나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "시안 확정 후 제작·납품까지 코스에 따라 다릅니다. 급한 경우 텔레그램으로 먼저 일정을 문의해 주세요.",
        },
      },
      {
        "@type": "Question",
        name: "어떤 플랫폼용 배너를 제작하나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "오피가이드 배너제작·오피가이드 배너 제작을 비롯해 오피스타, 오피뷰, 외로운밤, 오피아트, 오피스북, 밤공유, 부달(부산유흥), 대밤(대구유흥), 마사지퀸, 퀸알바, 인천달리기, 부산달리기 등 홍보·지역 플랫폼에 등록할 배너 제작·프로필 제작을 맞춤 진행합니다. 제작 가능 플랫폼은 사이트 내 배너 제작 가이드·배너·프로필 제작 플랫폼 페이지에서 확인할 수 있습니다.",
        },
      },
      {
        "@type": "Question",
        name: "10만원 할인 이벤트와 퀄리티는 어떤가요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "에이유디자인은 10만원 할인 이벤트를 진행 중이며, 어디보다 완성도 높은 퀄리티로 배너·프로필을 제작해 드립니다. 견적 문의 시 할인 적용 가격을 안내해 드리니 텔레그램 @BroCPN으로 문의해 주세요.",
        },
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "오피가이드 배너제작·오피가이드 프로필 제작 신청 방법",
    description: "오피가이드 배너 제작·오피가이드 프로필 제작을 비롯한 플랫폼용 배너 제작 의뢰 절차입니다.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "텔레그램으로 문의",
        text: "@BroCPN으로 용도·크기·수량을 알려주시면 견적을 안내해 드립니다.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "코스 선택 및 견적 확인",
        text: "기본/맞춤/대량 할인 등 코스를 선택하면 가격·제작 기간을 안내받습니다. 10만원 할인 이벤트 적용 시 더 유리한 가격으로 안내합니다.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "시안 확인 및 수정",
        text: "디자인 시안을 받고 수정 요청을 텔레그램으로 보내면 반영 후 다시 안내받습니다.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "제작 및 납품",
        text: "시안 확정 후 제작에 들어가며, 납품 일정은 텔레그램으로 안내합니다.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbHome) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
    </>
  );
}
