import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { BoardStateTypes, ColumnTypes, TaskTypes } from "../../../types";
import Heading from "@ui/heading";
import Text from "@ui/text";
import MenuDots from "@icons/menu-dots.svg";
import { showModal } from "@features/modalSlice";
import { useUpdateTaskMutation } from "@services/taskApi";
import { useState } from "react";

export default function TaskDetailsForm({ task }: { task: TaskTypes }) {
  const dispatch = useDispatch();
  const { title, description, subTasks, status, id } = task;
  const [localSubTasks, setLocalSubTasks] = useState(subTasks);

  const { activeBoard } = useSelector(
    (state: RootState) => state.board,
  ) as BoardStateTypes;

  const handleDeleteTask = (id: string) => {
    const payload: {
      modalType: string;
      taskId: { id: string; title: string };
    } = {
      modalType: "DeleteTask",
      taskId: { id, title },
    };
    dispatch(showModal(payload));
  };

  const [useUpdateTask] = useUpdateTaskMutation();

  const handleChange = async (subTaskId: string) => {
    const subtask = localSubTasks.find((subTask) => subTask.id === subTaskId);
    if (subtask) {
      const updatedSubtask = { ...subtask, status: !subtask.status };
      try {
        const updatedTask = {
          ...task,
          subTasks: localSubTasks.map((subTask) =>
            subTask.id === subTaskId ? updatedSubtask : subTask,
          ),
        };
        await useUpdateTask(updatedTask);
        setLocalSubTasks(updatedTask.subTasks);
      } catch (error) {
        console.error("Failed to update task", error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Heading variant="l">{title}</Heading>
        <img
          src={MenuDots}
          alt="Icon Menu Dots"
          onClick={() => handleDeleteTask(id)}
        />
      </div>
      <Text variant="medium" className="text-mediumGrey dark:text-mediumGrey">
        {description}
      </Text>
      <div className="flex flex-col gap-2">
        {localSubTasks.length > 0
          ? localSubTasks.map((subTask: any) => (
              <div
                className="flex items-center gap-5 rounded bg-secondary p-4 dark:bg-veryDarkGrey"
                key={subTask.id}
              >
                <input
                  onChange={() => handleChange(subTask.id)}
                  type="checkbox"
                  checked={subTask.status}
                />
                <p
                  className={`text-xxs flex-1 font-bold text-black dark:text-white ${subTask.status ? "text-mediumGrey line-through" : ""}`}
                >
                  {subTask.title}
                </p>
              </div>
            ))
          : null}
      </div>
      <div>
        <select className="w-full rounded border-2 border-lines px-4 py-2 text-black dark:text-white">
          <option value={status}>{status}</option>
          {activeBoard?.columns.map((column: ColumnTypes) => (
            <option value={column.name} key={column.id}>
              {column.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
