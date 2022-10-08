import React from "react";

import styles from "./graphOfReport.module.scss";

import ColumnOfGraph from "../../molecules/ColumnOfGraph";

type GraphOfReportProps = {
  data: any;
  compareData: any;
  count: any;
  indicatorType: Indicator;
};

const indicators = {
  lQualityGeneralTitle: [
    "Niteliklerine Uygun İşlerde Çalışanlar",
    "Düşük Nitelik Uyuşmazlığı",
    "Orta Derece Nitelik Uyuşmazlığı",
    "Yüksek Nitelik Uyuşmazlığı",
  ],
  lPriceDistributionTitle: [
    "4250 ₺-5999 ₺",
    "6000 ₺-7999 ₺",
    "8000 ₺-9999 ₺",
    "10000 ₺ ve üzeri",
  ],
  lEmploymentTimeDistributionTitle: [
    "Mezun Olmadan Önce*",
    "0-6 Ay",
    "6-12 Ay",
    "12+ Ay",
  ],
  lCompanyDistributionTitle: [
    "Mikro Ölçekli Firma (1-9 Kişi)",
    "Küçük Ölçekli Firma (10-49 Kişi)",
    "Orta Ölçekli Firma (50-249 Kişi)",
    "Büyük Ölçekli Firma (250+ Kişi)",
  ],
};

export default function GraphOfReport({
  data,
  compareData,
  indicatorType,
  count,
}: GraphOfReportProps): JSX.Element {
  const initialRates = ["0", "0", "0", "0"];
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
        {(
          (data && indicatorType && data[`${indicatorType}Rate`]) ||
          initialRates
        ).map((rate: any, index: number) => (
          <ColumnOfGraph
            percent={rate}
            comparePercent={
              (compareData &&
                compareData[`${indicatorType}Rate`] &&
                compareData[`${indicatorType}Rate`][index]) ||
              (count === 2 && "0")
            }
            key={index}
            title={
              (data && indicatorType && data[`${indicatorType}Title`]
                ? data[`${indicatorType}Title`][index]
                : indicators[`${indicatorType}Title`]
                ? indicators[`${indicatorType}Title`][index]
                : "") || ""
            }
          />
        ))}
      </div>
    </div>
  );
}
