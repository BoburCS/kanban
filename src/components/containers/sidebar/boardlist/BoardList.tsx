import { useDispatch } from "react-redux";
import { showModal } from "@features/modalSlice";
import BoardListUI from "./BoardList.ui";
import { BoardTypes } from "src/types";

export default function BoardList({ boards }: { boards: BoardTypes[] | [] }) {
  const dispatch = useDispatch();

  const handleAddBoard = () => {
    const payload = {
      title: "Add New Board",
      inputs: [
        { title: "Board Name", name: "title", placeholder: "e.g. Web Design" },
      ],
      subProps: {
        title: "Columns",
        name: "statuses",
        subInputs: [
          { placeholder: "e.g. To Do" },
          { placeholder: "e.g. To Do" },
          { placeholder: "e.g. To Do" },
        ],
        btnTitle: "+Add New Column",
      },
      btnTitle: "Create New Board",
    };

    dispatch(showModal(payload));
  };

  return <BoardListUI boards={boards} handleAddBoard={handleAddBoard} />;
}
