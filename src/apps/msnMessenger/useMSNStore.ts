import { create } from "zustand";

interface MSNStore {
  activeSessions: {
    id: string;
    contactName: string;
    messages: { sender: string; content: string }[];
  }[];
  addSession: (contactName: string) => void;
  removeSession: (sessionId: string) => void;
}

export const useMSNStore = create<MSNStore>((set) => ({
  activeSessions: [],
  addSession: (contactName) => {
    const newSession = {
      id: "123",
      contactName,
      messages: [],
    };
    set((state) => ({
      activeSessions: [...state.activeSessions, newSession],
    }));
  },
  removeSession: (sessionId) => {
    set((state) => ({
      activeSessions: state.activeSessions.filter((s) => s.id !== sessionId),
    }));
  },
}));
