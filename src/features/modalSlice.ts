import { createSlice } from "@reduxjs/toolkit";
import { TaskTypes } from "src/types";

export interface ModalState {
    isOpen: boolean;
    title?: string;
    modalType:
        | "AddTaskForm"
        | "AddBoardForm"
        | "DeleteBoard"
        | "DeleteTask"
        | "ShowTask";
    task?: TaskTypes | null;
    taskId?: { id: string; title: string } | null;
}

const initialState = {
    isOpen: false,
    title: "",
    modalType: "",
    task: null,
    taskId: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.isOpen = true;
            state.title = action.payload.title;
            state.modalType = action.payload.modalType;
            state.task = action.payload.task;
            state.taskId = action.payload.taskId;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.title = "";
            state.modalType = "";
            state.task = null;
            state.taskId = null;
        },
    },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
