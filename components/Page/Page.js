import { MainMenu } from "../MainMenu";
import { BlockRenderer } from "../BlockRenderer";
import { PageWrapper } from "context/page";
import Head from "next/head";
import { FooterMenu } from "../FooterMenu";
import { Favicon } from '../Favicon';
import { MediaPlayer } from "../MediaPlayer";

export const Page = (props) => {
  return (
    <PageWrapper
      value={{
        propertyFeatures: props.propertyFeatures,
        title: props.title,
        featuredImage: props.featuredImage
      }}
    >
      <div className="relative">
        <Head>
          <title>{props.seo?.title}</title>
          <meta name="description" content={props.seo?.metaDesc} />
          <Favicon />
        </Head>
        <MainMenu items={props.mainMenuItems}
                  callToActionLabel={props.callToActionLabel}
                  callToActionDestination={props.callToActionDestination}
        />
        <BlockRenderer blocks={props.blocks} />
        <MediaPlayer className={"fixed bottom-0 right-0 z-10"} />
        <FooterMenu items={props.footerMenuItems}
                    company={props.footerCompany}
                    logos={props.footerLogos}
        />
      </div>
    </PageWrapper>
  );
};