import React, { useState } from "react";
import findAll from "../api/findAll";

import MarketReport from "../components/templates/MarketReport/MarketReport";
import ReportContext from "../storage/ReportContext";

export default function Report({ reports }: ReportPageProps) {
  return (
    <ReportContext.Provider value={{ reports }}>
      <MarketReport />
    </ReportContext.Provider>
  );
}

export async function getStaticProps() {
  const reports: Report[] = [];
  await findAll({
    data: reports,
    collectionName: "reports",
    sort: { title: "1" },
  });
  return {
    props: { reports: reports },
  };
}
