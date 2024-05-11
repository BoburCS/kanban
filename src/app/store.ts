import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "@features/boardSlice";
import modalReducer from "@features/modalSlice";
import { boardApi } from "@services/boardApi";
import { taskApi } from "@services/taskApi";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    modal: modalReducer,
    [boardApi.reducerPath]: boardApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(boardApi.middleware, taskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
