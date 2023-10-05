import {
  isFulfilled,
  isRejectedWithValue,
  Middleware,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  AnyAsyncThunk,
  RejectedWithValueActionFromAsyncThunk,
} from "@reduxjs/toolkit/dist/matchers";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";


export type GenericResponse<DataType = unknown> = DataType

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL}`,
  credentials: "include",
  mode: "cors",
});

const baseQueryWithSentry: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithSentry,
  endpoints: () => ({}),
});

export const handleErrorWithToast: Middleware =
  () =>
  (next) =>
  (
    action: PayloadAction<GenericResponse> &
      RejectedWithValueActionFromAsyncThunk<AnyAsyncThunk>
  ) => {
    if (
      isRejectedWithValue(action) &&
      action.payload.status !== 401 &&
      action.payload.status !== 403
    ) {
      const reason = action.payload.reason;
      console.error(reason);
    } else if (isFulfilled(action)) {
      if (action.payload && !action.payload.success) {
        const reason = action.payload.reason;
        console.error(reason);
      }
    }
    if (isRejectedWithValue(action) && action.payload.status === 401) {
      console.error("auth eror");
    }
    return next(action);
  };
