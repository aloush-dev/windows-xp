import { useState } from "react";
import useAppStore from "../../../stores/useAppStore";
import useTaskbarStore from "../../../stores/useTaskbarStore";

export const TaskbarMenuLeft = () => {
  const [allProgramsOpen, setAllProgramsOpen] = useState(false);

  const { toggleMenu } = useTaskbarStore();
  const { installedApps, launchApp } = useAppStore();

  return (
    <div className="bg-white flex flex-col space-y-4 ">
      <div className="flex-grow"></div>
      <div
        onClick={() => setAllProgramsOpen(!allProgramsOpen)}
        className="flex justify-center items-center py-2 m-2 hover:bg-xp-blue cursor-pointer hover:text-white "
      >
        <p className="font-bold ">All Programs</p>
        <span className="border-t-12 border-b-12 border-l-18 border-t-transparent border-b-transparent border-l-green-500 ml-2"></span>
      </div>
      {allProgramsOpen && (
        <div className="absolute bg-white drop-shadow-sm bottom-16 right-37  border-l-3 border-1 border-xp-blue">
          {Object.values(installedApps).map((app) => (
            <div
              onClick={() => {
                toggleMenu();
                launchApp(app);
              }}
              key={app.name}
              className="flex items-center p-2  hover:bg-xp-blue cursor-pointer hover:text-white "
            >
              <img className="h-4 w-4" src={app.icon} />
              <p className="ml-2 text-xs">{app.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
