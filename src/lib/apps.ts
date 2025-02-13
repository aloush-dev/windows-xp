import { InternetExplorerMainWindow } from "../apps/internetExplorer/Main";
import MessengerMainWindow from "../apps/windowsMessenger/Main";
import { AppItemInfo } from "./types";

export const WindowsMessenger = {
  title: "Messenger",
  icon: "/images/icons/WindowsMessenger.png",
  width: 300,
  height: 600,
  component: MessengerMainWindow,
} as AppItemInfo;

export const InternetExplorer = {
  title: "Internet Explorer",
  icon: "/images/icons/InternetExplorer.png",
  width: 800,
  height: 600,
  component: InternetExplorerMainWindow,
} as AppItemInfo;
