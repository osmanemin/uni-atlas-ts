import React from "react";
import findAll from "../api/findAll";

import Universities from "../components/templates/Universities/Universities";
import UniversitiesContext from "../storage/UniversitiesContext";

export default function UniversityPage({ universities }: UniversitiesPageProps) {
  return (
    <UniversitiesContext.Provider value={{ universities }}>
      <Universities />
    </UniversitiesContext.Provider>
  );
}

export async function getStaticProps() {
  const universities: University[] = [];
  await findAll({data: universities, collectionName: "universities", sort: {name: "1"}})
  return {
    props: { universities },
  };
}
