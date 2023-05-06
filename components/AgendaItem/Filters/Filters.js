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
    <div className="max-w-7xl mx-auto my-5 flex gap-2 items-center">

      <Input type="checkbox"
             className="cursor-pointer"
             checked={showArchive}
             onChange={() => setShowArchive((value) => !value)}
      />

      <button onClick={handleSearch} className={`underline hover:no-underline`}>
        Evenementen in het verleden
      </button>
    </div>
  );
};