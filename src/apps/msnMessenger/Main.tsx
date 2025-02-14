import useAppStore from "../../stores/useAppStore";
import useWindowManager from "../../stores/useWindowManager";
import { useEffect } from "react";

export const MessengerMainWindow = () => {
  const { currentApp } = useAppStore();
  const createWindow = useWindowManager((state) => state.createWindow);
  const windows = useWindowManager((state) => state.windows);

  // Get the window ID for the current app
  const currentWindow = windows.find(
    (window) => window.appId === currentApp?.id
  );

  useEffect(() => {
    if (currentApp && !currentWindow) {
      createWindow(currentApp.id, "MSN Messenger");
    }
  }, [currentApp, currentWindow, createWindow]);

  if (!currentWindow) {
    return <div>Loading...</div>;
  }

  return <div className="relative w-full h-full"></div>;
};
