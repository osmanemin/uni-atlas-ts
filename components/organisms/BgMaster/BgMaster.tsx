import React from "react";
import styles from "./bgMaster.module.scss";
import cn from "classnames";

type BgMarketProps = {
  classBg: string;
};

export default function BgMarket({ classBg }: BgMarketProps): JSX.Element {
  return (
    <div className={cn(styles.bgImage, classBg)}>
      <div className={styles.linearGradient}></div>
    </div>
  );
}
