import React from "react";
import findAll from "../api/findAll";

import Universities from "../components/templates/Universities/Universities";

export default function UniversityPage({
  universities,
}: UniversitiesPageProps) {
  return <Universities universities={universities} />;
}

export async function getStaticProps() {
  const universities: University[] = [];
  await findAll({
    data: universities,
    collectionName: "universities",
    sort: { name: "1" },
  });
  return {
    props: { universities },
  };
}
