import TicketList from "components/ticketList";
import React from "react";
import { useGetTicketDataQuery } from "app/services/quickSellApi";

const DashBoardContainer = () => {
  const { data, isFetching } = useGetTicketDataQuery();

  return isFetching ? (
    <div>Loading</div>
  ) : (
    <div>
      <TicketList tickets={data?.tickets || []} users={data?.users || []} />
    </div>
  );
};

export default DashBoardContainer;
