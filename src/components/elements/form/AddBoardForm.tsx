import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { BoardProps, ColumnTypes, addBoard } from "@features/boardSlice";
import { closeModal } from "@features/modalSlice";
import Input from "@elements/input";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import Delete from "@icons/delete.svg";

export default function AddBoardForm() {
    const [state, setState] = React.useState({
        title: "Add New Board",
        content: {
            title: {
                name: "name",
                type: "text",
                placeholder: "e.g. Web Design",
            },
            columns: [
                { id: "200", title: "To Do" },
                { id: "201", title: "Doing" },
                { id: "202", title: "Done" },
            ],
        },
    });

    const handleAddColumn = (event: React.MouseEvent) => {
        event?.stopPropagation();
        setState((prevState) => ({
            ...prevState,
            content: {
                ...prevState.content,
                columns: [
                    ...prevState.content.columns,
                    { id: nanoid(), title: "" },
                ],
            },
        }));
    };

    const handleDeleteColumn = (event: React.MouseEvent, id: string) => {
        event.stopPropagation();
        setState((prevState) => ({
            ...prevState,
            content: {
                ...prevState.content,
                columns: prevState.content.columns.filter(
                    (column) => column.id !== id,
                ),
            },
        }));
    };

    const dispatch = useDispatch();
    const handleAddBoard = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.currentTarget));

        const columns = Object.keys(data)
            .filter((key) => key.startsWith("column"))
            .map((key) => ({ id: nanoid(), name: data[key] }));

        const newBoard: BoardProps = {
            id: nanoid(),
            name: data.name as string,
            columns: columns as ColumnTypes[],
        };

        dispatch(addBoard(newBoard));
        dispatch(closeModal());
    };

    return (
        <form
            onSubmit={handleAddBoard}
            className="flex flex-col gap-6 bg-white dark:bg-darkGrey"
        >
            <Heading variant="l" className="text-black dark:text-white">
                {state.title}
            </Heading>

            <Input
                name={state.content.title.name}
                placeholder={state.content.title.placeholder}
                type={"text"}
                disabled={true}
            />

            <div>
                <Text
                    variant="medium"
                    className="font-bold text-mediumGrey dark:text-mediumGrey"
                >
                    Columns
                </Text>

                <div className="flex flex-col gap-3">
                    {state.content.columns.length > 0
                        ? state.content.columns.map((column, index) => (
                              <div
                                  className="flex items-center gap-4"
                                  key={column.id}
                              >
                                  <Input
                                      name={`column${index}`}
                                      placeholder={column.title}
                                      type="text"
                                      defaultValue={column.title}
                                  />
                                  <img
                                      src={Delete}
                                      alt="Delete Icon"
                                      className="cursor-pointer"
                                      onClick={(event) =>
                                          handleDeleteColumn(event, column.id)
                                      }
                                  />
                              </div>
                          ))
                        : null}
                    <Button
                        variant="secondary"
                        onClick={(event) => handleAddColumn(event)}
                        className="px-4 py-2"
                    >
                        <Text
                            variant="medium"
                            className="text-primary dark:text-primary"
                        >
                            +Add New Column
                        </Text>
                    </Button>
                </div>
            </div>

            <Button variant="primary" className="py-2">
                Create New Board
            </Button>
        </form>
    );
}
