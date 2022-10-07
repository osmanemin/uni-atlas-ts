import React from "react";
import cn from "classnames";
import styles from "./columnOfGraph.module.scss";

type ColumnOfGraphProps = {
  percent: string;
  comparePercent?: string;
  title?: string;
};

export default function ColumnOfGraph({
  percent,
  comparePercent,
  title,
}: ColumnOfGraphProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.columnWrapper}>
        <div className={styles.column} style={{ height: `${percent}%` }}>
          {percent !== "0" && <p className={styles.rate}>{`%${percent.replace(".", ",").replace(",0","")}`}</p>}
        </div>
        {comparePercent && (
          <div
            className={cn(styles.column, styles.columnRed)}
            style={{ height: `${comparePercent}%` }}
          >
            {comparePercent !== "0" && <p className={styles.rate}>{`%${comparePercent.replace(".", ",").replace(",0","")}`}</p>}
          </div>
        )}
      </div>
        <p className={styles.title}>{title}</p>
    </div>
  );
}
