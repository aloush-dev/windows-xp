import { WindowState } from "../../lib/types";
import useWindowManager from "../../stores/useWindowManager";

export const WindowActions = ({ window }: { window: WindowState }) => {
  const { closeWindow, maximizeWindow, minimizeWindow } = useWindowManager();

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

  return (
    <div className="title-bar-controls">
      <button aria-label="Minimize" onClick={handleMinimize}></button>
      <button aria-label="Maximize" onClick={handleMaximize}></button>
      <button aria-label="Close" onClick={handleClose}></button>
    </div>
  );
};
