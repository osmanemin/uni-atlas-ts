import React, { useState } from "react";
import findAll from "../api/findAll";

import MarketReport from "../components/templates/MarketReport/MarketReport";
import { Context } from "../storage/Context";

export default function PiyasaReport({reports}: {reports :Report[]}) {
  const [selectedDepartments, setSelectedDepartments] = useState({
    first: -1,
    second: -1,
    indicatorType: ""
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
  await findAll({ data: reports, collectionName: "reports", sort: {title: "1"} });
  return {
    props: {reports: reports} ,
  };
}
