import React, { useState } from "react";
import findData from "../api/fiind";

import MarketReport from "../components/templates/MarketReport/MarketReport";
import { Context } from "../storage/Context";

export default function PiyasaReport(reports: Report[]) {
  const [selectedDepartments, setSelectedDepartments] = useState({
    first: 0,
    second: "",
  });

  const [maxSelectedDepartmentCount, setMaxSelectedDepartmentCount] =
    useState(1);

  return (
    <Context.Provider
      value={{
        reports,
        selectedDepartments,
        setSelectedDepartments,
        maxSelectedDepartmentCount,
        setMaxSelectedDepartmentCount,
      }}
    >
      <MarketReport />
    </Context.Provider>
  );
}

export async function getStaticProps() {
  const reports: Report[] = [];
  await findData({ data: reports, collectionName: "reports" });
  return {
    props: { reports },
  };
}
