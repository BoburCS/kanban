import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import { BoardStateTypes, ColumnTypes, TaskTypes } from "../../../types";
import Heading from "@ui/heading";
import Text from "@ui/text";
import MenuDots from "@icons/menu-dots.svg";

export default function TaskDetailsForm({ task }: { task: TaskTypes }) {
    const { title, description, subTasks, status } = task;

    const { activeBoard } = useSelector(
        (state: RootState) => state.board,
    ) as BoardStateTypes;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <Heading variant="l">{title}</Heading>
                <img src={MenuDots} alt="Icon Menu Dots" />
            </div>
            <Text
                variant="medium"
                className="text-mediumGrey dark:text-mediumGrey"
            >
                {description}
            </Text>
            <div className="flex flex-col gap-2">
                {subTasks.length > 0
                    ? subTasks.map((subTask: any) => (
                          <div
                              className="flex items-center gap-5 rounded bg-secondary p-4 dark:bg-veryDarkGrey"
                              key={subTask.id}
                          >
                              <input type="checkbox" checked={subTask.status} />
                              <p className="text-xxs flex-1 font-bold text-black dark:text-white">
                                  {subTask.name}
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
