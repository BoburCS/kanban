import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { ModalState } from "@features/modalSlice";
import { useStateProvider } from "@context/StateProvider";
import Navbar from "@containers/navbar";
import Sidebar from "@containers/sidebar";
import Modal from "@elements/modal";
import Button from "@ui/button";
import Eye from "@icons/eye.svg";
import Main from "@containers/main";

export default function App() {
    const { sidebarState, handleSidebarState } = useStateProvider();
    const { isOpen } = useSelector((state: RootState) => state.modal) as ModalState;

    return (
        <>
            <main className="relative flex h-screen flex-col">
                <Navbar />
                <div className={`w-full flex-grow ${sidebarState ? "main-layout" : "flex"}`}>
                    <Sidebar />
                    <Main />
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
            {isOpen ? <Modal /> : null}            
        </>
    );
}
