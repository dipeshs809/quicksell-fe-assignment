import { ITicket } from "app/services/quickSellApi";

export interface Filter {
  group: string;
  order: string;
}

export enum priority {
  p0 = 0,
  p1 = 1,
  p2 = 2,
  p3 = 3,
  p4 = 4,
}

export enum status {
  backlog = "Backlog",
  inProgress = "In progress",
  todo = "Todo",
  done = "Done",
  cancelled = "Cancelled",
}

export enum groupBy {
  priority = "priority",
  status = "status",
  user = "user",
}

export enum orderBy {
  priority = "priority",
  title = "title",
}

export interface GroupedTickets {
  header: string;
  groupBy: groupBy;
  tickets: ITicket[];
}
