import { PowerBar } from "./PowerBar";

export const TaskbarMenu = () => {
  return (
    <div className="h-[45rem] fixed bottom-10 w-[30rem] z-30 shadow-lg">
      <div className="bg-xp-blue h-30 rounded-t-lg"></div>
      <div className="grid grid-cols-2 h-[33rem] border-r-2 border-xp-blue">
        <div className="bg-white"></div>
        <div className="bg-[#d3e5fb] border-l-2 border-[#b9d4f6] "></div>
      </div>
      <div className="bg-xp-blue h-20">
        <PowerBar />
      </div>
    </div>
  );
};
