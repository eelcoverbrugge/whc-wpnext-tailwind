import { Input } from "../../Input";
import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  const [date, setDate] = useState("");
  const [ticket, setTicket] = useState("");

  const handleSearch = () => {
    onSearch({
      date,
      ticket,
    });
  };

  useEffect(() => {
    const {
      date: dateInit,
      ticket: ticketInit,
    } = queryString.parse(window.location.search);

    setDate("true" === dateInit);
    setTicket(ticketInit || "");
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
      <div className="flex-1 flex">
        <div>
          <label htmlFor="">
            <Input type="checkbox"
                   checked={ticket}
                   onChange={() => setTicket((value) => !value)}
            />
            <span className="pl-2">Ticket nodig</span>
          </label>
        </div>
      </div>
      <div className="flex-1">
        <span>Datum</span>
        <Input type="number"
               value={date}
               onChange={e => setDate(e.target.value)}
        />
      </div>
      <div>
        <div className="btn"
             onClick={handleSearch}
        >
          Zoek
        </div>
      </div>
    </div>
  );
};