import React from "react";

import Header from "../../components/molecules/Head";
import UniversityDetail from "../../components/templates/UniversityDetail/UniversityDetail";
import { UniversityContext } from "../../storage/Context";

export default function Uni({ university }) {
  return (
    <UniversityContext.Provider value={university}>
      <Header />
      <UniversityDetail />
    </UniversityContext.Provider>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://uni-atlas-data.vercel.app/unies.json`);
  const unies = await res.json();

  const paths = unies.map((uni) => ({
    params: { uni: uni.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(params) {
  const res = await fetch(`https://uni-atlas-data.vercel.app/unies.json`);
  const unies = await res.json();
  let university;
  unies.map((uni) => {
    if (uni.slug === params.params.uni) {
      university = uni;
    }
  });
  return {
    props: { university },
  };
}
