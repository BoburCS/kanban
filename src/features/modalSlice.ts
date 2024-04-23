import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
    isOpen: boolean;
    title: string;
    modalType: "AddTaskForm" | "AddBoardForm" | "DeleteBoard" | "DeleteTask";
}

const initialState = {
    isOpen: false,
    title: "",
    modalType: "",
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.isOpen = true;
            state.title = action.payload.title;
            state.modalType = action.payload.modalType;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.title = "";
            state.modalType = "";
        },
    },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
