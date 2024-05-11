import { useDispatch } from "react-redux";
import { useDeleteTaskMutation } from "@services/taskApi";
import { closeModal } from "@features/modalSlice";
import Button from "@ui/button";
import Heading from "@ui/heading";
import Text from "@ui/text";

interface TaskProps {
  id: string;
  title: string;
}

export default function DeleteTaskForm({ id, title }: TaskProps) {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const [useDeleteTask] = useDeleteTaskMutation();

  const handleDeleteTask = () => {
    useDeleteTask(id);
    dispatch(closeModal());
  };

  return (
    <div className="flex flex-col gap-6">
      <Heading variant="l" className="text-destructive dark:text-destructive">
        Delete this task?
      </Heading>

      <Text variant="medium" className="text-mediumGrey dark:text-mediumGrey">
        Are you sure you want to delete the "{title}" task and its subtasks?
        This action cannot be reserved.
      </Text>

      <div className="flex w-full gap-4">
        <Button
          variant="destructive"
          className="flex-1"
          onClick={handleDeleteTask}
        >
          Delete
        </Button>
        <Button
          onClick={handleCancel}
          className="flex-1 bg-mediumGrey px-4 py-2 text-primary dark:bg-mediumGrey"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
