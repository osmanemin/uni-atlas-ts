import React, { useContext } from "react";
import { Context } from "../../../storage/Context";
import FilterSelect from "../../atoms/FilterSelect";

import styles from "./analyzeFilter.module.scss";

export default function AnalyzeFilter(): JSX.Element {
  const context = useContext(Context);
  return (
    <div className={styles.container}>
      <p className={styles.choiceText}>
        Lütfen istediğiniz raporla ilgili kriterleri doldurun.
      </p>

      <FilterSelect
        selectClass={styles.filterSelect}
        placeholder="Bölüm seçiniz"
        options={context.reports}
        first={true}
      />

      {context.maxSelectedDepartmentCount == 2 && (
        <FilterSelect
          selectClass={styles.filterSelect}
          placeholder="Bölüm seçiniz"
          options={context.reports}
        />
      )}

      <FilterSelect
        selectClass={styles.filterSelect}
        placeholder="Puan seçiniz"
        options={context.reports}
      />
    </div>
  );
}
