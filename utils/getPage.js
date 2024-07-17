import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPage = async (uri) => {
  const params = {
    query: `
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
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();

  console.log(data)

  return cleanAndTransformBlocks(data?.nodeByUri?.blocksJSON);
}
