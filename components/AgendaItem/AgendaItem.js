import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";
import { CallToActionButton } from "../CallToActionButton";
import { Filters } from "./Filters";

export const AgendaItem = ({size}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [agendaItems, setAgendaItems] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const [showArchive, setShowArchive] = useState(false);
  const pageSize = size;
  const router = useRouter();

  const search = async () => {
    setIsLoading(true);
    const {
      page,
      showArchive,
    } = queryString.parse(window.location.search);

    const filters = {};
    if ("true" === showArchive) filters.showArchive = true;

    const response = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        size: parseInt(pageSize || "3"),
        ...filters
      })
    });

    const data = await response.json();

    setAgendaItems(data.agendaItems);
    setTotalResults(data.total);
    setIsLoading(false);
  };

  const handlePageClick = async (pageNumber) => {
    await router.push(`${router.query.slug.join("/")}?page=${pageNumber}`, null, {
      shallow: true
    });
    search();
  };

  useEffect(() => {
    search();
    console.log(showArchive)
  }, []);

  const handleSearch = async ({ showArchive }) => {
    await router.push(`${router.query.slug.join("/")}?showArchive=${!!showArchive}`, null, {
      shallow: true
    });
    search();
  };

  if (isLoading) {
    return <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
  }
  return (
    <div>
      <Filters onSearch={handleSearch} />
      <h2 className="font-heading max-w-7xl lg:mx-auto text-3xl font-medium tracking-wider">{showArchive === true ? "Events in het verleden" : "Aankomende events"}</h2>
      <Results agendaItems={agendaItems} />
      {pageSize !== 3 &&
        <Pagination onPageClick={handlePageClick} totalPages={Math.ceil(totalResults / pageSize)} />
      }
    </div>
  );
};