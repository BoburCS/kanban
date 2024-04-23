import { closeModal } from "@features/modalSlice";
import Button from "@ui/button";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { useDispatch } from "react-redux";

export default function Popover() {
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(closeModal());
    };

    return (
        <div className="flex flex-col gap-6">
            <Heading
                variant="l"
                className="text-destructive dark:text-destructive"
            >
                Delete This Board
            </Heading>

            <Text
                variant="medium"
                className="text-mediumGrey dark:text-mediumGrey"
            >
                Are you sure you want to delete the ‘Platform Launch’ board?
                This action will remove all columns and tasks and cannot be
                reversed.
            </Text>

            <div className="flex w-full gap-4">
                <Button variant="destructive" className="flex-1">
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
