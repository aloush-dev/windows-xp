import Back from "/images/icons/Back.png";
import Forward from "/images/icons/Forward.png";
import IERefresh from "/images/icons/IERefresh.png";
import IEStop from "/images/icons/IEStop.png";
import IEHome from "/images/icons/IEHome.png";
import Search from "/images/icons/Search.png";
import Favorites from "/images/icons/Favorites.png";
import IEHistory from "/images/icons/IEHistory.png";
import WindowsMessenger from "/images/icons/WindowsMessenger.png";
import Email from "/images/icons/Email.png";
import Printer from "/images/icons/Printer.png";
import IEEdit from "/images/icons/IEEdit.png";
// import URL from "/images/icons/URL.png";
import { useState } from "react";

export const InternetExplorerMainWindow = () => {
  const [url, setUrl] = useState(
    "https://web.archive.org/web/20020124150518/http://www.ask.com/"
  );

  return (
    <div className="w-full h-full">
      <div className="bg-cream-background h-10 border-cream-border flex">
        <div className="flex items-center">
          <img src={Back} alt="Back" className="h-6 w-6 m-2" />
          <p>Back</p>
        </div>
        <img src={Forward} alt="Forward" className="h-6 w-6 m-2" />
        <img src={IEStop} alt="Stop" className="h-6 w-6 m-2" />
        <img src={IERefresh} alt="Refresh" className="h-6 w-6 m-2" />
        <img src={IEHome} alt="Home" className="h-6 w-6 m-2" />
        <span className="w-0.5 bg-cream-border"></span>
        <div className="flex items-center">
          <img src={Search} alt="Search" className="h-6 w-6 m-2" />
          <p>Search</p>
        </div>
        <div className="flex items-center">
          <img src={Favorites} alt="Favorites" className="h-6 w-6 m-2" />
          <p>Favorites</p>
        </div>
        <img src={IEHistory} alt="History" className="h-6 w-6 m-2" />
        <span className="w-0.5 bg-cream-border"></span>
        <img src={Email} alt="Email" className="h-6 w-6 m-2" />
        <img src={Printer} alt="Printer" className="h-6 w-6 m-2" />
        <img src={IEEdit} alt="Edit" className="h-6 w-6 m-2" />
        <img src={WindowsMessenger} alt="Messenger" className="h-6 w-6 m-2" />
      </div>
      <div className="h6 items-center bg-cream-background border-cream-border flex">
        <p className="px-2 flex items-center">Address</p>
        <div className="relative flex-1">
          {/* <img
            src={URL}
            alt="URL"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4"
          /> */}
          <input
            disabled
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            className="w-full bg-cream-background border-cream-border pl-8" // Increased padding-left
          />
        </div>
      </div>
      <iframe
        src="https://web.archive.org/web/20020124150518/http://www.ask.com/"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};
