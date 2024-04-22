import { createSlice } from "@reduxjs/toolkit";

export interface BoardProps {
    id: string;
    title: string;
}

export interface InitialStateProps {
    boards: BoardProps[];
    activeBoard: BoardProps | null;
    activeBoardId: string;
}

const initialState = {
    boards: [
        { id: "1", title: "Platform Launch" },
        { id: "2", title: "Marketing Plan" },
        { id: "3", title: "Roadmap" },
        { id: "4", title: "Board 1" },
    ],
    activeBoard: null,
    activeBoardId: "",
};

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setActiveBoard: (state, action: { payload: BoardProps }) => {
            state.activeBoard = action.payload;
            state.activeBoardId = action.payload.id;
        },
        resetActiveBoard: (state) => {
            state.activeBoard = null;
            state.activeBoardId = "";
        },
    },
});

export const { setActiveBoard, resetActiveBoard } = boardSlice.actions;
export default boardSlice.reducer;
