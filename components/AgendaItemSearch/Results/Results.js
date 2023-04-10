import { AgendaItemCard } from "./AgendaItemCard";

export const Results = ({ agendaItems }) => {
  // console.log("agendaItems: ",agendaItems)
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      {agendaItems.map(agendaItem => (
        <AgendaItemCard key={agendaItem.databaseId}
                      title={agendaItem.title}
                      destination={agendaItem.uri}
                      date={agendaItem.agendaItems.date}
                      text={agendaItem.agendaItems.text}
                      tickets={agendaItem.agendaItems.tickets}
                      image={agendaItem.featuredImage?.node?.sourceUrl}
        />
      ))}
    </div>
  );
};