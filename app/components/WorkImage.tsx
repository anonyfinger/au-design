"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  wide?: boolean;
  priority?: boolean;
};

export default function WorkImage({ src, alt, wide, priority }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`worksPageImageWrap ${loaded ? "worksPageImageWrapLoaded" : ""}`}
    >
      <a
        href={src}
        rel="noindex nofollow"
        aria-hidden="true"
        tabIndex={-1}
        className="worksPageImageLink"
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
      </a>
    </div>
  );
}
