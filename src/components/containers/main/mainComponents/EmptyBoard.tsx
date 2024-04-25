import Button from "@ui/button";
import Heading from "@ui/heading";

export default function EmptyBoard() {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <Heading
                variant="l"
                className="text-mediumGrey dark:text-mediumGrey"
            >
                This board is empty. Create a new column to get started.
            </Heading>
            <Button variant="primary">+ Add New Column</Button>
        </div>
    );
}
