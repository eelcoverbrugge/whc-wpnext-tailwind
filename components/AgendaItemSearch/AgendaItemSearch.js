import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { Filters } from "./Filters";

export const AgendaItemSearch = ({withSearch}) => {
  const [agendaItems, setAgendaItems] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 3;
  const router = useRouter();
  const search = async () => {
    const {
      page,
      date,
      ticket,
    } = queryString.parse(window.location.search);

    const filters = {};
    if (date) filters.date = JSON.stringify(date);
    if ("true" === ticket) filters.ticket = true;

    const response = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters
      })
    });
    const data = await response.json();
    // console.log("SEARCH DATA", data);
    setAgendaItems(data.agendaItems);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    const {
      date,
      ticket,
    } = queryString.parse(window.location.search);

    await router.push(`${router.query.slug.join("/")}?page=${pageNumber}&ticket=${"true" === ticket}&date=${date}`, null, {
      shallow: true
    });
    search();
  };

  useEffect(() => {
    search();
  }, []);

  const handleSearch = async ({ date, ticket }) => {
    await router.push(`${router.query.slug.join("/")}?page=1&ticket=${!!ticket}&date=${date}`, null, {
      shallow: true
    });
    search();
  };


  return (
    <div>
      {withSearch && <Filters onSearch={handleSearch} />}
      <Results agendaItems={agendaItems} />
      <Pagination onPageClick={handlePageClick} totalPages={Math.ceil(totalResults / pageSize)} />
    </div>
  );
};