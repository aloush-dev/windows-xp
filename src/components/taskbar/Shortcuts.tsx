import IE from "@/assets/icons/InternetExplorer.png";
import Desktop from "@/assets/icons/Desktop.png";
import WindowsMediaPlayer from "@/assets/icons/WindowsMediaPlayer.png";
import useAppStore from "../../stores/useAppStore";
import { InternetExplorer } from "../../lib/apps";

export const TaskbarShortcuts = () => {
  const { addApp } = useAppStore();
  return (
    <div className="flex gap-2 px-4">
      <button onClick={() => addApp(InternetExplorer)}>
        <img className="h-5 w-5" src={IE} />
      </button>
      <button>
        <img className="h-5 w-5" src={WindowsMediaPlayer} />
      </button>
      <button>
        <img className="h-5 w-5" src={Desktop} />
      </button>
    </div>
  );
};
