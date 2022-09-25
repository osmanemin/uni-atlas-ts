import React from "react";

import Universities from "../components/templates/Universities/Universities";
import { Context } from "../storage/Context";

type UniversitelerProps = {
  unies: University[]
}

export default function Universiteler({unies}: UniversitelerProps) {
  return (
    <Context.Provider value={{ unies }}>
      <Universities />
    </Context.Provider>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.SERVICE_HOST}/universities`);
  const unies: University = await res.json();

  return {
    props: {unies},
  };
}
