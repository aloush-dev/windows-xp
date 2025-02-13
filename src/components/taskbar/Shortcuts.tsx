import { useEffect } from "react";
import useAppStore from "../../stores/useAppStore";
import useTaskbarStore from "../../stores/useTaskbarStore";

export const TaskbarShortcuts = () => {
  const { addApp } = useAppStore();
  const { shortcuts, initialize } = useTaskbarStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className="flex gap-2 px-4">
      {shortcuts.map((shortcut) => (
        <button onClick={() => addApp(shortcut.app)} key={shortcut.name}>
          <img className="h-5 w-5" src={shortcut.icon} />
        </button>
      ))}
    </div>
  );
};
