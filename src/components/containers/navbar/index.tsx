import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { showModal } from "@features/modalSlice";
import NavbarUI from "./Navbar.ui";
import { BoardStateTypes } from "../../../types";
import { useGetBoardQuery } from "@services/boardApi";
import { nanoid } from "@reduxjs/toolkit";

export default function Navbar() {
  const dispatch = useDispatch();
  const { activeBoard } = useSelector(
    (state: RootState) => state.board,
  ) as BoardStateTypes;

  const { data } = useGetBoardQuery(activeBoard?._id as string);

  const handleAddTask = () => {
    if (!activeBoard) {
      alert("First choose a board to add task");
      return;
    }

    const payload = {
      title: "Add New Task",
      inputs: [
        { title: "Title", name: "title", placeholder: "e.g. Task 1" },
        {
          title: "Description",
          name: "description",
          placeholder: "e.g. This is a description",
        },
      ],
      subProps: {
        title: "Subtasks",
        name: "subTasks",
        subInputs: [
          { placeholder: "e.g. John Doe", id: nanoid() },
          { placeholder: "e.g. John Doe", id: nanoid() },
          { placeholder: "e.g. John Doe", id: nanoid() },
        ],
        btnTitle: "+Add New Subtask",
      },
      selectProps: {
        title: "Status",
        options: data?.board?.statuses.map(
          (status: string) => status,
        ) as string[],
      },
      btnTitle: "Create Task",
    };

    dispatch(showModal(payload));
  };

  const handleDeleteBoard = () => {
    if (!activeBoard) {
      alert("Choose board to delete");
      return;
    }

    const payload = {
      title: "Delete This Board",
      modalType: "DeleteBoard",
    };
    dispatch(showModal(payload));
  };

  return (
    <NavbarUI
      activeBoard={activeBoard}
      handleAddTask={handleAddTask}
      handleDeleteBoard={handleDeleteBoard}
    />
  );
}
