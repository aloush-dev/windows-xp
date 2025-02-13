import { useState } from "react";
import useAppStore from "../../../stores/useAppStore";
import useTaskbarStore from "../../../stores/useTaskbarStore";

export const TaskbarMenuLeft = () => {
  const [allProgramsOpen, setAllProgramsOpen] = useState(false);

  const { toggleMenu } = useTaskbarStore();
  const { allApps, addApp } = useAppStore();

  return (
    <div className="bg-white flex flex-col space-y-4 ">
      <div className="flex-grow"></div>
      <span className="bg-gray-300 h-0.5"></span>
      <div
        onClick={() => setAllProgramsOpen(!allProgramsOpen)}
        className="flex justify-center items-center py-2 m-2 hover:bg-xp-blue cursor-pointer hover:text-white "
      >
        <p className="font-bold ">All Programs</p>
        <span className="border-t-12 border-b-12 border-l-18 border-t-transparent border-b-transparent border-l-green-500 ml-2"></span>
      </div>
      {allProgramsOpen && (
        <div className="absolute bg-white shadow-md bottom-20 right-19">
          {Object.values(allApps).map((app) => (
            <div
              onClick={() => {
                toggleMenu();
                addApp(app);
              }}
              key={app.name}
              className="flex items-center p-2  hover:bg-xp-blue cursor-pointer hover:text-white "
            >
              <img className="h-5 w-5" src={app.icon} />
              <p className="ml-2 text-sm">{app.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
