import { gql } from "@apollo/client";
import client from "../../client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    const offset = ((filters.page || 1) - 1) * filters.size;
    const size = filters.size;
    const date = new Date;
    date.setDate(date.getDate() - 1);
    const yyyymmdd = date.toISOString().slice(0,10).replace(/-/g,"");

    let showArchiveFilter = ``;

    if (filters.showArchive) {
      showArchiveFilter = `
      metaQuery: {
        metaArray: {
          key: "EVENT",
          value: "${yyyymmdd}", 
          compare: LESS_THAN, 
          type: DATE
        }
      },
    `;
    } else {
      showArchiveFilter = `
      metaQuery: {
        metaArray: {
          key: "EVENT",
          value: "${yyyymmdd}", 
          compare: GREATER_THAN, 
          type: DATE
        }
      },
    `;
    }


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
              ${showArchiveFilter}
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
    console.log("ERROR: ", error);
  }
};

export default handler;