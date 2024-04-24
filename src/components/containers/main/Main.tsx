import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import { BoardStateTypes } from "src/types";
import Column from "./Column";
import Button from "@ui/button";
import Heading from "@ui/heading";

export default function Main() {
    const { activeBoard } = useSelector(
        (state: RootState) => state.board,
    ) as BoardStateTypes;

    return (
        <div className="flex w-full flex-1 flex-grow items-center justify-center bg-secondary dark:bg-veryDarkGrey">
            {activeBoard ? (
                <div className="flex h-full w-full items-center justify-center">
                    {activeBoard.columns.length > 0 ? (
                        <div className="flex h-full w-full gap-5 p-6">
                            {activeBoard.columns.map((column) => (
                                <Column {...column} key={column.id} />
                            ))}
                            <div
                                className="justify-cetner flex h-full w-[280px] items-center rounded"
                                style={{ background: "var(--linear-gradient)" }}
                            >
                                <Heading
                                    variant="xl"
                                    className="w-full text-center text-mediumGrey dark:text-mediumGrey"
                                >
                                    + New Column
                                </Heading>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-8">
                            <Heading
                                variant="l"
                                className="text-mediumGrey dark:text-mediumGrey"
                            >
                                This board is empty. Create a new column to get
                                started.
                            </Heading>
                            <Button variant="primary">+ Add New Column</Button>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
}
