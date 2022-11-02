import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./universityCard.module.scss";

type UniversityCard = {
  src: string;
  name: string;
  city: string;
  slug: string;
};
export default function UniversityCard({
  src,
  name,
  city,
  slug,
}: UniversityCard): JSX.Element {
  return (
    <Link className={styles.container} href="/universiteler/[universityDetail]" as={`/universiteler/${slug}`}>
        <Image src={src} width={140} height={140} alt={name} />
        <h2 className={styles.name}>{name}</h2>
        <h4 className={styles.city}>{city}</h4>
        <div className={styles.detailButton}>İncele</div>
    </Link>
  );
}
