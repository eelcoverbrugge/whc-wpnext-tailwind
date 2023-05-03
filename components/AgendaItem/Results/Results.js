import { AgendaItemCard } from "./AgendaItemCard";

export const Results = ({ agendaItems, showArchive }) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col divide-y-2 divide-darkPurple">
      {agendaItems.map(agendaItem => (
        <AgendaItemCard key={agendaItem.databaseId}
                      title={agendaItem.title}
                      destination={agendaItem.uri}
                      event={agendaItem.agendaItems.event}
                      text={agendaItem.agendaItems.text}
                      tickets={agendaItem.agendaItems.tickets}
                      image={agendaItem.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};