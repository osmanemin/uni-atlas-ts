import React from "react";
import Head from "next/head";

export default function Header({ title = "Uni Atlas" }): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Üniversiteleri karşılaştırmanın en iyi yolu"
      ></meta>
    </Head>
  );
}
