import * as React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";

const AppWrapper = ({ Component, pageProps, router }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} key={router.route} />
    </React.Fragment>
  );
};

export default AppWrapper;
