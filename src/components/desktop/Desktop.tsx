import { DesktopIcon } from "./DesktopIcon";
import { useDesktopStore } from "../../stores/useDesktopStore";
import useAppStore from "../../stores/useAppStore";
import { WindowTemplate } from "../windows/WindowTemplate";
import { useEffect } from "react";

export const Desktop = () => {
  const { icons, desktopGrid, initialize } = useDesktopStore();
  const { apps } = useAppStore();

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
        {apps.map((app) => (
          <WindowTemplate key={app.name} app={app}>
            <app.component />
          </WindowTemplate>
        ))}
      </div>
    </div>
  );
};
