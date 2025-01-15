import "../styles/globals.css";
import Router from "next/router";
import { useState, useContext } from "react";

import Loader from "../components/loding";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  return (
    <>
      {Loading && <Loader />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
