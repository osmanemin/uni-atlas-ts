import React from "react";

import styles from "./uniFinder.module.scss";

import FilterInput from "../../molecules/FilterInput";
import * as Icons from "../../atoms/icons";

export default function UniversiteSihirbazi(): JSX.Element {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
  return (
    <div className={styles.container}>
      <Icons.Sihirbaz />

      <div className={styles.line}>
        {array.map((item) => (
          <div className={styles.lineBox} key={item}></div>
        ))}
      </div>

      <FilterInput inputClass={styles.filterInput} placeholder="Şehir seçiniz" />
      <FilterInput inputClass={styles.filterInput} placeholder="Bölüm seçiniz" />
      <FilterInput inputClass={styles.filterInput} placeholder="Puan seçiniz" />
    </div>
  );
}
