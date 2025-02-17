import Back from "/images/icons/Back.png";
import Forward from "/images/icons/Forward.png";
import Search from "/images/icons/Search.png";
import FolderView from "/images/icons/FolderView.png";

export const FileExplorerMainWindow = () => {
  return (
    <div className="bg-white h-full w-full">
      <div className="bg-cream-background h-10 border-cream-border flex gap-2 items-center">
        <div className="flex  items-center">
          <img src={Back} alt="Back" className="h-6 w-6 m-2" />
          <p>Back</p>
        </div>
        <img src={Forward} alt="Forward" className="h-6 w-6 m-2" />
        <div className="flex  items-center">
          <img src={Search} alt="Search" className="h-6 w-6 m-2" />
          <p>Search</p>
        </div>
        <div className="flex  items-center">
          <img src={FolderView} alt="Folder View" className="h-6 w-6 m-2" />
          <p>Folders</p>
        </div>
      </div>
    </div>
  );
};
