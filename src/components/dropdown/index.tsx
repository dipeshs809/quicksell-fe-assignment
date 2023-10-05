import React, { useState } from "react";
import styles from "./index.module.scss";
import { SettingOutlined } from "@ant-design/icons";
import { classNames } from "app/utils/classNames";
import { PopoverProps } from "./index.interface";
import Button from "components/button";

const Popover: React.FC<PopoverProps> = ({ title, children }) => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  return (
    <div className={styles.popoverContainer}>
      <Button className={styles.popoverTrigger} onClick={togglePopover}>
        <SettingOutlined />
        {title}
      </Button>
      <div
        {...classNames(
          styles.popoverContent,
          isPopoverVisible ? styles.visible : undefined
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Popover;
