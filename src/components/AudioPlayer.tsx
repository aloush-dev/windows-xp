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
      handleEnded();
    }

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isPlaying, currentSrc, setSrc, pause]);

  return (
    <audio
      ref={audioRef}
      src={currentSrc || undefined}
      preload="auto"
      style={{ display: "none" }}
    />
  );
};
