import { create } from "zustand";
import { TaskbarShortcut } from "../lib/types";
import { loadApp } from "../lib/appUtils";

interface TaskbarStore {
  menuOpen: boolean;
  toggleMenu: () => void;
  taskbarShortcuts: TaskbarShortcut[];
  initialize: () => Promise<void>;
}

const useTaskbarStore = create<TaskbarStore>((set, get) => ({
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  taskbarShortcuts: [],
  initialize: async () => {
    if (get().taskbarShortcuts.length > 0) {
      return;
    }

    try {
      const initialShortcuts: TaskbarShortcut[] = [
        {
          name: "Internet Explorer",
          icon: "/images/icons/InternetExplorer.png",
          position: 1,
          app: await loadApp("internetExplorer"),
        },
      ];

      set({ taskbarShortcuts: initialShortcuts });
    } catch (error) {
      console.error("Error initializing desktop:", error);
    }
  },
}));

export default useTaskbarStore;
