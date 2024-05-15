import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { resetActiveBoard, setActiveBoard } from "@features/boardSlice";
import Heading from "@ui/heading";
import BoardIcon from "@icons/board.svg";
import BoardIconWhite from "@icons/board-active.svg";
import { BoardTypes, BoardStateTypes } from "../../../types";

export default function Board({ board }: { board: BoardTypes }) {
  const { _id, title } = board;
  const dispatch = useDispatch();
  const { activeBoardId } = useSelector(
    (state: RootState) => state.board,
  ) as BoardStateTypes;

  const handleClick = (board: BoardTypes) => {
    if (activeBoardId === _id) {
      dispatch(resetActiveBoard());
      return;
    }
    dispatch(setActiveBoard(board));
  };

  return (
    <div
      className={`flex w-[275px] cursor-pointer items-center gap-4 rounded-br-[32px] rounded-tr-[32px] py-4 pl-8 
      ${activeBoardId === _id ? "bg-primary" : ""}`}
      onClick={() => handleClick(board)}
    >
      <img
        src={activeBoardId === _id ? BoardIconWhite : BoardIcon}
        alt="Board Icon"
      />
      <Heading
        variant="m"
        className={`${activeBoardId === _id ? "text-white dark:text-white" : "text-mediumGrey dark:text-mediumGrey"}`}
      >
        {title}
      </Heading>
    </div>
  );
}
