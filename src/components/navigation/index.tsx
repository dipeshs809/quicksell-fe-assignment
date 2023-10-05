import { classNames } from "app/utils/classNames";
import styles from "./index.module.scss";
import React from "react";
import { NavigationProps } from "./index.interface";

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return <div {...classNames(styles.navBar)}>{children}</div>;
};
