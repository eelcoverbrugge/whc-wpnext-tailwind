import { gql } from "@apollo/client";
import client from "../../client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    const offset = ((filters.page || 1) - 1) * filters.size;
    const size = filters.size;

    const { data } = await client.query({
      query: gql`
        query AllAgendaItemsQuery {
          agendaItems(where: 
            {
              offsetPagination: 
              { 
                size: ${size}, 
                offset: ${offset} 
              }, 
              orderby: 
              {
                field: EVENT, 
                order: ASC
              }
            }) {
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
                text
                event
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