import React from "react";
import findAll from "../../api/findAll";
import findOne from "../../api/findOne";

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
  const universities: UniversityDetail[] = [];
  await findAll({ data: universities, collectionName: "universities" });
  const paths = universities.map((uni) => ({
    params: {
      uni: uni.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(params: { params: { uni: string } }) {
  const universities: UniversityDetail = await findOne({
    collectionName: "universities",
    query: { slug: params.params.uni },
  });

  const students: StudentOfUniversity[] = [];
  await findAll({
    data: students,
    collectionName: "students",
    query: { slug: params.params.uni },
  });

  const programs: ProgramOfUniversity = await findOne({
    collectionName: "programs",
    query: { slug: params.params.uni },
  });

  const academicians: AcademicianOfUniversity = await findOne({
    collectionName: "academicians",
    query: { slug: params.params.uni },
  });

  const university: University = {
    ...universities,
    programs: programs,
    students,
    academicians,
  };
  return {
    props: { university },
  };
}
