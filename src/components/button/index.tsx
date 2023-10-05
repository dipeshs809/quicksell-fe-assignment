import React from "react";
// import styles from "index.module.scss";
import { ButtonProps, ButtonVarient } from "./index.interface";
import { classNames } from "app/utils/classNames";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  varient = ButtonVarient.primary,
  className,
}) => {
  return (
    <button {...classNames(className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
