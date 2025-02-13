import { create } from "zustand";
import { TaskbarShortcut } from "../lib/types";
import { loadApp } from "../lib/appUtils";

interface TaskbarStore {
  menuOpen: boolean;
  toggleMenu: () => void;
  shortcuts: TaskbarShortcut[];
  initialize: () => Promise<void>;
}

const useTaskbarStore = create<TaskbarStore>((set, get) => ({
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  shortcuts: [],
  initialize: async () => {
    if (get().shortcuts.length > 0) {
      return;
    }

    try {
      const internetExplorerApp = await loadApp("internetExplorer");
      const windowsMessengerApp = await loadApp("windowsMessenger");

      const initialShortcuts: TaskbarShortcut[] = [
        {
          name: "Internet Explorer",
          icon: "/images/icons/InternetExplorer.png",
          position: 1,
          app: internetExplorerApp,
        },
        {
          name: "Windows Messenger",
          icon: "/images/icons/WindowsMessenger.png",
          position: 2,
          app: windowsMessengerApp,
        },
      ];

      set({ shortcuts: initialShortcuts });
    } catch (error) {
      console.error("Error initializing desktop:", error);
    }
  },
}));

export default useTaskbarStore;
