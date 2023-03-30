import client from "../client";
import { gql } from "@apollo/client";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMenuItems } from "./mapMenuItems";

export const getPageStaticProps = async (context) => {
  // console.log("CONTEXT: ", context);
  const uri = context.params?.slug ?
    `/${context.params.slug.join("/")}/` :
    "/";

  const { data } = await client.query({
    query: gql`
        query PageQuery($uri: String!) {
          nodeByUri(uri: $uri) {
            id
            ... on Page {
              id
              title
              blocksJSON
              featuredImage {
                node {
                  sourceUrl
                }
              }
              seo {
                title
                metaDesc
              }
            }
            ... on AgendaItem {
              id
              title
              blocksJSON
              seo {
                title
                metaDesc
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
          acfOptionsMainMenu {
            mainMenu {
              callToActionButton {
                label
                destination {
                  ... on Page {
                    uri
                  }
                }
              }
              menuItems {
                menuItem {
                  destination {
                    ... on Page {
                      id
                      uri
                    }
                  }
                  label
                }
                items {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
          acfOptionsFooterMenu {
            footerMenu {
              companyAddress
              companyAddress2
              companyName
              menuItems {
                items {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
              }
              socialMedia {
                name
                url
              }
               logos {
                logo {
                  altText
                  link
                  mediaDetails {
                    height
                    width
                  }
                  id
                }
              }
            }
          }
        }
        `,
    variables: {
      uri
    }
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
// console.log("data.acfOptionsFooterMenu.footerMenu.menuItems: ", data.acfOptionsFooterMenu.footerMenu.logos)
  return {
    props: {
      seo: data.nodeByUri.seo,
      blocks,
      title: data.nodeByUri.title,
      featuredImage: data.nodeByUri.featuredImage?.node?.sourceUrl || null,
      mainMenuItems: mapMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      footerMenuItems: mapMenuItems(data.acfOptionsFooterMenu.footerMenu.menuItems),
      footerLogos: data.acfOptionsFooterMenu.footerMenu.logos,
      footerCompany: {
        companyAddress: data.acfOptionsFooterMenu.footerMenu.companyAddress,
        companyAddress2: data.acfOptionsFooterMenu.footerMenu.companyAddress2,
        companyName: data.acfOptionsFooterMenu.footerMenu.companyName,
        socialMedia: data.acfOptionsFooterMenu.footerMenu.socialMedia,
      },
      callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri
    }
  };
};