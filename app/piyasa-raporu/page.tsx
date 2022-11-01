import React from "react";
import findAll from "../../api/findAll";
import MarketReport from "../../components/templates/MarketReport";
import ReportContext from "../../storage/ReportContext";

export default async function Report() {
  const reports: Report[] = await getData();
  return (
    <ReportContext.Provider value={{ reports }}>
      <MarketReport />
    </ReportContext.Provider>
  );
}

async function getData() {
  const reports: Report[] = [];
  await findAll({
    data: reports,
    collectionName: "reports",
    sort: { title: "1" },
  });
  return reports;
}
