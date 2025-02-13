import { MouseEvent } from "react";
import useAppStore from "../../stores/useAppStore";
import { AppItemInfo } from "../../lib/types";

interface DesktopIconProps {
  name: string;
  icon: string;
  position: { row: number; col: number };
  app: AppItemInfo;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  name,
  icon,
  position,
  app,
}) => {
  const { addApp, setCurrentApp } = useAppStore();

  const onDoubleClick = () => {
    addApp(app);
    setCurrentApp(app);
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
        gridRowStart: position.row,
        gridColumnStart: position.col,
      }}
      className="flex flex-col items-center justify-center z-20"
    >
      <img src={icon} alt={name} className="h-8 w-8" />
      <p className="text-white text-sm">{name}</p>
    </button>
  );
};
