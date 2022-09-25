import React from "react";

import styles from "./columnOfGraph.module.scss";

type ColumnOfGraphProps = {
  percent: string;
  title: string;
};

export default function ColumnOfGraph({
  percent,
  title,
}: ColumnOfGraphProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.column} style={{ height: `${percent}%` }}>
        <p className={styles.rate}>{`%${percent.replace(".", ",")}`}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
