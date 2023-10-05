import TicketCard from "components/card";
import { CardProps } from "components/card/index.interface";
import React from "react";
import styles from "./index.module.scss";
import { GroupedTickets } from "features/Dashboard/index.interface";

const TicketList: React.FC<GroupedTickets> = ({ tickets, groupBy, header }) => {
  const cardsData: CardProps[] = tickets.map((ticket) => {
    return {
      title: ticket.id,
      about: ticket.title,
      status: "Feature Request",
    };
  });
  return (
    <div className={styles.ticketListContainer}>
      <div className={styles.ticketListHeader}>
        <div className={styles.headerTitle}>
          <img src="" alt="" />
          <p>{header}</p>
        </div>
        <div className={styles.headerOptions}></div>
      </div>
      {cardsData.map((ticket, index) => (
        <TicketCard key={index} {...ticket} />
      ))}
    </div>
  );
};

export default TicketList;
