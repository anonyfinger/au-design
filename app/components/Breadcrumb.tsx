import Link from "next/link";

export type BreadcrumbItem =
  | { label: string; href: string }
  | { label: string; href?: undefined };

type Props = {
  items: BreadcrumbItem[];
};

/**
 * 서브페이지 상단 브레드크럼. SEO·사용자 경로 표시.
 * 사용: <Breadcrumb items={[{ label: "홈", href: "/" }, { label: "가이드" }]} />
 */
export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="guideBreadcrumb" aria-label="breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="guideBreadcrumbSep">/</span>}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
