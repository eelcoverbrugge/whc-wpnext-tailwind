import "../styles/globals.css";
import {ParallaxProvider} from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body">
      <ParallaxProvider scrollAxis={"vertical"}>
        <Component {...pageProps} />
      </ParallaxProvider>
    </div>
  );
}

export default MyApp;
