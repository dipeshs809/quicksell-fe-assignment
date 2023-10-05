import React from "react";
import styles from "./index.module.scss";
import { CardProps } from "./index.interface";

const TicketCard: React.FC<CardProps> = ({
  about,
  status,
  title,
  userImage,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.ticketSummary}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.about}>{about}</p>
        <div className={styles.status}>{status}</div>
      </div>
      {userImage && <div>{userImage}</div>}
    </div>
  );
};

export default TicketCard;
