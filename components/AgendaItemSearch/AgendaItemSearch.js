import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter } from "next/router";
import queryString from "query-string";

export const AgendaItemSearch = () => {
  const [agendaItems, setAgendaItems] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageSize = 3;
  const router = useRouter();

  const search = async () => {
    setIsLoading(true);
    const { page } = queryString.parse(window.location.search);
    console.log("page: ",page)
    const response = await fetch(`/api/search`, {
      method: 'POST',
      body: JSON.stringify({
        page: parseInt(page || "1"),
      }),
    });
    console.log("RESPONSE: ",response)
    const data = await response.json();
    console.log("SEARCH DATA", data);

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
    return (<div>Loading...</div>)
  }

  return (
    <div>
      AgendaItemSearch
      <Results agendaItems={agendaItems} />
      <Pagination onPageClick={handlePageClick} totalPages={Math.ceil(totalResults / pageSize)} />
    </div>
  );
};