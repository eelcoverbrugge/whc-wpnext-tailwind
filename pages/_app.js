import React from "react";
import "../styles/globals.css";
import {ParallaxProvider} from "react-scroll-parallax";
import { CookieBanner } from "components/CookieBanner";
import { ConsentProvider } from "context/consent";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [currHostName, setCurrentHostname] = React.useState("");

  useEffect(() => {
    setCurrentHostname(document.location.hostname);
  }, []);

  return (
    <ConsentProvider>
      <div className="font-body">
        {currHostName === "staging.willhawkinscollectief.nl" && (
          <div className="w-full bg-amber-700 p-4 text-center">
            <div className="text-white font-bold text-xl">
              Let op: U bevindt zich op de staging versie van deze website.
            </div>
          </div>
        )}
        <ParallaxProvider scrollAxis={"vertical"}>
          <Component {...pageProps} />
        </ParallaxProvider>
        <CookieBanner gaMeasurementId={"G-X63KM0K59M"} />
      </div>
    </ConsentProvider>
  );
}

export default MyApp;
