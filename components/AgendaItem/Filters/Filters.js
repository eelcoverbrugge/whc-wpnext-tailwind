import { Input } from "../../Input";
import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  const [showArchive, setShowArchive] = useState(false);

  const handleSearch = () => {
    onSearch({
      showArchive
    });
  };

  useEffect(() => {
    const {
      showArchive: showArchiveInitial
    } = queryString.parse(window.location.search);

    setShowArchive("true" === showArchiveInitial);
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex gap-4 md:items-center py-2 border-b-2 border-darkPurple px-2 md:px-0">
      <div className="flex flex-col sm:flex-row gap-x-4 font-heading text-1l font-medium tracking-wider">
        <div>Evenementen:</div>

        <div>
          <label htmlFor="aankomende" className="cursor-pointer flex">
            <Input
              id="aankomende"
              type="checkbox"
              checked={!showArchive}
              onChange={() => setShowArchive((value) => !value)}
            />
            <span className="pl-2">Aankomende</span>
          </label>
        </div>

        <div>
          <label htmlFor="eerdere" className="cursor-pointer flex">
            <Input
              id="eerdere"
              type="checkbox"
              checked={showArchive}
              onChange={() => setShowArchive((value) => !value)}
            />
            <span className="pl-2">Eerdere</span>
          </label>
        </div>
      </div>

      <div className="font-heading text-2xl font-medium tracking-wider underline hover:no-underline cursor-pointer flex items-center"
           onClick={handleSearch}
      >
        Zoeken
      </div>
    </div>
  );
};