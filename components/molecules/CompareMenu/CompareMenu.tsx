import React, { useState, useContext } from "react";

import styles from "./compareMenu.module.scss";

import { Context } from "../../../storage/Context";

export default function CompareMenu(): JSX.Element {
  const context = useContext(Context);
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
            context.setMaxSelectedDepartmentCount(1);
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
            context.setMaxSelectedDepartmentCount(2);
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
