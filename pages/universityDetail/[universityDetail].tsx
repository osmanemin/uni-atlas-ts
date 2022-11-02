import React from "react";
import findAll from "../../api/findAll";
import findOne from "../../api/findOne";

import Head from "../../components/molecules/Head";
import UniversityDetail from "../../components/templates/UniversityDetail/UniversityDetail";
import UniversityDetailContext from "../../storage/UniversityDetailContext";

export default function UniversityDetailPage({ university }: UniversityPageProps) {
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
      universityDetail: uni.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(params: { params: { universityDetail: string } }) {
  const universities: UniversityDetail = await findOne({
    collectionName: "universities",
    query: { slug: params.params.universityDetail },
  });

  const social: SocialOfUniversity = await findOne({
    collectionName: "social",
    query: { slug: params.params.universityDetail },
  });

  const socialOpportunities: SocialOpportunities = await findOne({
    collectionName: "socialOpportunities",
    query: { slug: params.params.universityDetail },
  });

  const students: StudentOfUniversity = await findOne({
    collectionName: "students",
    query: { slug: params.params.universityDetail },
  });

  const programs: ProgramOfUniversity = await findOne({
    collectionName: "programs",
    query: { slug: params.params.universityDetail },
  });

  const academicians: AcademicianOfUniversity = await findOne({
    collectionName: "academicians",
    query: { slug: params.params.universityDetail },
  });

  const university: University = {
    ...universities,
    programs: programs,
    students,
    academicians,
    social,
    socialOpportunities,
  };
  return {
    props: { university },
  };
}
