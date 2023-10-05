import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import { TagFilled } from "@ant-design/icons";

const Tag: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.tag}>
      <TagFilled />
      {children}
    </div>
  );
};

export default Tag;
