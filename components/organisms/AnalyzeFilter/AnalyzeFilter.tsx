import React, { useContext } from "react";

import styles from "./analyzeFilter.module.scss";

import FilterInput from "../../molecules/FilterInput";
import { Context } from "../../../storage/Context";

export default function AnalyzeFilter(): JSX.Element {
  const context = useContext(Context);
  return (
    <div className={styles.container}>
      <p className={styles.choiceText}>
        Lütfen istediğiniz raporla ilgili kriterleri doldurun.
      </p>

      <FilterInput
        inputClass={styles.filterInput}
        placeholder="Bölüm seçiniz"
        options={context.reports.data}
        first={true}
      />

      {context.maxSelectedDepartmentCount == 2 && (
        <FilterInput
          inputClass={styles.filterInput}
          placeholder="Bölüm seçiniz"
          options={context.reports.data}
        />
      )}

      <FilterInput
        inputClass={styles.filterInput}
        placeholder="Puan seçiniz"
        options={context.reports.data}
      />
    </div>
  );
}
