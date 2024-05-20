import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
  title?: string;
  inputs?: { title: string; name: string; placeholder: string }[];
  subProps?: {
    title: string;
    name: string;
    subInputs: { placeholder: string, id: string }[];
    btnTitle?: string;
  };
  selectProps?: { title: string; options: string[] };
  btnTitle?: string;
}

const initialState = {
  isOpen: false,
  title: "",
  inputs: [],
  subProps: {
    title: "",
    name: "",
    subInputs: [],
    btnTitle: "",
  },
  selectProps: {
    title: "",
    options: [],
  },
  btnTitle: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.inputs = action.payload.inputs;
      state.subProps = action.payload.subProps;
      state.selectProps = action.payload.selectProps;
      state.btnTitle = action.payload.btnTitle;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = "";
      state.inputs = [];
      state.subProps = {
        title: "",
        name: "",
        subInputs: [],
        btnTitle: "",
      };
      state.selectProps = {
        title: "",
        options: [],
      };
      state.btnTitle = "";
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
