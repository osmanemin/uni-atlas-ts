import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Dancing+Script&display=optional"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
