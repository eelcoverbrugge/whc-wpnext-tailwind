import React from "react";
import "../styles/globals.css";
import {ParallaxProvider} from "react-scroll-parallax";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [currHostName, setCurrentHostname] = React.useState("");

  useEffect(() => {
    if (currHostName === "") {
      setCurrentHostname(document.location.hostname);
    }
  }, [currHostName, setCurrentHostname]);

  useEffect(() => {
    if (currHostName !== "") {
      console.log("currHostName: ", currHostName)
    }
  }, [currHostName]);

  return (
    <div className="font-body">
      <GoogleAnalytics trackPageViews gaMeasurementId={"G-X63KM0K59M"} />
      <ParallaxProvider scrollAxis={"vertical"}>
        <Component {...pageProps} />
      </ParallaxProvider>
    </div>
  );
}

export default MyApp;
