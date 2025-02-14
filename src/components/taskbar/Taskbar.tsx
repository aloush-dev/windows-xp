import { StartButton } from "./StartButton";

import { TaskbarItem } from "./TaskbarItem";
import { TaskbarShortcuts } from "./Shortcuts";
import { SystemTray } from "./SystemTray";
import useWindowManager from "../../stores/useWindowManager";
import useAppStore from "../../stores/useAppStore";

export const Taskbar = () => {
  const { installedApps } = useAppStore();

  const { windows } = useWindowManager();
  return (
    <div className="h-8 bg-[linear-gradient(to_bottom,#0058ee_0%,#3593ff_4%,#288eff_6%,#127dff_8%,#036ffc_10%,#0262ee_14%,#0057e5_20%,#0054e3_24%,#0055eb_56%,#005bf5_66%,#026afe_76%,#0062ef_86%,#0052d6_92%,#0040ab_94%,#003092_100%)] fixed bottom-0 w-full z-30 flex items-center shadow-md justify-between">
      <StartButton />
      <TaskbarShortcuts />
      <div className="flex-1 flex items-center">
        {windows.map((window) => {
          const app = Object.values(installedApps).find(
            (app) => app.id === window.appId
          );

          if (!app) return null;

          return <TaskbarItem key={window.id} app={app} windowId={window.id} />;
        })}
      </div>

      <SystemTray />
    </div>
  );
};
