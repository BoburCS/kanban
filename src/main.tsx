import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ThemeProvider from "@context/ThemeProvider";
import StateProvider from "@context/StateProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <ThemeProvider>
            <StateProvider>
                <App />
            </StateProvider>
        </ThemeProvider>
    </Provider>
);
