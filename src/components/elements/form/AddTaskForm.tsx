import React from "react";
import Input from "@elements/input";
import Textarea from "@elements/textarea";
import Button from "@ui/button";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Delete from "@icons/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { nanoid } from "@reduxjs/toolkit";
import { closeModal } from "@features/modalSlice";
import { BoardStateTypes } from "src/types";
import { useCreateTaskMutation } from "@services/taskApi";

export default function AddTaskForm() {
  const dispatch = useDispatch();
  const [useCreateTask] = useCreateTaskMutation();

  const { activeBoard, activeBoardId } = useSelector(
    (state: RootState) => state.board,
  ) as BoardStateTypes;

  const [state, setState] = React.useState({
    title: "Add New Task",
    content: {
      title: {
        name: "title",
        type: "text",
        placeholder: "e.g. Take coffee break",
      },
      description: {
        name: "description",
        placeholder:
          "e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.",
      },
      subTasks: [
        { id: "100", placeholder: "e.g. Make coffee" },
        { id: "101", placeholder: "e.g. Make coffee" },
      ],
      status: activeBoard?.columns,
    },
  });

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!activeBoardId) {
      alert("Choose board first to add task!");
      return;
    }

    const data = Object.fromEntries(new FormData(event.currentTarget));

    const subtasks = Object.keys(data)
      .filter((key) => key.startsWith("subtask"))
      .map((key) => ({ id: nanoid(), title: data[key], status: false }));

    useCreateTask({
      title: data.title,
      description: data.description,
      boardId: activeBoardId,
      subTasks: subtasks,
      status: data.status,
    });
    dispatch(closeModal());
  };

  const handleAddSubtask = (event: React.MouseEvent) => {
    event.stopPropagation();
    setState((prevState: any) => ({
      ...prevState,
      content: {
        ...prevState.content,
        subTasks: [
          ...prevState.content.subTasks,
          { id: nanoid(), placeholder: "e.g. Make Coffee" },
        ],
      },
    }));
  };

  const handleRemoveSubtask = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setState((prevState) => ({
      ...prevState,
      content: {
        ...prevState.content,
        subTasks: prevState.content.subTasks.filter(
          (subTask) => subTask.id !== id,
        ),
      },
    }));
  };

  return (
    <form
      onSubmit={handleAddTask}
      className="flex flex-col gap-6 border-darkGrey bg-white dark:bg-darkGrey"
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

      <Textarea
        name={state.content.description.name}
        placeholder={state.content.description.placeholder}
      />

      <div className="flex flex-col gap-2">
        <Text
          variant="medium"
          className="font-bold text-mediumGrey dark:text-mediumGrey"
        >
          Subtasks
        </Text>

        <div className="flex flex-col gap-3">
          {state.content.subTasks.length > 0
            ? state.content.subTasks.map((subTask: any, index) => (
                <div className="flex items-center gap-4" key={subTask.id}>
                  <Input
                    name={`subtask${index}`}
                    placeholder={subTask.placeholder}
                    type="text"
                  />
                  <img
                    src={Delete}
                    alt="Delete Icon"
                    className="cursor-pointer"
                    onClick={(event) => handleRemoveSubtask(subTask.id, event)}
                  />
                </div>
              ))
            : null}
          <Button
            variant="secondary"
            className="px-4 py-2"
            onClick={(event) => handleAddSubtask(event)}
          >
            <Text variant="medium" className="text-primary dark:text-primary">
              +Add New Subtask
            </Text>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="status">
          <Text
            variant="medium"
            className="font-bold text-mediumGrey dark:text-mediumGrey"
          >
            Status
          </Text>
        </label>

        <select
          name="status"
          id="status"
          className="w-full rounded border-[1px] border-solid border-lines px-4 py-2 text-black dark:text-white"
        >
          {state?.content?.status?.length > 0
            ? state?.content?.status?.map((status: any) => (
                <option
                  value={status.name}
                  key={status.id}
                  className="text-black"
                >
                  {status.name}
                </option>
              ))
            : null}
        </select>
      </div>

      <Button variant="primary" className="py-2">
        Create Task
      </Button>
    </form>
  );
}
