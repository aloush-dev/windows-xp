import Power from "/images/icons/Power.png";
import logOff from "/images/icons/Logout.png";
import { useUserStore } from "../../../stores/useUserStore";
import useTaskbarStore from "../../../stores/useTaskbarStore";

export const PowerBar = () => {
  const { logout } = useUserStore();
  const { toggleMenu } = useTaskbarStore();

  const handleClick = () => {
    toggleMenu();
    logout();
  };

  return (
    <div className="flex space-x-2 text-white items-center h-full justify-end">
      <div className="flex items-center" onClick={handleClick}>
        <img src={logOff} alt="log off" className="h-10 w-10" />
        <p className="px-2">
          <span className="underline">L</span>og off
        </p>
      </div>

      <div className="flex items-center" onClick={handleClick}>
        <img src={Power} alt="power" className="h-10 w-10" />
        <p className="px-2">
          T<span className="underline">u</span>rn Off Computer
        </p>
      </div>
    </div>
  );
};
