import { useDispatch } from "react-redux";
import { showModal } from "@features/modalSlice";
import { BoardTypes } from "src/types";
import BoardListUI from "./BoardList.ui";

export default function BoardList({ boards }: { boards: BoardTypes[] | [] }) {
    const dispatch = useDispatch();

    const handleAddBoard = () => {
        const payload = {
            title: "Add New Board",
            modalType: "AddBoardForm",
        };

        dispatch(showModal(payload));
    };

    return (
        <BoardListUI boards={boards} handleAddBoard={handleAddBoard} />
    );
}
