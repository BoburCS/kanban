import { useTheme } from "@context/ThemeProvider";
import { useStateProvider } from "@context/StateProvider";
import Heading from "@ui/heading";
import Sun from "@icons/sun.svg";
import Moon from "@icons/moon.svg";
import EyeSlash from "@icons/eye-slash.svg";

export default function SidebarBottom() {
  const { theme, handleTheme } = useTheme();
  const { handleSidebarState } = useStateProvider();

  return (
    <div className="flex w-full flex-col gap-2 self-center px-6 pb-8">
      <div className="flex w-full items-center justify-center gap-6 rounded bg-secondary py-4 dark:bg-veryDarkGrey">
        <img src={Sun} alt="Sun Icon" />

        <div
          className="flex h-[22px] w-10 cursor-pointer items-center rounded-full bg-primary px-1"
          onClick={handleTheme}
        >
          <div
            className={`h-[16px] w-[16px] transform rounded-full bg-white transition-transform duration-200 ${theme === "dark" ? "translate-x-full" : ""}`}
          ></div>
        </div>

        <img src={Moon} alt="Moon Icon" />
      </div>

      <div
        className="flex cursor-pointer items-center gap-4"
        onClick={handleSidebarState}
      >
        <img src={EyeSlash} alt="Icon Eye Slash" />
        <Heading variant="m" className="text-mediumGrey dark:text-mediumGrey">
          Hide Sidebar
        </Heading>
      </div>
    </div>
  );
}
