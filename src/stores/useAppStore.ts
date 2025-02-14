import { create } from "zustand";
import useWindowManager from "./useWindowManager";
import { AppItemInfo } from "../lib/types";
import { installedApps } from "../lib/appUtils";

interface AppState {
  installedApps: AppItemInfo[];
  currentApp: AppItemInfo | null;
  runningApps: string[];
  launchApp: (app: AppItemInfo) => void;
  closeApp: (id: string) => void;
  requestNewWindow: (appId: string, title: string) => string;
}

const useAppStore = create<AppState>((set, get) => {
  installedApps.then((apps) => {
    set({ installedApps: apps });
  });

  return {
    installedApps: [],
    currentApp: null,
    runningApps: [],
    launchApp: (app) => {
      get().requestNewWindow(app.id, app.name);

      set((state) => ({
        runningApps: [...state.runningApps, app.id],
        currentApp: app,
      }));
    },
    closeApp: (id) => {
      const windowManager = useWindowManager.getState();
      const windows = windowManager.windows;

      windows
        .filter((window) => window.appId === id)
        .forEach((window) => windowManager.closeWindow(window.id));

      set((state) => ({
        runningApps: state.runningApps.filter((appId) => appId !== id),
        currentApp: state.currentApp?.id === id ? null : state.currentApp,
      }));
    },
    requestNewWindow: (appId, title) => {
      const app = get().installedApps.find((app) => app.id === appId);

      return useWindowManager.getState().createWindow(appId, title, {
        width: app?.width || 800,
        height: app?.height || 600,
      });
    },
  };
});

export default useAppStore;
