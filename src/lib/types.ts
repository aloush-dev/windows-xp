import { FC } from "react";
import { ContextMenuItem } from "../stores/useContextMenuStore";

export interface AppItemInfo {
  name: string;
  icon: string;
  width: number;
  height: number;
  component: FC;
  contextMenuItems?: ContextMenuItem[];
}

export interface DesktopItem {
  name: string;
  icon: string;
  app: AppItemInfo;
}

export interface DesktopIconType extends DesktopItem {
  position: { row: number; col: number };
}

export interface TaskbarShortcut extends DesktopItem {
  position: number;
}

export interface AppState extends AppItemInfo {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
}

export interface User {
  name: string;
  image?: string;
}
