import TicketList from "components/ticketList";
import React from "react";
import { IResponse, useGetTicketDataQuery } from "app/services/quickSellApi";
import { useSearchParams } from "react-router-dom";
import { Filter, GroupedTickets } from "./index.interface";
import { groupTickets, orderTickets } from "./helper";

const TicketListContainer: React.FC<IResponse> = ({ tickets, users }) => {
  const [searchParams] = useSearchParams();
  const { group, order }: Filter = JSON.parse(
    searchParams.get("filters") || "{}"
  );

  let groupedTickets: GroupedTickets[] = groupTickets(tickets, group, users);

  groupedTickets = orderTickets(groupedTickets, order);
  return (
    <div>
      {groupedTickets.map((groupedTicket, index) => {
        return <TicketList key={index} {...groupedTicket} />;
      })}
      {/* <TicketList tickets={tickets} /> */}
    </div>
  );
};

const DashBoardContainer = () => {
  const { data, isFetching } = useGetTicketDataQuery();

  return isFetching ? (
    <div>Loading</div>
  ) : (
    <TicketListContainer
      tickets={data?.tickets || []}
      users={data?.users || []}
    />
  );
};

export default DashBoardContainer;
