export interface AppItemInfo {
  title: string;
  icon: string;
  width: number;
  height: number;
  component: React.ComponentType;
}

export interface User {
  name: string;
  image?: string;
}
