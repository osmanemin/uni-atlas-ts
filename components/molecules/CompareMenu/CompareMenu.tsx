import React, { useState } from "react";

import styles from "./compareMenu.module.scss";

type CompareMenu = {
  setMaxSelectedDepartmentCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function CompareMenu({
  setMaxSelectedDepartmentCount,
}: CompareMenu): JSX.Element {
  const [margin, setMargin] = useState("10px");
  const [textColorOne, setTextColorOne] = useState("white");
  const [textColorTwo, setTextColorTwo] = useState("black");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div style={{ left: margin }} className={styles.titleBox} />
        <h3
          onClick={() => {
            setMargin("10px");
            setTextColorTwo("black");
            setTextColorOne("white");
            setMaxSelectedDepartmentCount(1);
          }}
          style={{ color: textColorOne }}
          className={styles.title}
        >
          Bölüm Analizi
        </h3>
        <h3
          onClick={() => {
            setMargin("calc(50% + 5px)");
            setTextColorTwo("white");
            setTextColorOne("black");
            setMaxSelectedDepartmentCount(2);
          }}
          style={{ color: textColorTwo }}
          className={styles.title}
        >
          Karşılaştır
        </h3>
      </div>
    </div>
  );
}
