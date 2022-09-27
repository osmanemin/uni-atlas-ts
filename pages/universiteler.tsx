import React from "react";
import findData from "../api/fiind";

import Universities from "../components/templates/Universities/Universities";
import { Context } from "../storage/Context";

type UniversitelerProps = {
  universities: University[];
};

export default function Universitelerr({ universities }: UniversitelerProps) {
  return (
    <Context.Provider value={{ universities }}>
      <Universities />
    </Context.Provider>
  );
}

export async function getStaticProps() {
  const universities: University[] = [];
  await findData({data: universities, collectionName: "universities", sort: {name: "1"}})
  return {
    props: { universities },
  };
}
