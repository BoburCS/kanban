import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "@features/boardSlice";
import modalReducer from "@features/modalSlice";

export const store = configureStore({
    reducer: {
        board: boardReducer,
        modal: modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
