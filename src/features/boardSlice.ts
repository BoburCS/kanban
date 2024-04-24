import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskTypes, BoardTypes, BoardStateTypes } from "../types";
import boards from "../data/db";

const initialState: BoardStateTypes = {
    boards: boards,
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
        },
        addBoard: (state, action: { payload: BoardTypes }) => {
            state.boards = [...state.boards, action.payload];
        },
        addTask: (
            state,
            action: PayloadAction<{
                boardId: string;
                columnId: string;
                task: TaskTypes;
            }>,
        ) => {
            const { boardId, columnId, task } = action.payload;
            const board = state.boards.find((board) => board.id === boardId);
            const column = board?.columns.find(
                (column) => column.id === columnId,
            );
            if (column) {
                column.tasks.push(task);
            }
        },
    },
});

export const { setActiveBoard, resetActiveBoard, addBoard, addTask } =
    boardSlice.actions;
export default boardSlice.reducer;
