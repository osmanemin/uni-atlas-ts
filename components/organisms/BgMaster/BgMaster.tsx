import React from "react";
import cn from "classnames";
import Image from "next/image";

import styles from "./bgMaster.module.scss";

type BgMarketProps = {
  classBg: string;
  bgImage: string;
};

export default function BgMarket({
  classBg,
  bgImage,
}: BgMarketProps): JSX.Element {
  return (
    <div className={styles.bgWrapper}>
      <Image
        layout="fill"
        src={bgImage}
        priority
        className={cn(styles.bgImage, classBg)}
      ></Image>
      <div className={styles.linearGradient}></div>
    </div>
  );
}
