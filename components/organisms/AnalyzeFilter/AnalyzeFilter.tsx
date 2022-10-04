import React, { useContext } from "react";
import { Context } from "../../../storage/Context";
import FilterSelect from "../../atoms/FilterSelect";

import styles from "./analyzeFilter.module.scss";

const types = [
  {title: "İş Bulma Süresi", value: "EmploymentTimeDistribution"},
  {title: "Başlangıç Ücreti", value: "priceDistribution"},
  // {title: "Nitelik Uyuşmazlığı", value: ""},
  {title: "Kamuda İşe Yerleşme Oranı", value: "publicDistribution"},
  {title: "Firme Büyüklüğü Dağılımı", value: "companyDistribution"},
  {title: "Sektör Bazında Dağılım", value: "sectorDistribution"},
];

export default function AnalyzeFilter(): JSX.Element {
  const context = useContext(Context);
  console.log("context", context);

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
