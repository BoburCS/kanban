import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { InitialStateProps } from "@features/boardSlice";
import Logo from "@ui/logo";
import Heading from "@ui/heading";
import Button from "@ui/button";
import MenuThreeDots from "@icons/menu-dots.svg";
import { showModal } from "@features/modalSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    const { activeBoard } = useSelector(
        (state: RootState) => state.board,
    ) as InitialStateProps;

    const handleAddTask = () => {
        const payload = {
            title: "Add New Task",
            modalType: "AddTaskForm"
        };

        dispatch(showModal(payload));
    };

    const handleDeleteBoard = () => {
        const payload = {
            title: "Delete This Board",
            modalType: "DeleteBoard",
        };
        dispatch(showModal(payload));
    }

    return (
        <nav className="flex w-full bg-white dark:bg-darkGrey">
            <div>
                <Logo />
            </div>

            <div className="flex w-full items-center justify-between px-6">
                <Heading variant="xl">{activeBoard?.name}</Heading>

                <div className="flex items-center gap-6">
                    <Button variant="primary" onClick={handleAddTask}>
                        <Heading variant="m" className="text-white">
                            + Add New Task
                        </Heading>
                    </Button>
                    <img src={MenuThreeDots} alt="Icon menu three dots" onClick={handleDeleteBoard} />
                </div>
            </div>
        </nav>
    );
}
