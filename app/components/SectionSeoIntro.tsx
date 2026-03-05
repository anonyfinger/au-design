import Link from "next/link";
import styles from "../landing.module.scss";

/**
 * SEO용 소개 문단. 검색엔진 수집용 키워드·내부 링크 보강.
 */
export default function SectionSeoIntro() {
  return (
    <section
      className={styles.sectionSeoIntro}
      aria-label="서비스 소개"
    >
      <div className={styles.container}>
        <p className={styles.sectionSeoIntroText}>
          <strong>에이유디자인(au-designlab)</strong>은 <strong>오피가이드 배너제작·오피가이드 배너 제작·오피가이드 프로필 제작</strong>을 핵심으로,
          오피스타, 오피뷰, 외로운밤, 오피아트, 오피스북, 밤공유, 대밤, 마사지퀸, 퀸알바, 인천달리기, 부산달리기, 부달(부산유흥) 등
          업소·홍보·지역 플랫폼에 등록할 <strong>배너 제작·프로필 제작</strong>을 맞춤 진행합니다.
          어디보다 완성도 높은 퀄리티를 제공하며, <strong>20% 할인 이벤트</strong>로 더 유리한 가격에 이용할 수 있습니다.
          오피가이드 배너제작은 플랫폼 규격에 맞춘 메인 프로필·업체 소개·가격표·출근부 8장 패키지로 진행하며, 오피스타·퀸알바·오피뷰 등 타 플랫폼 배너·프로필 제작도 함께 의뢰 가능합니다.
          플랫폼별·지역별 키워드 정리는{" "}
          <Link href="/keywords" className={styles.sectionSeoIntroLink}>
            키워드별 보기
          </Link>
          {" "}에서, 플랫폼별 설명은{" "}
          <Link href="/guide" className={styles.sectionSeoIntroLink}>
            배너 제작 가이드
          </Link>
          {" "}에서, 제작 가능 플랫폼 목록은{" "}
          <Link href="/platforms" className={styles.sectionSeoIntroLink}>
            배너·프로필 제작 플랫폼
          </Link>
          {" "}에서 확인할 수 있으며, 패키지별 견적·시안 문의는 텔레그램 @AuDesign으로 부담 없이 연락해 주세요.
        </p>
      </div>
    </section>
  );
}
