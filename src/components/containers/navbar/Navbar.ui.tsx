import Logo from "@ui/logo";
import Button from "@ui/button";
import Heading from "@ui/heading";
import MenuThreeDots from "@icons/menu-dots.svg";
import { BoardTypes } from "../../../types";

export default function NavbarUI({
  activeBoard,
  handleAddTask,
  handleDeleteBoard,
}: {
  activeBoard: BoardTypes | null;
  handleAddTask: () => void;
  handleDeleteBoard: () => void;
}) {
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
          <img
            src={MenuThreeDots}
            alt="Icon menu three dots"
            onClick={handleDeleteBoard}
          />
        </div>
      </div>
    </nav>
  );
}
