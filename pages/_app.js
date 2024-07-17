import React from "react";
import "../styles/globals.css";
import {ParallaxProvider} from "react-scroll-parallax";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body">
      {document.location.hostname === "staging.willhawkinscollectief.nl" && (
        <div className="w-full h-10 bg-amber-700 p-4">
          <div className="text-white font-bold">
            Let op: U bevindt zich op de <strong>staging</strong> versie van deze website.
          </div>
        </div>
      )}

      <GoogleAnalytics trackPageViews gaMeasurementId={"G-X63KM0K59M"} />

      <ParallaxProvider scrollAxis={"vertical"}>
        <Component {...pageProps} />
      </ParallaxProvider>
    </div>
  );
}

export default MyApp;
