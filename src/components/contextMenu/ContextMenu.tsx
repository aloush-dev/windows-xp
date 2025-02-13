import { useEffect, useRef } from "react";
import useContextMenuStore from "../../stores/useContextMenuStore";

const defaultContextMenuItems = [
  {
    label: "Item 1",
    onClick: () => {
      console.log("Item 1 clicked");
    },
  },
  {
    label: "Item 2",
    onClick: () => {
      console.log("Item 2 clicked");
    },
  },
];

export const ContextMenu: React.FC = () => {
  const { x, y, isOpen, hideContextMenu, app } = useContextMenuStore();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        hideContextMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, hideContextMenu]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="absolute z-200 bg-white border border-gray-300 shadow-md rounded"
      style={{
        top: y,
        left: x,
      }}
    >
      {app?.contextMenuItems ? (
        <>
          {app.contextMenuItems?.map((item, index) => (
            <ContextMenuItem
              key={index}
              label={item.label}
              onClick={() => {
                item.onClick();
                hideContextMenu();
              }}
            />
          ))}
        </>
      ) : (
        <>
          {defaultContextMenuItems.map((item, index) => (
            <ContextMenuItem
              key={index}
              label={item.label}
              onClick={() => {
                item.onClick();
                hideContextMenu();
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

const ContextMenuItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      className="block w-full text-left text-sm px-6 py-0.5  text-black hover:bg-xp-blue hover:text-white"
      onClick={() => {
        onClick();
      }}
    >
      {label}
    </button>
  );
};
