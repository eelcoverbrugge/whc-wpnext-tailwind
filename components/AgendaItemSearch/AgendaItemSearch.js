import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";

export const AgendaItemSearch = ({withPagination}) => {
  const [agendaItems, setAgendaItems] = useState([]);

  const search = async () => {
    const response = await fetch(`/api/search`);
    const data = await response.json();
    console.log("SEARCH DATA", data);

    setAgendaItems(data.agendaItems);
    // setTotalResults(data.total);
  };

  // const handlePageClick = async (pageNumber) => {
  //   await router.push(`${router.query.slug.join("/")}?page=${pageNumber}`, null, {
  //     shallow: true
  //   });
  //   search();
  // };
  //
  useEffect(() => {
    search();
  }, []);


  return (
    <div>
      AgendaItemSearch
      <Results agendaItems={agendaItems} />
      {/*{withPagination && <Pagination onPageClick={handlePageClick} totalPages={Math.ceil(totalResults / pageSize)} />}*/}
    </div>
  );
};