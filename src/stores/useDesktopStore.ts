import { create } from "zustand";
import { InternetExplorer, WindowsMessenger } from "../lib/apps";
import { AppItemInfo } from "../lib/types";

interface DesktopStore {
  desktopGrid: {
    rows: number;
    cols: number;
  };
  icons: {
    name: string;
    icon: string;
    position: { row: number; col: number };
    app: AppItemInfo;
  }[];
}

export const useDesktopStore = create<DesktopStore>(() => ({
  desktopGrid: { rows: 8, cols: 10 },
  icons: [
    // {
    //   name: "My Computer",
    //   icon: "/images/icons/MyComputer.png",
    //   position: { row: 1, col: 1 },
    // },
    // {
    //   name: "Recycle Bin",
    //   icon: "/images/icons/RecycleBinEmpty.png",
    //   position: { row: 6, col: 8 },
    // },
    {
      name: "Internet Explorer",
      icon: "/images/icons/InternetExplorer.png",
      position: { row: 1, col: 1 },
      app: InternetExplorer,
    },
    {
      name: "Windows Messenger",
      icon: "/images/icons/WindowsMessenger.png",
      position: { row: 2, col: 1 },
      app: WindowsMessenger,
    },
  ],
}));
