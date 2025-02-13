import { create } from "zustand";
import { AppItemInfo, AppState } from "../lib/types";
import { installedApps, loadApp } from "../lib/appUtils";

interface AppStore {
  openApps: AppState[];
  allApps: { [key: string]: AppItemInfo };
  currentApp: AppState | null;
  addApp: (app: AppItemInfo) => void;
  removeApp: (app: AppItemInfo) => void;
  setCurrentApp: (app: AppItemInfo | null) => void;
  minimizeApp: (app: AppItemInfo) => void;
  maximizeApp: (app: AppItemInfo) => void;
  restoreApp: (app: AppItemInfo) => void;
  initialize: () => Promise<void>;
}

const useAppStore = create<AppStore>((set) => ({
  openApps: [],
  allApps: {},
  currentApp: null,
  addApp: (app: AppItemInfo) => {
    set((state) => {
      if (state.openApps.find((a) => a.name === app.name)) {
        return state;
      }
      const newApp: AppState = {
        ...app,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
      };
      return { openApps: [...state.openApps, newApp] };
    });
  },
  removeApp: (app: AppItemInfo) => {
    set((state) => ({
      openApps: state.openApps.filter((a) => a.name !== app.name),
      currentApp: state.currentApp?.name === app.name ? null : state.currentApp,
    }));
  },
  setCurrentApp: (app: AppItemInfo | null) => {
    set({
      currentApp: app
        ? {
            ...app,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
          }
        : null,
    });
  },
  minimizeApp: (app: AppItemInfo) => {
    set((state) => ({
      openApps: state.openApps.map((a) =>
        a.name === app.name ? { ...a, isMinimized: true } : a
      ),
      currentApp: null,
    }));
  },
  maximizeApp: (app: AppItemInfo) => {
    set((state) => ({
      openApps: state.openApps.map((a) =>
        a.name === app.name ? { ...a, isMaximized: true } : a
      ),
      currentApp:
        state.currentApp?.name === app.name
          ? { ...state.currentApp, isMaximized: true }
          : state.currentApp,
    }));
  },
  restoreApp: (app: AppItemInfo) => {
    set((state) => ({
      openApps: state.openApps.map((a) =>
        a.name === app.name
          ? { ...a, isMinimized: false, isMaximized: false }
          : a
      ),
      currentApp:
        state.currentApp?.name === app.name
          ? { ...state.currentApp, isMinimized: false, isMaximized: false }
          : state.currentApp,
    }));
  },
  initialize: async () => {
    if (Object.keys(useAppStore.getState().allApps).length > 0) {
      return;
    }

    try {
      installedApps.forEach(async (app) => {
        const loadedApp = await loadApp(app);
        set((state) => ({ allApps: { ...state.allApps, [app]: loadedApp } }));
      });
    } catch (error) {
      console.error("Error initializing apps:", error);
    }
  },
}));

export default useAppStore;
