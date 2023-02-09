import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-wrap-balancer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  );
}

export default MyApp;
