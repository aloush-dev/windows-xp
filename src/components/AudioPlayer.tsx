import { useRef, useEffect } from "react";
import useAudioStore from "../stores/useAudioStore";

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentSrc, isPlaying, setSrc, pause } = useAudioStore();

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleEnded = () => {
      pause();
      setSrc(null);
    };

    if (isPlaying && currentSrc) {
      audio.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    } else {
      setSrc(null);
    }

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isPlaying, currentSrc, setSrc, pause]);

  return (
    <audio
      ref={audioRef}
      src={currentSrc || ""}
      preload="auto"
      style={{ display: "none" }}
    />
  );
};
