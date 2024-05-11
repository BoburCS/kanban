import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { showModal } from "@features/modalSlice";
import NavbarUI from "./Navbar.ui";
import { BoardStateTypes } from "../../../types";

export default function Navbar() {
  const dispatch = useDispatch();
  const { activeBoard } = useSelector(
    (state: RootState) => state.board,
  ) as BoardStateTypes;

  const handleAddTask = () => {
    if (!activeBoard) {
      alert("First choose a board to add task");
      return;
    }

    const payload = {
      title: "Add New Task",
      modalType: "AddTaskForm",
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
