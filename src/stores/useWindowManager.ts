import { create } from "zustand";
import { WindowState } from "../lib/types";

interface WindowManagerStore {
  windows: WindowState[];
  createWindow: (
    appId: string,
    title: string,
    initialProps?: Partial<WindowState>
  ) => string;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: number, height: number) => void;
  bringWindowToFront: (id: string) => void;
  toggleMinimize: (id: string) => void;
}

const useWindowManager = create<WindowManagerStore>((set, get) => ({
  windows: [],
  createWindow: (appId, title, initialProps) => {
    const id = Date.now().toString();
    const newWindow: WindowState = {
      id,
      appId,
      x: 100,
      y: 100,
      width: initialProps?.width || 400,
      height: initialProps?.height || 600,
      zIndex: 70,
      isMinimized: false,
      isMaximized: false,
      title,
      isFocused: true,
      ...initialProps,
    };

    set((state) => ({
      windows: state.windows.map((window) => ({ ...window, isFocused: false })),
    }));

    set((state) => ({ windows: [...state.windows, newWindow] }));
    return id;
  },
  closeWindow: (id) => {
    set((state) => ({
      windows: state.windows.filter((window) => window.id !== id),
    }));
  },
  focusWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((window) => ({
        ...window,
        isFocused: window.id === id,
      })),
    }));
  },
  minimizeWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, isMinimized: true } : window
      ),
    }));
  },
  maximizeWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, isMaximized: true } : window
      ),
    }));
  },
  updateWindowPosition: (id, x, y) => {
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, x, y } : window
      ),
    }));
  },
  updateWindowSize: (id, width, height) => {
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id ? { ...window, width, height } : window
      ),
    }));
  },
  bringWindowToFront: (id) => {
    const windowToBringToFront = get().windows.find(
      (window) => window.id === id
    );
    if (!windowToBringToFront) return;

    const highestZIndex = get().windows.reduce(
      (maxZ, window) => Math.max(maxZ, window.zIndex),
      0
    );
    const newZIndex = highestZIndex + 1;

    set((state) => ({
      windows: state.windows.map((window) => {
        if (window.id === id) {
          return { ...window, zIndex: newZIndex, isFocused: true };
        } else {
          return { ...window, isFocused: false };
        }
      }),
    }));
  },
  toggleMinimize: (id) => {
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id
          ? { ...window, isMinimized: !window.isMinimized }
          : window
      ),
    }));
  },
}));

export default useWindowManager;
