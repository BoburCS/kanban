import { useDispatch } from "react-redux";
import { showModal } from "@features/modalSlice";
import { BoardTypes } from "src/types";
import Board from "@elements/board/Board";
import Heading from "@ui/heading";
import BoardPurpleIcon from "@icons/board-purple.svg";

export default function BoardList({ boards }: { boards: BoardTypes[] }) {
    const dispatch = useDispatch();

    const handleAddBoard = () => {
        const payload = {
            title: "Add New Board",
            modalType: "AddBoardForm",
        };

        dispatch(showModal(payload));
    };

    return (
        <div>
            <Heading variant="s" className="pb-5 pl-8">
                ALL BOARDS ({boards.length})
            </Heading>

            <div>
                {boards.map((board: BoardTypes) => (
                    <Board board={board} key={board.id} />
                ))}
            </div>

            <div
                onClick={handleAddBoard}
                className="flex w-[275px] cursor-pointer items-center gap-4 rounded-br-[32px] rounded-tr-[32px] py-4 pl-8"
            >
                <img src={BoardPurpleIcon} alt="Board Purple Icon" />
                <Heading variant="m" className="text-primary dark:text-primary">
                    + Create New Board
                </Heading>
            </div>
        </div>
    );
}
