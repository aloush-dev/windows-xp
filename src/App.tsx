import { useEffect } from "react";
import { AudioPlayer } from "./components/AudioPlayer";
import { Desktop } from "./components/desktop/Desktop";
import { LoginScreen } from "./components/login/LoginScreen";
import { Taskbar } from "./components/taskbar/Taskbar";
import { TaskbarMenu } from "./components/taskbar/menu/TaskbarMenu";
import "./index.css";
import useAppStore from "./stores/useAppStore";
import useTaskbarStore from "./stores/useTaskbarStore";
import { useUserStore } from "./stores/useUserStore";
import { ContextMenu } from "./components/contextMenu/ContextMenu";
import useContextMenuStore from "./stores/useContextMenuStore";

function App() {
  const { menuOpen } = useTaskbarStore();
  const { currentUser } = useUserStore();
  const { initialize, currentApp } = useAppStore();
  const { showContextMenu } = useContextMenuStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      showContextMenu(event.clientX, event.clientY, currentApp || null);
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [showContextMenu, currentApp]);

  return (
    <div className="h-screen font-xp">
      <AudioPlayer />
      <ContextMenu />
      {currentUser ? (
        <>
          <Desktop />
          {menuOpen && <TaskbarMenu />}
          <Taskbar />
        </>
      ) : (
        <LoginScreen />
      )}
    </div>
  );
}

export default App;
