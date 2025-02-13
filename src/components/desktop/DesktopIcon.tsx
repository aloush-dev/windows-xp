import { MouseEvent } from "react";
import useAppStore from "../../stores/useAppStore";
import { DesktopIconType } from "../../lib/types";

interface DesktopIconProps {
  icon: DesktopIconType;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ icon }) => {
  const { addApp, setCurrentApp } = useAppStore();

  const onDoubleClick = () => {
    addApp(icon.app);
    setCurrentApp(icon.app);
  };

  const handleClick = (event: MouseEvent) => {
    if (event.detail === 2) {
      onDoubleClick();
    }
  };

  return (
    <button
      onClick={(event) => handleClick(event)}
      style={{
        gridRowStart: icon.position.row,
        gridColumnStart: icon.position.col,
      }}
      className="flex flex-col items-center justify-center z-20"
    >
      <img src={icon.icon} alt={icon.name} className="h-8 w-8" />
      <p className="text-white text-sm">{icon.name}</p>
    </button>
  );
};
