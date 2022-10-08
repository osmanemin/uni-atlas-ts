import React from "react";
import FilterSelect from "../../atoms/FilterSelect";

import styles from "./analyzeFilter.module.scss";

const types = [
  { title: "İş Bulma Süresi", value: "lEmploymentTimeDistribution" },
  { title: "Başlangıç Ücreti", value: "lPriceDistribution" },
  { title: "Nitelik Uyuşmazlığı", value: "lQualityGeneral" },
  { title: "Firme Büyüklüğü Dağılımı", value: "lCompanyDistribution" },
  // {title: "Kamuda İşe Yerleşme Oranı", value: "lPublicDistribution"},
  // {title: "Sektör Bazında Dağılım", value: "lSectorDistribution"},
];

type AnalyzeFilter = {
  setSelectedDepartments: React.Dispatch<
    React.SetStateAction<{
      first: number;
      second: number;
      indicatorType: Indicator;
    }>
  >;
  selectedDepartments: {
    first: number;
    second: number;
    indicatorType: Indicator;
  };
  maxSelectedDepartmentCount: number;
  reports: Report[];
};

export default function AnalyzeFilter({
  selectedDepartments,
  setSelectedDepartments,
  maxSelectedDepartmentCount,
  reports,
}: AnalyzeFilter): JSX.Element {
  const handleChangeDepartment = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDepartments((prev: any) => {
      return {
        ...prev,
        [event.target.name]: Number(event.target.value),
      };
    });
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartments((prev: any) => {
      return {
        ...prev,
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
        options={reports}
      />

      {maxSelectedDepartmentCount == 2 && (
        <FilterSelect
          selected={selectedDepartments.second}
          onChange={handleChangeDepartment}
          selectName="second"
          selectClass={styles.filterSelect}
          placeholder="Bölüm seçiniz"
          options={reports}
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
