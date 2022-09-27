import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=optional" />
        <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=optional" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
