import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterSlice from "app/slice/exampleSlice";

import { api, handleErrorWithToast } from "./services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, handleErrorWithToast),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
// setupListeners(store.dispatch);
