import { useState, useEffect, ReactNode } from "react";
import { WindowActions } from "./WindowActions";
import { AppState } from "../../lib/types";
import useAppStore from "../../stores/useAppStore";

export const WindowTemplate = ({
  children,
  app,
}: {
  children: ReactNode;
  app: AppState;
}) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const { setCurrentApp, currentApp } = useAppStore();

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging && app) {
        setPosition({
          x: event.clientX - dragOffset.x,
          y: event.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, app]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setCurrentApp(app);
    if (app) {
      setIsDragging(true);
      setDragOffset({
        x: event.clientX - position.x,
        y: event.clientY - position.y,
      });
    }
  };

  if (!app || app.isMinimized) {
    return null;
  }

  return (
    <div
      className="absolute shadow-lg"
      style={{
        width: app?.isMaximized ? "100%" : app?.width,
        height: app?.isMaximized ? "calc(100% - 80px)" : app?.height,
        top: position.y,
        left: position.x,
        zIndex: app.name === currentApp?.name ? 70 : 30,
      }}
    >
      <div
        className="bg-window-blue  p-2 cursor-move h-10 flex justify-between rounded-t-xl"
        onMouseDown={handleMouseDown}
      >
        <div className="flex justify-center items-center gap-2">
          <img className="h-5 w-5" src={app.icon} />
          <div className="text-white font-bold">{app.name}</div>
        </div>
        <WindowActions app={app} />
      </div>
      <div className=" border-2 border-window-blue bg-gray-200 h-full">
        {children}
      </div>
    </div>
  );
};
