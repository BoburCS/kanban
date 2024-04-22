import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { InitialStateProps, resetActiveBoard, setActiveBoard } from "@features/boardSlice";
import Heading from "../heading";
import BoardIcon from "@icons/board.svg";
import BoardIconWhite from "@icons/board-active.svg";

interface BoardProps {
    board: {
        id: string;
        title: string;
    };
}

export default function Board({ board }: BoardProps) {
    const { id, title } = board;
    const dispatch = useDispatch();
    const { activeBoardId } = useSelector((state: RootState) => state.board) as InitialStateProps;

    const handleClick = (board: { id: string, title: string }) => {
        if (activeBoardId === id) {
            dispatch(resetActiveBoard());
            return;
        }
        dispatch(setActiveBoard(board));
    };

    return (
        <div
            className={`flex w-[275px] cursor-pointer items-center gap-4 rounded-br-[32px] rounded-tr-[32px] py-4 pl-8 ${activeBoardId === id ? "bg-primary" : ""}`}
            onClick={() => handleClick(board)}
        >
            <img
                src={activeBoardId === id ? BoardIconWhite : BoardIcon}
                alt="Board Icon"
            />
            <Heading
                variant="m"
                className={`${activeBoardId === id ? "text-white dark:text-white" : "text-mediumGrey dark:text-mediumGrey"}`}
            >
                {title}
            </Heading>
        </div>
    );
}
