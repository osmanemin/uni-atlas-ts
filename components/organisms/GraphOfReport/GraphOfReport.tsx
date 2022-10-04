import React from "react";

import styles from "./graphOfReport.module.scss";

import ColumnOfGraph from "../../molecules/ColumnOfGraph";

type GraphOfReportProps = {
  data: any;
  indicatorType: string;
};
export default function GraphOfReport({
  data,
  indicatorType,
}: GraphOfReportProps): JSX.Element | null {
  console.log('indicatorType', indicatorType)
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.verticalRow}></div>
        <div className={styles.horizontalRow25}>
          <p>25</p>
        </div>
        <div className={styles.horizontalRow50}>
          <p>50</p>
        </div>
        <div className={styles.horizontalRow75}>
          <p>75</p>
        </div>
        <div className={styles.horizontalRow100}>
          <p>100</p>
        </div>
        <div className={styles.horizontalRow}>
          <p>0</p>
        </div>
      </div>
      <div className={styles.content}>
        {((data && data[`${indicatorType}Rate`]) || ["0", "0", "0", "0"]).map(
          (rate: any, index: number) => (
            <ColumnOfGraph
              percent={rate}
              key={index}
              title={
                (data && data[`${indicatorType}Title`][index]) || ""
              }
            />
          )
        )}
      </div>
    </div>
  );
}
