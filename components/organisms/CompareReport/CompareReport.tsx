import React, { useContext, useState } from "react";
import ReportContext from "../../../storage/ReportContext";
import CompareMenu from "../../molecules/CompareMenu";
import AnalyzeFilter from "../AnalyzeFilter";
import GraphOfReport from "../GraphOfReport";

import styles from "./compareReport.module.scss";

export default function CompareReport(): JSX.Element {
  const context = useContext(ReportContext);

  const [selectedDepartments, setSelectedDepartments] = useState({
    first: -1,
    second: -1,
    indicatorType: "" as Indicator,
  });

  const [maxSelectedDepartmentCount, setMaxSelectedDepartmentCount] =
    useState(1);

  return (
    <>
      <CompareMenu
        setMaxSelectedDepartmentCount={setMaxSelectedDepartmentCount}
      />
      <div className={styles.flexCenter}>
        <img
          className={styles.img}
          src="/analyze.jpg"
          alt="bölüm karşılaştırma"
        />
        <AnalyzeFilter
        selectedDepartments={selectedDepartments}
          setSelectedDepartments={setSelectedDepartments}
          maxSelectedDepartmentCount={maxSelectedDepartmentCount}
          reports={context.reports}
        />
      </div>
      <GraphOfReport
        data={context.reports[selectedDepartments.first]}
        compareData={maxSelectedDepartmentCount === 2 ? context.reports[selectedDepartments.second] : null}
        count={maxSelectedDepartmentCount}
        indicatorType={selectedDepartments.indicatorType}
      />
    </>
  );
}
