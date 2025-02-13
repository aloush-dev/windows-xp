import { useState, useEffect, ReactNode } from "react";
import useAppStore from "../../stores/useAppStore";
import { WindowActions } from "./WindowActions";

export const WindowTemplate = ({ children }: { children: ReactNode }) => {
  const currentApp = useAppStore((state) => state.currentApp);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging && currentApp) {
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
  }, [isDragging, dragOffset, currentApp]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (currentApp) {
      setIsDragging(true);
      setDragOffset({
        x: event.clientX - position.x,
        y: event.clientY - position.y,
      });
    }
  };

  if (!currentApp || currentApp.isMinimized) {
    return null;
  }

  return (
    <div
      className="absolute z-30 shadow-lg"
      style={{
        width: currentApp?.isMaximized ? "100%" : currentApp?.width,
        height: currentApp?.isMaximized ? "100%" : currentApp?.height,
        top: position.y,
        left: position.x,
      }}
    >
      <div
        className="bg-window-blue  p-2 cursor-move h-10 flex justify-between rounded-t-xl"
        onMouseDown={handleMouseDown}
      >
        <div className="flex justify-center items-center gap-2">
          <img className="h-5 w-5" src={currentApp.icon} />
          <div className="text-white font-bold">{currentApp.title}</div>
        </div>
        <WindowActions />
      </div>
      <div className=" border-2 border-window-blue bg-gray-200 h-full">
        {/* Add your window content here */}
        {children}
      </div>
    </div>
  );
};
