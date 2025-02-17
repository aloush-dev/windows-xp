import { useState, useEffect, useRef } from "react";
import { AppItemInfo, WindowMenuSubItemType } from "../../lib/types";

export const WindowMenu = ({ app }: { app: AppItemInfo }) => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSelectedMenu(null);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  if (!app.windowMenu) {
    return null;
  }

  return (
    <div
      className="bg-cream-background h-6 border-b-1 border-l-2 border-r-2 border-b-cream-border border-l-xp-blue border-r-xp-blue"
      ref={menuRef}
    >
      <div className="flex items-center h-full gap-2 ">
        {Object.entries(app.windowMenu).map(([key, items]) => (
          <WindowMenuItem
            key={key}
            title={key}
            items={items}
            isSelected={selectedMenu === key}
            onSelect={() => setSelectedMenu(key)}
            onClose={() => setSelectedMenu(null)}
          />
        ))}
      </div>
    </div>
  );
};

const WindowMenuItem = ({
  title,
  items,
  isSelected,
  onSelect,
  onClose,
}: {
  title: string;
  items: WindowMenuSubItemType[];
  isSelected: boolean;
  onSelect: () => void;
  onClose: () => void;
}) => {
  return (
    <div className="relative">
      <div
        className="hover:bg-xp-blue hover:text-white cursor-pointer px-1 "
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onBlur={onClose}
      >
        {title}
      </div>
      {isSelected && (
        <div className="absolute top-5 left-0 bg-cream-background border-cream-border border-1 ">
          {items.map((item, index) => (
            <WindowMenuSubItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const WindowMenuSubItem = ({ item }: { item: WindowMenuSubItemType }) => {
  return (
    <div
      className="text-left px-2 py-1 hover:bg-xp-blue hover:text-white bg-white cursor-pointer whitespace-nowrap inset-shadow-window-outer"
      onClick={item.onClick}
    >
      {item.label}
    </div>
  );
};
