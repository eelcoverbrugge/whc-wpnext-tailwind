import { getPage } from "../utils/getPage";
import { BlockRenderer } from "../components/BlockRenderer";
import {ParallaxProvider} from "react-scroll-parallax";

export default async function Home() {
  const data = await getPage("/");
  console.log("data: ", data)

  return (
    <div className="home">
      <ParallaxProvider scrollAxis={"vertical"}>
        <BlockRenderer blocks={data} />
      </ParallaxProvider>
    </div>
  );
};
