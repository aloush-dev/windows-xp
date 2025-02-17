import { MouseEvent } from "react";
import useAppStore from "../../stores/useAppStore";
import { DesktopIconType } from "../../lib/types";

interface DesktopIconProps {
  icon: DesktopIconType;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ icon }) => {
  const { launchApp } = useAppStore();

  const onDoubleClick = () => {
    launchApp(icon.app);
  };

  const handleClick = (event: MouseEvent) => {
    if (event.detail === 2) {
      onDoubleClick();
    }
  };

  return (
    <div
      onClick={(event) => handleClick(event)}
      style={{
        gridRowStart: icon.position.row,
        gridColumnStart: icon.position.col,
      }}
      className="flex flex-col items-center justify-center z-20"
    >
      <img src={icon.icon} alt={icon.name} className="h-8 w-8" />
      <p className="text-white text-xs [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        {icon.name}
      </p>
    </div>
  );
};
