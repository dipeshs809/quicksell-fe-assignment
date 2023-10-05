import { ReactNode } from "react";

export interface CardProps {
  userImage?: ReactNode;
  title: string;
  about: ReactNode;
  status: ReactNode;
}
