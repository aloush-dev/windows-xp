import { StartButton } from "./StartButton";

import { TaskbarItem } from "./TaskbarItem";
import useAppStore from "../../stores/useAppStore";
import { TaskbarShortcuts } from "./Shortcuts";
import { SystemTray } from "./SystemTray";

export const Taskbar = () => {
  const { apps } = useAppStore();
  return (
    <div className="h-8 bg-taskbar-blue fixed bottom-0 w-full z-30 flex items-center shadow-md justify-between">
      <StartButton />
      <TaskbarShortcuts />
      <div className="flex-1 flex items-center">
        {apps.map((app) => (
          <TaskbarItem key={app.name} app={app} />
        ))}
      </div>

      <SystemTray />
    </div>
  );
};
