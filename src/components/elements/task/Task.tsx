import { TaskTypes } from "@features/boardSlice";
import Heading from "@ui/heading";
import Text from "@ui/text";

export default function Task({ title, subTasks }: TaskTypes) {
    return (
        <div className="w-full cursor-pointer rounded bg-white px-4 py-6 dark:bg-darkGrey">
            <Heading variant="m">{title}</Heading>
            <Text
                variant="medium"
                className="text-mediumGrey dark:text-mediumGrey"
            >
                0 of {subTasks?.length} subtasks
            </Text>
        </div>
    );
}
