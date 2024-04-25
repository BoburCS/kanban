import { useStateProvider } from "@context/StateProvider";
import BoardList from "./boardlist/BoardList";
import SidebarBottom from "./SidebarBottom";
import { useGetBoardsQuery } from "@services/boardApi";

export default function Sidebar() {
    const { sidebarState } = useStateProvider();
    const { data: boards, isSuccess } = useGetBoardsQuery(undefined);

    return (
        <aside
            className={`flex h-full flex-col justify-between border-lines bg-white py-4 dark:bg-darkGrey ${sidebarState ? "w-[300px] border-r-2" : "border-r-none w-0"}`}
        >
            {sidebarState ? (
                <>
                    <BoardList boards={isSuccess ? boards : []} />
                    <SidebarBottom />
                </>
            ) : null}
        </aside>
    );
}
