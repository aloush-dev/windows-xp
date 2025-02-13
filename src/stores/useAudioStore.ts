import { create } from "zustand";

interface AudioStore {
  currentSrc: string | null;
  isPlaying: boolean;
  setSrc: (src: string | null) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
}

const useAudioStore = create<AudioStore>((set) => ({
  currentSrc: null,
  isPlaying: false,
  setSrc: (src: string | null) => set({ currentSrc: src }),
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  togglePlay: () =>
    // Implement togglePlay
    set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default useAudioStore;
