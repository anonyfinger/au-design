"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../landing.module.scss";

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
      className={`${styles.worksPageImageWrap} ${loaded ? styles.worksPageImageWrapLoaded : ""}`}
    >
      <a
        href={src}
        rel="noindex nofollow"
        aria-hidden="true"
        tabIndex={-1}
        className={styles.worksPageImageLink}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={wide ? "(max-width: 768px) 100vw, 560px" : "(max-width: 768px) 50vw, 280px"}
          className={styles.worksPageImage}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </a>
    </div>
  );
}
