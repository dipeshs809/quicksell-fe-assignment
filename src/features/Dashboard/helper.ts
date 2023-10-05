import { ITicket, IUser } from "app/services/quickSellApi";
import {
  GroupedTickets,
  groupBy,
  orderBy,
  priority,
  status,
} from "./index.interface";

function groupByStatus(tickets: ITicket[]) {
  const backLog: ITicket[] = [];
  const inProgress: ITicket[] = [];
  const todo: ITicket[] = [];
  const done: ITicket[] = [];
  const cancelled: ITicket[] = [];
  tickets.forEach((ticket) => {
    switch (ticket.status) {
      case status.backlog: {
        backLog.push(ticket);
        break;
      }
      case status.inProgress: {
        inProgress.push(ticket);
        break;
      }
      case status.todo: {
        todo.push(ticket);
        break;
      }
      case status.done: {
        done.push(ticket);
        break;
      }
      case status.cancelled: {
        cancelled.push(ticket);
        break;
      }
      default: {
        break;
      }
    }
  });
  return [
    {
      header: status.backlog,
      groupBy: groupBy.status,
      tickets: backLog,
    },
    {
      header: status.todo,
      groupBy: groupBy.status,
      tickets: todo,
    },
    {
      header: status.inProgress,
      groupBy: groupBy.status,
      tickets: inProgress,
    },
    {
      header: status.done,
      groupBy: groupBy.status,
      tickets: done,
    },
    {
      header: status.cancelled,
      groupBy: groupBy.status,
      tickets: cancelled,
    },
  ];
}

function groupByPriority(tickets: ITicket[]) {
  const p0: ITicket[] = [];
  const p1: ITicket[] = [];
  const p2: ITicket[] = [];
  const p3: ITicket[] = [];
  const p4: ITicket[] = [];
  tickets.forEach((ticket) => {
    switch (ticket.priority) {
      case priority.p0: {
        p0.push(ticket);
        break;
      }
      case priority.p1: {
        p1.push(ticket);
        break;
      }
      case priority.p2: {
        p2.push(ticket);
        break;
      }
      case priority.p3: {
        p3.push(ticket);
        break;
      }
      case priority.p4: {
        p4.push(ticket);
        break;
      }
      default: {
        break;
      }
    }
  });
  return [
    {
      header: "No priority",
      groupBy: groupBy.priority,
      tickets: p0,
    },
    {
      header: "Low",
      groupBy: groupBy.priority,
      tickets: p1,
    },
    {
      header: "Medium",
      groupBy: groupBy.priority,
      tickets: p2,
    },
    {
      header: "High",
      groupBy: groupBy.priority,
      tickets: p3,
    },
    {
      header: "Urgent",
      groupBy: groupBy.priority,
      tickets: p4,
    },
  ];
}

function groupByUser(tickets: ITicket[], users: IUser[]) {
  const groupedTickets: GroupedTickets[] = [];
  users.forEach((user) => {
    const userTickets: ITicket[] = [];
    tickets.forEach((ticket) => {
      if (ticket.userId === user.id) {
        userTickets.push(ticket);
      }
    });
    groupedTickets.push({
      header: user.name,
      groupBy: groupBy.user,
      tickets: userTickets,
    });
  });
  return groupedTickets;
}

export function groupTickets(
  tickets: ITicket[],
  grouping: string,
  user: IUser[]
) {
  switch (grouping) {
    case groupBy.status: {
      return groupByStatus(tickets);
    }
    case groupBy.priority: {
      return groupByPriority(tickets);
    }
    case groupBy.user: {
      return groupByUser(tickets, user);
    }
    default: {
      return [];
    }
  }
}

export function orderTickets(groupedTickets: GroupedTickets[], order: string) {
  switch (order) {
    case orderBy.title: {
      return groupedTickets.map((tickets) => {
        return {
          ...tickets,
          tickets: tickets.tickets.sort((a, b) =>
            a.title.localeCompare(b.title)
          ),
        };
      });
    }
    case orderBy.priority: {
      return groupedTickets.map((tickets) => {
        return {
          ...tickets,
          tickets: tickets.tickets.sort((a, b) => a.priority - b.priority),
        };
      });
    }
    default: {
      return [];
    }
  }
}
