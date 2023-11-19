import type { AppProps } from "next/app";
import "../styles/global.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5R7EBQVFV6" />

      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5R7EBQVFV6');
  `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
