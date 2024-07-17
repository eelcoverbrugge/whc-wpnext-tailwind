import "../styles/globals.css";
import {ParallaxProvider} from "react-scroll-parallax";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { usePathname } from 'next/navigation';

function MyApp({ Component, pageProps }) {
  const pathname = usePathname();
  console.log("pathname: ", pathname);
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
