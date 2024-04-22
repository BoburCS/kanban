import { useStateProvider } from "@context/StateProvider";
import Navbar from "@containers/navbar";
import Sidebar from "@containers/sidebar";
import Button from "@ui/button";
import Eye from "@icons/eye.svg";

export default function App() {
    const { sidebarState, handleSidebarState } = useStateProvider();

    return (
        <main className="relative flex h-screen flex-col">
            <Navbar />
            <div className="flex w-full flex-grow">
                <Sidebar />
                <main className="w-full flex-1 flex-grow bg-secondary dark:bg-veryDarkGrey"></main>
            </div>

            {sidebarState ? null : (
                <Button
                    variant="primary"
                    onClick={handleSidebarState}
                    className="absolute left-0 top-[90%] rounded-bl-none rounded-tl-none"
                >
                    <img src={Eye} alt="Icon eye" />
                </Button>
            )}
        </main>
    );
}
