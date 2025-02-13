import { create } from "zustand";
import { DesktopIconType } from "../lib/types";
import { loadApp } from "../lib/appUtils";

interface DesktopStore {
  desktopGrid: {
    rows: number;
    cols: number;
  };
  icons: DesktopIconType[];
  initialize: () => Promise<void>;
}

export const useDesktopStore = create<DesktopStore>((set, get) => ({
  desktopGrid: { rows: 8, cols: 10 },
  icons: [],
  initialize: async () => {
    if (get().icons.length > 0) {
      return;
    }

    try {
      const initialIcons: DesktopIconType[] = [
        {
          name: "Internet Explorer",
          icon: "/images/icons/InternetExplorer.png",
          position: { row: 1, col: 1 },
          app: await loadApp("internetExplorer"),
        },
        {
          name: "MSN Messenger",
          icon: "/images/icons/MSNMessenger.png",
          position: { row: 2, col: 1 },
          app: await loadApp("msnMessenger"),
        },
      ];

      set({ icons: initialIcons });
    } catch (error) {
      console.error("Error initializing desktop:", error);
    }
  },
}));
