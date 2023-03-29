import { gql } from "@apollo/client";
import client from "../../client";

const handler = async (req, res) => {
  console.log("handler()")
  try {
    const { data } = await client.query({
      query: gql`
        query AllAgendaItemsQuery {
          agendaItems {
            nodes {
              databaseId
              title
              uri
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              agendaItems {
                date
                text
                tickets
              }
            }
          }
        }
      `
    });
    return res.status(200).json({
      // total: data.properties.pageInfo.offsetPagination.total,
      agendaItems: data.agendaItems.nodes
    });
  } catch (error) {
    // console.log("ERROR", error);
  }
};

export default handler;