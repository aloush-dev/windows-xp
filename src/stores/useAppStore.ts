import { create } from "zustand";
import { AppItemInfo } from "../lib/types";

interface AppState extends AppItemInfo {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
}

interface AppStore {
  apps: AppState[];
  currentApp: AppState | null;
  addApp: (app: AppItemInfo) => void;
  removeApp: (app: AppItemInfo) => void;
  setCurrentApp: (app: AppItemInfo | null) => void;
  minimizeApp: (app: AppItemInfo) => void;
  maximizeApp: (app: AppItemInfo) => void;
  restoreApp: (app: AppItemInfo) => void;
}

const useAppStore = create<AppStore>((set) => ({
  apps: [],
  currentApp: null,
  addApp: (app: AppItemInfo) => {
    set((state) => {
      if (state.apps.find((a) => a.title === app.title)) {
        return state;
      }
      const newApp: AppState = {
        ...app,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
      };
      return { apps: [...state.apps, newApp] };
    });
  },
  removeApp: (app: AppItemInfo) => {
    set((state) => ({
      apps: state.apps.filter((a) => a.title !== app.title),
      currentApp:
        state.currentApp?.title === app.title ? null : state.currentApp,
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
      apps: state.apps.map((a) =>
        a.title === app.title ? { ...a, isMinimized: true } : a
      ),
      currentApp: null,
    }));
  },
  maximizeApp: (app: AppItemInfo) => {
    set((state) => ({
      apps: state.apps.map((a) =>
        a.title === app.title ? { ...a, isMaximized: true } : a
      ),
      currentApp:
        state.currentApp?.title === app.title
          ? { ...state.currentApp, isMaximized: true }
          : state.currentApp,
    }));
  },
  restoreApp: (app: AppItemInfo) => {
    set((state) => ({
      apps: state.apps.map((a) =>
        a.title === app.title
          ? { ...a, isMinimized: false, isMaximized: false }
          : a
      ),
      currentApp:
        state.currentApp?.title === app.title
          ? { ...state.currentApp, isMinimized: false, isMaximized: false }
          : state.currentApp,
    }));
  },
}));

export default useAppStore;
