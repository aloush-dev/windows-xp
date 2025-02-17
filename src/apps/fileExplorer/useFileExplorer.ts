import { create } from "zustand";

interface FileExplorerState {
  currentPath?: string;
  setCurrentPath: (path: string) => void;
}

export const useFileExplorer = create<FileExplorerState>((set) => ({
  currentPath: "/",
  setCurrentPath: (path) => set({ currentPath: path }),
}));
