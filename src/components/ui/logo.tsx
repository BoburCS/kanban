import { useTheme } from "@context/ThemeProvider";
import { useStateProvider } from "@context/StateProvider";
import LogoWithBrand from "@images/logoWithBrand.svg";
import LogoWithBrandLight from "@images/logoWithBrandLight.svg";

export default function Logo() {
    const { theme } = useTheme();
    const { sidebarState } = useStateProvider();

    return (
        <div
            className={`h-full border-r-2 border-lines px-8 pb-7 pt-5  ${sidebarState ? "w-[300px]" : ""}`}
        >
            <img
                src={theme === "dark" ? LogoWithBrandLight : LogoWithBrand}
                alt="Logo"
            />
        </div>
    );
}
