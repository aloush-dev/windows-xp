import { useEffect, useRef } from "react";
import { useUserStore } from "../../../stores/useUserStore";
import { PowerBar } from "./PowerBar";
import { TaskbarMenuLeft } from "./TaskbarMenuLeft";
import { TaskbarMenuRight } from "./TaskbarMenuRight";
import useTaskbarStore from "../../../stores/useTaskbarStore";

export const TaskbarMenu = () => {
  const { currentUser } = useUserStore();
  const { toggleMenu } = useTaskbarStore();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className="fixed bottom-8 left-0 w-[28rem] z-[100] shadow-lg bg-xp-blue rounded-t-lg"
      ref={menuRef}
    >
      <div className=" h-25 rounded-t-lg flex items-center space-x-4 pl-2">
        <img
          src={currentUser?.image}
          alt="profile"
          className="w-20 h-20 rounded-md border-2 border-white"
        />
        <p className="text-3xl text-white ">{currentUser?.name}</p>
      </div>
      <div className="grid grid-cols-2 h-[30rem] mx-0.5 ">
        <TaskbarMenuLeft />
        <TaskbarMenuRight />
      </div>
      <div className="h-12">
        <PowerBar />
      </div>
    </div>
  );
};
