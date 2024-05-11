import { TaskTypes } from "src/types";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { useDispatch } from "react-redux";
import { showModal } from "@features/modalSlice";

export default function Task({
  id,
  title,
  description,
  subTasks,
  status,
  // boardId
}: TaskTypes) {
  const dispatch = useDispatch();
  const handleClick = (id: string) => {
    const payload = {
      title: "",
      modalType: "ShowTask",
      task: { id, title, description, subTasks, status },
    };
    dispatch(showModal(payload));
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className="w-full cursor-pointer rounded bg-white px-4 py-6 dark:bg-darkGrey"
    >
      <Heading variant="m">{title}</Heading>
      <Text variant="medium" className="text-mediumGrey dark:text-mediumGrey">
        0 of {subTasks?.length} subtasks
      </Text>
    </div>
  );
}
