import { create } from "zustand";
import { AppItemInfo } from "../lib/types";

export interface ContextMenuItem {
  label: string;
  onClick: () => void;
}
interface ContextMenuStore {
  x: number;
  y: number;
  isOpen: boolean;
  app: AppItemInfo | null;
  showContextMenu: (x: number, y: number, app: AppItemInfo | null) => void;
  hideContextMenu: () => void;
}

const useContextMenuStore = create<ContextMenuStore>((set) => ({
  x: 0,
  y: 0,
  isOpen: false,
  app: null,
  showContextMenu: (x, y, app) => set({ x, y, isOpen: true, app }),
  hideContextMenu: () => set({ isOpen: false, app: null }),
}));

export default useContextMenuStore;
