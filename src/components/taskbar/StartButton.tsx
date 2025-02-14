import logo from "/public/images/windows-logo.svg";
import useTaskbarStore from "../../stores/useTaskbarStore";

export const StartButton = () => {
  const { toggleMenu } = useTaskbarStore();

  return (
    <div className="flex" onClick={toggleMenu}>
      <div className="h-8 w-28 pr-6 bg-xp-green font-xp font-bold  flex justify-center items-center rounded-r-2xl cursor-pointer">
        <img className="h-6 w-6" src={logo} />
        <div className="text-white italic text-xl">start</div>
      </div>
    </div>
  );
};
