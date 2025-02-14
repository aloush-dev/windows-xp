import { DesktopIcon } from "./DesktopIcon";
import { useDesktopStore } from "../../stores/useDesktopStore";
import useAppStore from "../../stores/useAppStore";
import { WindowTemplate } from "../windows/WindowTemplate";
import { useEffect } from "react";
import useWindowManager from "../../stores/useWindowManager";

export const Desktop = () => {
  const { icons, desktopGrid, initialize } = useDesktopStore();
  const { installedApps } = useAppStore();
  const { windows } = useWindowManager();

  useEffect(() => {
    initialize();
  }, [initialize]);

  const gridCells = Array.from(
    { length: desktopGrid.rows * desktopGrid.cols },
    (_, index) => {
      const row = Math.floor(index / desktopGrid.cols) + 1;
      const col = (index % desktopGrid.cols) + 1;
      return { row, col };
    }
  );

  return (
    <div className="bg-xp-blue h-screen">
      <div
        className="bg-[url('/images/wallpaper.jpg')] bg-cover bg-center h-screen grid  gap-2 p-4"
        style={{
          gridTemplateColumns: `repeat(${desktopGrid.cols}, 1fr)`,
          gridTemplateRows: `repeat(${desktopGrid.rows}, 1fr)`,
        }}
      >
        {icons.map((icon) => (
          <DesktopIcon key={icon.name} icon={icon} />
        ))}

        {gridCells.map(({ row, col }) => (
          <div
            key={`cell-${row}-${col}`}
            style={{ gridRowStart: row, gridColumnStart: col }}
            className="bg-transparent "
          />
        ))}
        {windows.map((window) => {
          const app = Object.values(installedApps).find(
            (app) => app.id === window.appId
          );

          if (!app) return null;

          return (
            <WindowTemplate key={window.id} window={window} app={app}>
              <app.component />
            </WindowTemplate>
          );
        })}
      </div>
    </div>
  );
};
