import { api } from "./api";

export interface ITicket {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: number;
}

export interface IUser {
  id: string;
  name: string;
  available: boolean;
}

export interface IResponse {
  tickets: ITicket[]
  users: IUser[]
} 

export const dataApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTicketData: builder.query<IResponse, void>({
      query: () => ({
        url: "https://api.quicksell.co/v1/internal/frontend-assignment",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTicketDataQuery } = dataApi;
