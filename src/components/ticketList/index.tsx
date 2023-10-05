import { IResponse } from "app/services/quickSellApi";
import TicketCard from "components/card";
import { CardProps } from "components/card/index.interface";
import React from "react";

const TicketList: React.FC<IResponse> = ({ tickets, users }) => {
  const cardsData: CardProps[] = tickets.map((ticket) => {
    return {
      title: ticket.id,
      about: ticket.title,
      status: "Feature Request"
    }
  })
  return (
    <div>
      {cardsData.map((ticket, index) => <TicketCard {...ticket} />)}
    </div>
  );
};

export default TicketList;
