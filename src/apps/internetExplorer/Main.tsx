import { useState } from "react";

export const InternetExplorerMainWindow = () => {
  const [url, setUrl] = useState(
    "https://web.archive.org/web/20020124150518/http://www.ask.com/"
  );

  return (
    <div className="w-full h-full">
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
            className="w-full bg-cream-background border-cream-border pl-8"
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
