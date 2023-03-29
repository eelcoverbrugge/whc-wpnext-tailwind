import { gql } from "@apollo/client";
import client from "../../client";

const handler = async (req, res) => {
  console.log("handler()")
  try {
    const { data } = await client.query({
      query: gql`
        query AllAgendaItemsQuery {
          agendaItems(where: {offsetPagination: {size: 3, offset: 0}}) {
          pageInfo {
              offsetPagination {
                total
              }
            }
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
      total: data.agendaItems.pageInfo.offsetPagination.total,
      agendaItems: data.agendaItems.nodes
    });
  } catch (error) {
    // console.log("ERROR", error);
  }
};

export default handler;