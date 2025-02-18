const msnMessengerAppInfo = {
  name: "MSN Messenger",
  id: "msnMessenger",
  icon: "/images/icons/MSNMessenger.png",
  width: 300,
  height: 600,
  component: "MessengerMainWindow",
  contextMenuItems: [
    {
      label: "New Chat",
      action: "newChat",
    },
    {
      label: "New Group",
      action: "newGroup",
    },
    {
      label: "Settings",
      action: "settings",
    },
  ],
  windowMenu: {
    File: [
      {
        label: "New Chat",
        items: [
          {
            label: "New Chat",
          },
          {
            label: "New Group",
          },
        ],
      },
      {
        label: "New Group",
      },
      {
        label: "Settings",
      },
    ],
    Edit: [
      {
        label: "Copy",
      },
      {
        label: "Paste",
      },
    ],
    View: [
      {
        label: "Zoom In",
      },
      {
        label: "Zoom Out",
      },
    ],
    Help: [
      {
        label: "About",
      },
    ],
  },
};

export default msnMessengerAppInfo;
