import { useUserStore } from "../../../stores/useUserStore";
import { PowerBar } from "./PowerBar";

export const TaskbarMenu = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="fixed bottom-8 left-0 w-[30rem] z-[100] shadow-lg bg-xp-blue rounded-t-lg">
      <div className=" h-25 rounded-t-lg flex items-center space-x-4 pl-2">
        <img
          src={currentUser?.image}
          alt="profile"
          className="w-20 h-20 rounded-md border-2 border-white"
        />
        <p className="text-3xl text-white ">{currentUser?.name}</p>
      </div>
      <div className="grid grid-cols-2 h-[35rem] mx-0.5 ">
        <div className="bg-white"></div>
        <div className="bg-[#d3e5fb] border-l-2 border-[#b9d4f6] "></div>
      </div>
      <div className="h-20">
        <PowerBar />
      </div>
    </div>
  );
};
