import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
// import { useStore } from '../redux/store';
import { createWrapper } from "next-redux-wrapper";
import Router from "next/router";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AppLayout from "../components/Layout";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { store } from "../redux/store";
import Spinner from "../components/Spinner";
import Backdrop from "@material-ui/core/Backdrop";
import NProgress from "nprogress";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(10);

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
        <title>Greenfinite</title>
        <meta
          name="description"
          content="Producing healthy sweeteners from date fruits"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />

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
        <Provider store={store}>
          <CssBaseline />
          <PersistGate loading={null} persistor={persistor}>
            <AppLayout>
              {open && (
                <Backdrop
                  className={classes.backdrop}
                  open={open}
                  onClick={HandleClose}
                >
                  <Spinner />
                </Backdrop>
              )}
              <Component {...pageProps} />
            </AppLayout>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);

// export default MyApp;
