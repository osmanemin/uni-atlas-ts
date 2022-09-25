import React from "react";
import Head from "next/head";

export default function Header({ title = "Uni Atlas" }): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Dancing+Script"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Üniversiteleri karşılaştırmanın en iyi yolu"
      ></meta>
    </Head>
  );
}
