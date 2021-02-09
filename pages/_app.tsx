import * as React from "react";
import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { AppProps } from "next/app";

const AppWrapper = ({ Component, pageProps, router }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBody>
        <Component {...pageProps} key={router.route} />
      </AppBody>
    </React.Fragment>
  );
};

const AppBody: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 px-2 py-3 bg-white shadow">
        <div className="max-w-2xl container">
          <Link href="/" passHref>
            <a className="p-2 border-2 rounded">KidsCompare</a>
          </Link>
        </div>
      </header>
      <div className="max-w-2xl container p-2">{children}</div>
    </div>
  );
};

export default AppWrapper;
