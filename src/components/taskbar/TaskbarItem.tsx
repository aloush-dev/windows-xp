import { AppItemInfo } from "../../lib/types";
import useAppStore from "../../stores/useAppStore";

interface TaskbarItemProps {
  app: AppItemInfo;
}

export const TaskbarItem = ({ app }: TaskbarItemProps) => {
  const { currentApp, setCurrentApp } = useAppStore();

  const isActive = currentApp?.title === app.title;

  const handleClick = () => {
    if (isActive) {
      setCurrentApp(null);
    } else {
      setCurrentApp(app);
    }
  };

  return (
    <button className="flex" onClick={handleClick}>
      <div
        className={`h-8  px-3  font-xp flex justify-center items-center rounded ${
          isActive ? "bg-taskbar-blue-light" : "bg-taskbar-blue"
        } `}
      >
        <img className="h-5 w-5 " src={app.icon} />
        <div className="text-white  text-sm px-2">{app.title}</div>
      </div>
    </button>
  );
};
