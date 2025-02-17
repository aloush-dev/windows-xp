import { AppItemInfo } from "../../lib/types";

export const RibbonBar = ({ app }: { app: AppItemInfo }) => {
  if (!app.ribbonBar) {
    return null;
  }

  return (
    <div className="bg-cream-background h-10 border-cream-border flex gap-2 items-center border-l-2 border-l-xp-blue border-r-2 border-r-xp-blue px-2 ">
      {app.ribbonBar.map((item) => (
        <div
          key={item.label}
          onClick={item.onClick}
          className="flex items-center border border-transparent hover:border-cream-border  hover:bg-opacity-10 p-1 rounded hover:shadow-inner"
        >
          {app.icon && (
            <img className="h-6 w-6" src={item.icon} alt={item.alt} />
          )}
          <span className="pl-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
