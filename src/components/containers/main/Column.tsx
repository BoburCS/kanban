import { useEffect, useState } from "react";
import Task from "@elements/task";
import Heading from "@ui/heading";
import { useGetTasksQuery } from "@services/taskApi";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";

const colors = ["bg-cyan-500", "bg-purple-500", "bg-teal-500"]; 

export default function Column({ name }: any) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const [tasks, setTasks] = useState([]);
    const { activeBoardId } = useSelector((state: RootState) => state.board);
    const { data, isSuccess } = useGetTasksQuery(activeBoardId);

    useEffect(() => {
        if (isSuccess) {
            setTasks(data.filter((task: any) => task.status === name));
        }
    }, [data, name, isSuccess]);

    
    return (
        <div className="flex w-[280px] flex-col gap-6">
            <div className="flex items-center gap-3">
                <div className={`h-4 w-4 rounded-full ${randomColor}`}></div>
                <Heading variant="s">
                    {name} ({tasks?.length})
                </Heading>
            </div>

            <div className="flex flex-col gap-5">
                {tasks
                    ? tasks.length > 0
                        ? tasks.map((task) => <Task {...task} key={task.id} />)
                        : null
                    : null}
            </div>
        </div>
    );
}
