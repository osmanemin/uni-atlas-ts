import React from "react";

import { Head } from "../../components/molecules/Head";
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
  const res = await fetch(`${process.env.SERVICE_HOST}/universities`);
  const unies: University[] = await res.json();

  const paths = unies.map((uni) => ({
    params: {
      uni: uni.slug,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(params: {params: { uni: string }}) {
  const res = await fetch(
    `${process.env.SERVICE_HOST}/universities?slug=${params.params.uni}`
  );
  const university: University = await res.json();
  return {
    props: { university },
  };
}
