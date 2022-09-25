import React, { useState } from "react";

import MarketReport from "../components/templates/MarketReport/MarketReport";
import { Context } from "../storage/Context";

type PiyasaReportProps = {
  reports: any;
};

export default function PiyasaReport({ reports }: any) {
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
  const res = await fetch(
    `https://uni-atlas-data.vercel.app/market-report-data.json`
  );
  const reports = await res.json();

  return {
    props: { reports },
  };
}
