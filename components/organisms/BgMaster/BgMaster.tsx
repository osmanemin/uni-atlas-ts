import React from "react";
import cn from "classnames";
import Image from "next/image";

import styles from "./bgMaster.module.scss";

type BgMasterProps = {
  classBg: string;
  bgImage: string;
  alt: string;
};

export default function BgMaster({
  classBg,
  bgImage,
  alt,
}: BgMasterProps): JSX.Element {
  return (
    <div className={styles.bgWrapper}>
      <Image
        fill
        src={bgImage}
        alt={alt}
        priority
        className={cn(styles.bgImage, classBg)}
      ></Image>
      <div className={styles.linearGradient}></div>
    </div>
  );
}
