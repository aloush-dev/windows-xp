const internetExplorerAppInfo = {
  name: "Internet Explorer",
  id: "internetExplorer",
  icon: "/images/icons/InternetExplorer.png",
  path: "internetExplorer",
  width: 800,
  height: 600,
  component: "InternetExplorerMainWindow",
  windowMenu: {
    File: [],
    Edit: [],
    View: [],
    Favorites: [],
    Tools: [],
    Help: [],
  },
  ribbonBar: [
    {
      label: "Back",
      icon: "/images/icons/Back.png",
      alt: "Back",
    },
    {
      icon: "/images/icons/Forward.png",
      alt: "Forward",
    },
    {
      icon: "/images/icons/IEStop.png",
      alt: "Stop",
    },
    {
      icon: "/images/icons/IERefresh.png",
      alt: "Refresh",
    },
    {
      icon: "/images/icons/IEHome.png",
      alt: "Home",
    },
    {
      label: "Search",
      icon: "/images/icons/Search.png",
      alt: "Search",
    },
    {
      label: "Favorites",
      icon: "/images/icons/Favorites.png",
      alt: "Favorites",
    },
    {
      icon: "/images/icons/IEHistory.png",
      alt: "History",
    },
    {
      icon: "/images/icons/Email.png",
      alt: "Email",
    },
    {
      icon: "/images/icons/Printer.png",
      alt: "Printer",
    },
    {
      icon: "/images/icons/IEEdit.png",
      alt: "Edit",
    },
    {
      icon: "/images/icons/WindowsMessenger.png",
      alt: "Messenger",
    },
  ],
};

export default internetExplorerAppInfo;
