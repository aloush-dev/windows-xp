import useAppStore from "../../stores/useAppStore";
import useWindowManager from "../../stores/useWindowManager";

export const WindowManagement = () => {
  const { installedApps } = useAppStore();
  const { windows } = useWindowManager();
  return (
    <div className="flex flex-col bg-white m-4 px-2">
      {windows.map((window) => {
        const app = installedApps.find((app) => app.id === window.appId);
        return (
          <div
            key={window.id}
            className="flex justify-between items-center p-2"
          >
            <h1>{window.title}</h1>
            <div>
              {app?.name} - {window.id}
            </div>
            <div
              className="px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => useAppStore.getState().closeApp(window.appId)}
            >
              Close
            </div>
          </div>
        );
      })}
    </div>
  );
};
