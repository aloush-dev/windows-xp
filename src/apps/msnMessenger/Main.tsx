import useAppStore from "../../stores/useAppStore";
import useWindowManager from "../../stores/useWindowManager";
import { useEffect } from "react";
import { useMSNStore } from "./useMSNStore";

export const MessengerMainWindow = () => {
  const { activeSessions, addSession } = useMSNStore();
  const { currentApp } = useAppStore();
  const createWindow = useWindowManager((state) => state.createWindow);
  const windows = useWindowManager((state) => state.windows);

  const handleStartChat = (contactName: string) => {
    // Create a new chat session
    addSession(contactName);
  };

  // Get the window ID for the current app
  const currentWindow = windows.find(
    (window) => window.appId === currentApp?.id
  );

  useEffect(() => {
    if (currentApp && !currentWindow) {
      createWindow(currentApp.id, "MSN Messenger");
    }
  }, [currentApp, currentWindow, createWindow]);

  if (!currentWindow) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-full">
      <div className="p-4">
        {/* Main messenger window content */}
        <div>
          <div
            onClick={() => handleStartChat("Test Contact")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            New Chat
          </div>
        </div>
        <div>
          <div>Online</div>
        </div>
      </div>

      {/* Chat windows */}
      {activeSessions.map((session, index) => (
        <div
          key={session.id}
          className="absolute bg-white border shadow-lg"
          style={{
            width: 300,
            height: 400,
            top: 50 + index * 30,
            left: 50 + index * 30,
            zIndex: currentApp?.isMaximized ? 0 : 100,
          }}
        >
          <div className="bg-window-blue p-2 flex justify-between items-center">
            <span className="text-white">{session.contactName}</span>
            <div
              onClick={() => useChatStore.getState().removeSession(session.id)}
              className="text-white"
            >
              ×
            </div>
          </div>
          <div className="p-2">
            {/* Chat content */}
            {session.messages.map((msg, i) => (
              <div key={i}>
                <strong>{msg.sender}:</strong> {msg.content}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
