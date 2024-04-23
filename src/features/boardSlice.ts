import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tasks = [
    {
        id: "400",
        title: "Build UI for onboarding flow",
        descripion: "description",
        subTasks: [],
    },
    {
        id: "401",
        title: "Build UI for search",
        descripion: "description",
        subTasks: [],
    },
    {
        id: "402",
        title: "Create template structures",
        descripion: "description",
        subTasks: [],
    },
    {
        id: "403",
        title: "QA and test all major user journeys",
        descripion: "description",
        subTasks: [],
    },
];

export interface SubTaskTypes {
    id: string;
    title: string;
}

export interface TaskTypes {
    id: string;
    title: string;
    description: string;
    subTasks: SubTaskTypes[];
}

export interface ColumnTypes {
    id: string;
    name: string;
    tasks: TaskTypes[];
}

export interface BoardProps {
    id: string;
    name: string;
    columns: ColumnTypes[];
}

export interface InitialStateProps {
    boards: BoardProps[];
    activeBoard: BoardProps | null;
    activeBoardId: string;
}

const initialState = {
    boards: [
        { id: "1", name: "Platform Launch", columns: [] },
        {
            id: "2",
            name: "Marketing Plan",
            columns: [
                { id: "666", name: "To Do", tasks },
                { id: "667", name: "Doing", tasks },
                { id: "668", name: "Done", tasks },
            ],
        },
        {
            id: "3",
            name: "Roadmap",
            columns: [
                { id: "666", name: "To Do", tasks },
                { id: "667", name: "Doing", tasks },
                { id: "668", name: "Done", tasks },
            ],
        },
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
        addBoard: (state, action) => {
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
