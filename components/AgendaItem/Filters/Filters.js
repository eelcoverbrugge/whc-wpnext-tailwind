import { Input } from "../../Input";
import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  const [showArchive, setShowArchive] = useState("");

  const handleSearch = () => {
    onSearch({
      showArchive,
    });
  };

  useEffect(() => {
    const {
      showArchive: showArchiveInitial,
    } = queryString.parse(window.location.search);

    setShowArchive("true" === showArchiveInitial);
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-5 flex gap-5 border-solid border-darkPurple border-2 p-5 rounded-md">

      <div>
        <label htmlFor="" className="cursor-pointer flex">
          <Input type="checkbox"
                 checked={showArchive}
                 onChange={() => setShowArchive((value) => !value)}
          />
          <span className="pl-2">show archive</span>
        </label>
      </div>

      <div className="btn my-0"
           onClick={handleSearch}
      >
        Search
      </div>
    </div>
  );
};