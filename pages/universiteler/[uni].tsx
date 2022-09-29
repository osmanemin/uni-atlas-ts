import React from "react";
import findData from "../../api/fiind";

import Head from "../../components/molecules/Head";
import UniversityDetail from "../../components/templates/UniversityDetail/UniversityDetail";
import { UniversityContext } from "../../storage/Context";

export default function Uni(university: University) {
  return (
    <UniversityContext.Provider value={university}>
      <Head />
      <UniversityDetail />
    </UniversityContext.Provider>
  );
}

export async function getStaticPaths() {
  const universities: University[] = [];
  await findData({data: universities, collectionName: "universities"})
  const paths = universities.map((uni) => ({
    params: {
      uni: uni.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(params: {params: { uni: string }}) {
  const universities: University[] = [];
  await findData({data: universities, collectionName: "universities", query: {slug: params.params.uni}})
  const university: University = universities[0];
  return {
    props: { university },
  };
}
