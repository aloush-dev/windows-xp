import { useState } from "react";

export const TaskManagerMainWindow = () => {
  const [selectedTab, setSelectedTab] = useState("windows");

  return (
    // <WindowManagement />
    <menu role="tablist">
      <button
        onClick={() => setSelectedTab("windows")}
        aria-selected={selectedTab === "windows"}
        aria-controls="windows"
      >
        Windows
      </button>
      <button
        onClick={() => setSelectedTab("apps")}
        aria-selected={selectedTab === "apps"}
        aria-controls="apps"
      >
        Apps
      </button>
      <article role="tabpanel" id="windows">
        windows
        {/* <WindowManagement /> */}
      </article>
      <article role="tabpanel" id="apps">
        apps
        {/* <WindowManagement /> */}
      </article>
    </menu>
  );
};
