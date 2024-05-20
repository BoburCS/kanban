import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import { BoardStateTypes } from "../../../types";
import { Column, EmptyBoard, NewColumn } from "./mainComponents";
import { useGetBoardQuery } from "@services/boardApi";

export default function Main() {
  const { activeBoard, activeBoardId } = useSelector(
    (state: RootState) => state.board,
  ) as BoardStateTypes;

  const { data: board, isSuccess } = useGetBoardQuery(activeBoardId);

  return (
    <>
      {isSuccess ? (
        <div className="flex w-full flex-1 flex-grow items-center justify-center bg-secondary dark:bg-veryDarkGrey">
          {activeBoard ? (
            <div className="flex h-full w-full items-center justify-center">
              {board?.columns?.length > 0 ? (
                <div className="media-scroller h-full w-full p-6">
                  {board.columns.map((column: any) => (
                    <Column {...column} key={column.id} />
                  ))}
                  <NewColumn />
                </div>
              ) : (
                <EmptyBoard />
              )}
            </div>
          ) : (
            <div className="flex-1 flex-grow bg-secondary dark:bg-veryDarkGrey" />
          )}
        </div>
      ) : (
        <div className="flex-1 flex-grow bg-secondary dark:bg-veryDarkGrey" />
      )}
    </>
  );
}
