import { createSlice } from "@reduxjs/toolkit";
import { BoardTypes, BoardStateTypes } from "../types";

const initialState: BoardStateTypes = {
    activeBoard: null,
    activeBoardId: "",
};

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setActiveBoard: (state, action: { payload: BoardTypes }) => {
            state.activeBoard = action.payload;
            state.activeBoardId = action.payload.id;
        },
        resetActiveBoard: (state) => {
            state.activeBoard = null;
            state.activeBoardId = "";
        }
    },
});

export const { setActiveBoard, resetActiveBoard } =
    boardSlice.actions;
export default boardSlice.reducer;
