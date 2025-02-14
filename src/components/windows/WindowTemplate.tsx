import { useState, useEffect, ReactNode } from "react";
import { AppItemInfo, WindowState } from "../../lib/types";
import useWindowManager from "../../stores/useWindowManager";
import { TitleBar } from "../ui/TitleBar";

export const WindowTemplate = ({
  children,
  window,
  app,
}: {
  children: ReactNode;
  window: WindowState;
  app: AppItemInfo;
}) => {
  const {
    updateWindowPosition,
    bringWindowToFront,
    closeWindow,
    maximizeWindow,
    minimizeWindow,
  } = useWindowManager();

  const isFocused = window.isFocused;

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    if (window) {
      closeWindow(window.id);
    }
  };

  const handleMinimize = () => {
    if (window) {
      minimizeWindow(window.id);
    }
  };

  const handleMaximize = () => {
    if (window) {
      maximizeWindow(window.id);
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        updateWindowPosition(
          window.id,
          event.clientX - dragOffset.x,
          event.clientY - dragOffset.y
        );
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    globalThis.window.addEventListener("mousemove", handleMouseMove);
    globalThis.window.addEventListener("mouseup", handleMouseUp);

    return () => {
      globalThis.window.removeEventListener("mousemove", handleMouseMove);
      globalThis.window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, window.id, updateWindowPosition]);

  const handleMouseDown = (event: React.MouseEvent) => {
    bringWindowToFront(window.id);
    if (app) {
      setIsDragging(true);
      setDragOffset({
        x: event.clientX - window.x,
        y: event.clientY - window.y,
      });
    }
  };

  if (window.isMinimized) {
    return null;
  }
  // const borderColor = isFocused
  //   ? "border-[#0058ee] border-2"
  //   : "border-[#7697e7] border-2";

  return (
    <div
      className={`absolute window `}
      style={{
        width: window?.isMaximized ? "100%" : window?.width.toString() + "px",
        height: window?.isMaximized
          ? "calc(100% - 80px)"
          : window?.height.toString() + "px",
        top: window.y,
        left: window.x,
        zIndex: window.zIndex,
      }}
    >
      <TitleBar
        isFocused={isFocused}
        className="flex items-center justify-between"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <img className="h-4 w-4" src={app.icon} />
          <div className="title-bar-text">{app.name}</div>
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={handleMinimize}></button>
          <button aria-label="Maximize" onClick={handleMaximize}></button>
          <button aria-label="Close" onClick={handleClose}></button>
        </div>
      </TitleBar>
      <div
        className={`window-body h-[calc(100%-40px)] overflow-auto`}
      >
        {children}
      </div>
    </div>
  );
};
