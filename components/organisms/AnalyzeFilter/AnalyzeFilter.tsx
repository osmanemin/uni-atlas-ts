import React, { useContext } from "react";
import { Context } from "../../../storage/Context";
import FilterSelect from "../../atoms/FilterSelect";

import styles from "./analyzeFilter.module.scss";

const types = [
  {title: "İş Bulma Süresi", value: "lEmploymentTimeDistribution"},
  {title: "Başlangıç Ücreti", value: "lPriceDistribution"},
  {title: "Nitelik Uyuşmazlığı", value: "lQualityGeneral"},
  // {title: "Kamuda İşe Yerleşme Oranı", value: "lPublicDistribution"},
  {title: "Firme Büyüklüğü Dağılımı", value: "lCompanyDistribution"},
  // {title: "Sektör Bazında Dağılım", value: "lSectorDistribution"},
];

export default function AnalyzeFilter(): JSX.Element {
  const context = useContext(Context);
  const handleChangeDepartment = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    context.setSelectedDepartments((prev: any) => {
      return {
        ...context.selectedDepartments,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    context.setSelectedDepartments((prev: any) => {
      return {
        ...context.selectedDepartments,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className={styles.container}>
      <p className={styles.choiceText}>
        Lütfen istediğiniz raporla ilgili kriterleri doldurun.
      </p>

      <FilterSelect
        onChange={handleChangeDepartment}
        selectName="first"
        selectClass={styles.filterSelect}
        placeholder="Bölüm seçiniz"
        options={context.reports}
      />

      {context.maxSelectedDepartmentCount == 2 && (
        <FilterSelect
          onChange={handleChangeDepartment}
          selectName="second"
          selectClass={styles.filterSelect}
          placeholder="Bölüm seçiniz"
          options={context.reports}
        />
      )}

      <FilterSelect
        onChange={handleChangeType}
        selectName="indicatorType"
        selectClass={styles.filterSelect}
        placeholder="Gösterge seçiniz"
        options={types}
      />
    </div>
  );
}
