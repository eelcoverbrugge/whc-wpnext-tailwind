import { MainMenu } from "../MainMenu";
import { BlockRenderer } from "../BlockRenderer";
import { PageWrapper } from "context/page";

export const Page = (props) => {
  console.log("PAGE: ", props);
  return (
    <PageWrapper value={{title: props.title, featuredImage: props.featuredImage}}>
      <MainMenu items={props.mainMenuItems}
                callToActionLabel={props.callToActionLabel}
                callToActionDestination={props.callToActionDestination}
      />
      <BlockRenderer blocks={props.blocks} />
    </PageWrapper>
  );
};