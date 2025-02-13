import close from "./svg/close.svg";
import closeHover from "./svg/close-hover.svg";
import closeActive from "./svg/close-active.svg";
import Maximize from "./svg/maximize.svg";
import MaximizeHover from "./svg/maximize-hover.svg";
import MaximizeActive from "./svg/maximize-active.svg";
import Minimize from "./svg/minimize.svg";
import MinimizeHover from "./svg/minimize-hover.svg";
import MinimizeActive from "./svg/minimize-active.svg";
import useAppStore from "../../stores/useAppStore";
import { useState } from "react";
import { AppState } from "../../lib/types";

export const WindowActions = ({ app }: { app: AppState }) => {
  const { minimizeApp, maximizeApp, removeApp, restoreApp } = useAppStore();
  const [hoveredButton, setHoveredButton] = useState<
    "close" | "maximize" | "minimize" | null
  >(null);
  const [activeButton, setActiveButton] = useState<
    "close" | "maximize" | "minimize" | null
  >(null);

  const handleClose = () => {
    if (app) {
      removeApp(app);
    }
  };

  const handleMinimize = () => {
    if (app) {
      minimizeApp(app);
    }
  };

  const handleMaximize = () => {
    if (app) {
      if (app.isMaximized) {
        restoreApp(app);
      } else {
        maximizeApp(app);
      }
    }
  };

  return (
    <div className="flex justify-end gap-0.5">
      <button
        className="window-action-button"
        onMouseEnter={() => setHoveredButton("minimize")}
        onMouseLeave={() => setHoveredButton(null)}
        onMouseDown={() => setActiveButton("minimize")}
        onMouseUp={() => setActiveButton(null)}
      >
        <img
          src={
            activeButton === "minimize"
              ? MinimizeActive
              : hoveredButton === "minimize"
              ? MinimizeHover
              : Minimize
          }
          alt="Minimize"
          className="h-6 w-6"
          onClick={handleMinimize}
        />
      </button>

      <button
        className="window-action-button"
        onMouseEnter={() => setHoveredButton("maximize")}
        onMouseLeave={() => setHoveredButton(null)}
        onMouseDown={() => setActiveButton("maximize")}
        onMouseUp={() => setActiveButton(null)}
      >
        <img
          src={
            activeButton === "maximize"
              ? MaximizeActive
              : hoveredButton === "maximize"
              ? MaximizeHover
              : Maximize
          }
          alt="Maximize"
          className="h-6 w-6"
          onClick={handleMaximize}
        />
      </button>

      <button
        className="window-action-button"
        onMouseEnter={() => setHoveredButton("close")}
        onMouseLeave={() => setHoveredButton(null)}
        onMouseDown={() => setActiveButton("close")}
        onMouseUp={() => setActiveButton(null)}
      >
        <img
          src={
            activeButton === "close"
              ? closeActive
              : hoveredButton === "close"
              ? closeHover
              : close
          }
          alt="Exit"
          className="h-6 w-6"
          onClick={handleClose}
        />
      </button>
    </div>
  );
};
