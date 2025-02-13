import logo from "../../assets/windows-logo.svg";
import useTaskbarStore from "../../stores/useTaskbarStore";

export const StartButton = () => {
  const { toggleMenu } = useTaskbarStore();

  return (
    <button className="flex" onClick={toggleMenu}>
      <div className="h-8 w-28 pr-6 bg-xp-green font-xp font-bold  flex justify-center items-center rounded-r-2xl">
        <img className="h-6 w-6" src={logo} />
        <div className="text-white italic text-xl">start</div>
      </div>
    </button>
  );
};
