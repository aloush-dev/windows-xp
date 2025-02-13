export const SystemTray = () => {
  const currentTime = new Date()
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();
  return <div className="flex px-4 text-white text-sm">{currentTime}</div>;
};
