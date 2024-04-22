import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { InitialStateProps } from "@features/boardSlice";
import Board from "@ui/board/Board";
import Heading from "@ui/heading";
import BoardPurpleIcon from "@icons/board-purple.svg";

export default function BoardList() {
    const { boards } = useSelector((state: RootState) => state.board) as InitialStateProps;

    return (
        <div>
            <Heading variant="s" className="pb-5 pl-8">
                ALL BOARDS ({boards.length})
            </Heading>

            <div>
                {boards.map((board) => (
                    <Board board={board} key={board.id} />
                ))}
            </div>

            <div className="flex w-[275px] cursor-pointer items-center gap-4 rounded-br-[32px] rounded-tr-[32px] py-4 pl-8">
                <img src={BoardPurpleIcon} alt="Board Purple Icon" />
                <Heading variant="m" className="text-primary dark:text-primary">
                    + Create New Board
                </Heading>
            </div>
        </div>
    );
}
