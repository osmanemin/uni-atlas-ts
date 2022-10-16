import React from "react";
import findAll from "../../api/findAll";
import findOne from "../../api/findOne";

import Head from "../../components/molecules/Head";
import UniversityDetail from "../../components/templates/UniversityDetail/UniversityDetail";
import UniversityDetailContext from "../../storage/UniversityDetailContext";

export default function Uni({university}: UniversityPageProps) {
  return (
    <UniversityDetailContext.Provider value={university}>
      <Head title={university.name} />
      <UniversityDetail />
    </UniversityDetailContext.Provider>
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

  const social: SocialOfUniversities = await findOne({
    collectionName: "social",
    query: { slug: params.params.uni },
  });

  const students: StudentOfUniversity = await findOne({
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
    social
  };
  return {
    props: { university },
  };
}
