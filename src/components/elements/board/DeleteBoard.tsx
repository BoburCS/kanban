import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { useDeleteBoardMutation } from "@services/boardApi";
import { closeModal } from "@features/modalSlice";
import Button from "@ui/button";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { useDeleteAllTasksMutation } from "@services/taskApi";
import { resetActiveBoard } from "@features/boardSlice";

export default function DeleteBoard() {
  const dispatch = useDispatch();
  const { activeBoard } = useSelector((state: RootState) => state.board);

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const [useDeleteBoard] = useDeleteBoardMutation();
  const [useDeleteAllTasks] = useDeleteAllTasksMutation();

  const handleDeleteBoard = () => {
    useDeleteBoard(activeBoard?.id);
    useDeleteAllTasks(activeBoard?.id);
    dispatch(resetActiveBoard());
    dispatch(closeModal());
  };

  return (
    <div className="flex flex-col gap-6">
      <Heading variant="l" className="text-destructive dark:text-destructive">
        Delete This Board
      </Heading>

      <Text variant="medium" className="text-mediumGrey dark:text-mediumGrey">
        Are you sure you want to delete the "{activeBoard?.name}" board? This
        action will remove all columns and tasks and cannot be reversed.
      </Text>

      <div className="flex w-full gap-4">
        <Button
          variant="destructive"
          className="flex-1"
          onClick={handleDeleteBoard}
        >
          Delete
        </Button>
        <Button
          onClick={handleCancel}
          className="flex-1 bg-mediumGrey px-4 py-2 text-primary dark:bg-mediumGrey dark:text-primary"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
