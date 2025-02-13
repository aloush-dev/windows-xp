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
        return state; // Prevent duplicates
      }
      const newApp: AppState = {
        ...app,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
      };
      state.currentApp = newApp;
      return { apps: [...state.apps, newApp] };
    });
  },
  removeApp: (app: AppItemInfo) => {
    set((state) => ({
      apps: state.apps.filter((a) => a.title !== app.title),
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
    }));
  },
  maximizeApp: (app: AppItemInfo) => {
    set((state) => ({
      apps: state.apps.map((a) =>
        a.title === app.title ? { ...a, isMaximized: true } : a
      ),
    }));
  },
  restoreApp: (app: AppItemInfo) => {
    set((state) => ({
      apps: state.apps.map((a) =>
        a.title === app.title
          ? { ...a, isMinimized: false, isMaximized: false }
          : a
      ),
    }));
  },
}));

export default useAppStore;
