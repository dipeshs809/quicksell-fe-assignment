import { ReactNode } from "react";

export enum ButtonVarient {
  primary = "primary",
  icon = "icon",
}

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  varient?: ButtonVarient;
  className?: string;
}
