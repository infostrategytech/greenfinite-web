import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { makeStyles } from "@material-ui/core/styles";
import AppLayout from "../app/core/Layout";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function MyApp({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState)
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = React.useState(10);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    setOpen(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setOpen(false);
  });

  const HandleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Head>
        {/* <title>iRecharge</title>
        <meta name="description" content="With iRecharge, you can pay bills easily, power your home, subscribe for cable tv, data & airtime recharge" /> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        {/* <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
          integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
          crossorigin="anonymous"
        ></script> */}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

//withRedux wrapper that passes the store to the App Component
export default MyApp;
// export default withRedux(makeStore)(MyApp);
