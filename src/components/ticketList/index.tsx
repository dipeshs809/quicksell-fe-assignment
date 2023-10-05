import TicketCard from "components/card";
import { CardProps } from "components/card/index.interface";
import React from "react";
import styles from "./index.module.scss";
import {
  PlusOutlined,
  EllipsisOutlined,
  CheckCircleOutlined,
  PauseCircleOutlined,
  PlusCircleOutlined,
  CloseCircleOutlined,
  BoldOutlined,
} from "@ant-design/icons";
import { GroupedTickets, status } from "features/Dashboard/index.interface";
import Tag from "components/tag";

const TicketList: React.FC<GroupedTickets> = ({ tickets, groupBy, header }) => {
  const cardsData: CardProps[] = tickets.map((ticket) => {
    return {
      title: ticket.id,
      about: ticket.title,
      status: (
        <>
          {ticket.tag.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </>
      ),
    };
  });

  function getIconForHeader(value: string) {
    switch (value) {
      case status.backlog: {
        return <BoldOutlined />;
      }
      case status.cancelled: {
        return <CloseCircleOutlined />;
      }
      case status.done: {
        return <CheckCircleOutlined />;
      }
      case status.todo: {
        return <PlusCircleOutlined />;
      }
      case status.inProgress: {
        return <PauseCircleOutlined />;
      }
      default:
        return null;
    }
  }
  return (
    <div className={styles.ticketListContainer}>
      <div className={styles.ticketListHeader}>
        <p className={styles.heading}>
          {groupBy === "status" && getIconForHeader(header)}
          {header} <span className={styles.count}>{tickets.length}</span>
        </p>
        <div className={styles.options}>
          <PlusOutlined />
          <EllipsisOutlined />
        </div>
      </div>
      {cardsData.map((ticket, index) => (
        <TicketCard key={index} {...ticket} />
      ))}
    </div>
  );
};

export default TicketList;
