import { AppItemInfo } from "../../lib/types";
import useWindowManager from "../../stores/useWindowManager";

interface TaskbarItemProps {
  app: AppItemInfo;
  windowId: string;
}

export const TaskbarItem = ({ app, windowId }: TaskbarItemProps) => {
  const { windows, toggleMinimize, bringWindowToFront } = useWindowManager();

  const window = windows.find((w) => w.id === windowId);
  const isActive = window?.isFocused;

  const handleClick = () => {
    if (!window) return;

    if (window.isMinimized) {
      toggleMinimize(windowId);
      bringWindowToFront(windowId);
    } else if (isActive) {
      toggleMinimize(windowId);
    } else {
      bringWindowToFront(windowId);
    }
  };

  return (
    <div className="flex" onClick={handleClick}>
      <div
        className={`h-7 px-3 font-xp flex justify-center items-center rounded opacity-70 ${
          isActive ? "bg-taskbar-blue-light" : "bg-taskbar-blue"
        } ${window?.isMinimized ? "opacity-50" : ""}`}
      >
        <img className="h-5 w-5" src={app.icon} alt={app.name} />
        <div className="text-white text-sm px-2">{app.name}</div>
      </div>
    </div>
  );
};
