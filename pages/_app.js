import "../styles/globals.css";
import Head from "next/head";

import AppLayout from "../app/core/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
