import { useEffect } from "react";
import useAppStore from "../../stores/useAppStore";
import useTaskbarStore from "../../stores/useTaskbarStore";

export const TaskbarShortcuts = () => {
  const { launchApp } = useAppStore();
  const { taskbarShortcuts, initialize } = useTaskbarStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className="flex gap-2 px-4">
      {taskbarShortcuts.map((shortcut) => (
        <div onClick={() => launchApp(shortcut.app)} key={shortcut.name}>
          <img className="h-5 w-5" src={shortcut.icon} />
        </div>
      ))}
    </div>
  );
};
