const items = [
  { name: "My Documents", icon: "/images/icons/MyDocuments.png" },
  { name: "My Pictures", icon: "/images/icons/MyPictures.png" },
  { name: "My Music", icon: "/images/icons/MyMusic.png" },
  { name: "My Computer", icon: "/images/icons/MyComputer.png" },
];

const permItems = [
  {
    name: "Control Panel",
    icon: "/images/icons/ControlPanel.png",
  },
  {
    name: "Help and Support",
    icon: "/images/icons/HelpandSupport.png",
  },
  { name: "Search", icon: "/images/icons/Search.png" },
  { name: "Run", icon: "/images/icons/Run.png" },
];

export const TaskbarMenuRight = () => {
  return (
    <div className="bg-[#d3e5fb] border-l-2 border-[#b9d4f6] flex flex-col">
      {items.map((item) => (
        <TaskbarMenuRightItem key={item.name} item={item} perm />
      ))}
      <div className="bg-[#b9d4f6] h-0.5 w-3/4  "></div>
      <span className="flex-grow"></span>
      {permItems.map((item) => (
        <TaskbarMenuRightItem key={item.name} item={item} />
      ))}
    </div>
  );
};

const TaskbarMenuRightItem = ({
  item,
  perm,
}: {
  item: { name: string; icon: string };
  perm?: boolean;
}) => {
  return (
    <div className="flex items-center space-x-4 px-4 py-2 hover:bg-xp-blue hover:text-white">
      <img src={item.icon} alt={item.name} className="w-8 h-8" />
      <p className={`text-sm ${perm && "font-bold"}`}>{item.name}</p>
    </div>
  );
};
