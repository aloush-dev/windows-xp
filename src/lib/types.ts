import { FC } from "react";
import { ContextMenuItem } from "../stores/useContextMenuStore";

export interface AppItemInfo {
  id: string;
  name: string;
  icon: string;
  width: number;
  height: number;
  component: FC;
  contextMenuItems?: ContextMenuItem[];
  windowMenu?: WindowMenuItemType;
}

export interface WindowMenuItemType {
  [key: string]: WindowMenuSubItemType[];
}

export interface WindowMenuSubItemType {
  label: string;
  onClick?: () => void;
  items?: WindowMenuSubItemType[];
  separator?: boolean;
}

export interface DesktopItem {
  id: string;
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

export interface WindowState {
  id: string;
  appId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  title: string;
  isFocused: boolean;
}
