import { useStateProvider } from "@context/StateProvider";
import BoardList from "./BoardList";
import SidebarBottom from "./SidebarBottom";

export default function Sidebar() {
    const { sidebarState } = useStateProvider();

    return (
        <aside
            className={`flex h-full flex-col justify-between border-lines bg-white py-4 dark:bg-darkGrey ${sidebarState ? "w-[300px] border-r-2" : "border-r-none w-0"}`}
        >
            {sidebarState ? (
                <>
                    <BoardList />
                    <SidebarBottom />
                </>
            ) : null}
        </aside>
    );
}
