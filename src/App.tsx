import { AudioPlayer } from "./components/AudioPlayer";
import { Desktop } from "./components/desktop/Desktop";
import { LoginScreen } from "./components/login/LoginScreen";
import { Taskbar } from "./components/taskbar/Taskbar";
import { TaskbarMenu } from "./components/taskbar/menu/TaskbarMenu";
import "./index.css";
import useTaskbarStore from "./stores/useTaskbarStore";
import { useUserStore } from "./stores/useUserStore";

function App() {
  const { menuOpen } = useTaskbarStore();
  const { currentUser } = useUserStore();

  return (
    <div className="h-screen font-xp">
      <AudioPlayer />
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
