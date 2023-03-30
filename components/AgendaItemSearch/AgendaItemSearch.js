import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";

export const AgendaItemSearch = ({withPagination}) => {
  const [agendaItems, setAgendaItems] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 3;
  const router = useRouter();

  const search = async () => {
    const { page } = queryString.parse(window.location.search);
    const response = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
      })
    });
    const data = await response.json();
    console.log("SEARCH DATA", data);

    setAgendaItems(data.agendaItems);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    await router.push(`${router.query.slug.join("/")}?page=${pageNumber}`, null, {
      shallow: true
    });
    search();
  };

  useEffect(() => {
    search();
  }, []);


  return (
    <div>
      <Results agendaItems={agendaItems} />
      {withPagination && <Pagination onPageClick={handlePageClick} totalPages={Math.ceil(totalResults / pageSize)} />}
    </div>
  );
};