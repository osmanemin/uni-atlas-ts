import React from "react";

import Universities from "../components/templates/Universities/Universities";
import { Context } from "../storage/Context";

export default function Universiteler({ unies }: any) {
  return (
    <Context.Provider value={{unies}}>
      <Universities />
    </Context.Provider>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://uni-atlas-data.vercel.app/unies.json`);
  const unies = await res.json();

  return {
    props: { unies }
  };
}
