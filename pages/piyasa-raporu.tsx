import React, { useState } from "react";

import MarketReport from "../components/templates/MarketReport/MarketReport";
import { Context } from "../storage/Context";

export default function PiyasaReport( reports: Report[]) {
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
  const res = await fetch(`${process.env.SERVICE_HOST}/reports`);
  const reports: Report[] = await res.json();

  return {
    props: { reports },
  };
}
