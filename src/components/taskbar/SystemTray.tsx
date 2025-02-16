import { useEffect, useState } from "react";

export const SystemTray = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(
        date
          .toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          .toUpperCase()
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-taskbar-system-tray flex px-4 text-white text-sm">
      {currentTime}
    </div>
  );
};
