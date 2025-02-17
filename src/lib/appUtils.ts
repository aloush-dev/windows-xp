import { AppItemInfo } from "./types";

export async function loadApp(appName: string): Promise<AppItemInfo> {
  try {
    const appInfo = await import(`../apps/${appName}/app.json`);
    const componentModule = await import(`../apps/${appName}/Main.tsx`);
    const componentName = appInfo.default.component;
    const component = componentModule[componentName];

    return {
      ...appInfo.default,
      component: component,
    } as AppItemInfo;
  } catch (error) {
    console.error(`Error loading app ${appName}:`, error);
    throw error;
  }
}

export const installedApps = Promise.all([
  loadApp("internetExplorer"),
  loadApp("msnMessenger"),
  loadApp("taskManager"),
  loadApp("fileExplorer"),
]);
