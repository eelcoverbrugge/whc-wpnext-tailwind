import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";

export const AgendaItem = ({size}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [agendaItems, setAgendaItems] = useState([]);
  const [totalResults, setTotalResults] = useState([]);
  const pageSize = size;
  const router = useRouter();

  const search = async () => {
    setIsLoading(true);
    const {
      page,
    } = queryString.parse(window.location.search);

    const response = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        size: parseInt(pageSize || "3"),
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
  }, []);

  if (isLoading) {
    return <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
  }

  return (
    <div>
      <Results agendaItems={agendaItems} />
      {pageSize !== 3 &&
        <Pagination onPageClick={handlePageClick} totalPages={Math.ceil(totalResults / pageSize)} />
      }
    </div>
  );
};