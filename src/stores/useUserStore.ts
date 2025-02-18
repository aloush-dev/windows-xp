import { create } from "zustand";
import { User } from "../lib/types";

interface useUserStore {
  currentUser: null | User;
  users: User[];
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<useUserStore>((set) => ({
  currentUser: null,
  users: [
    { name: "Administrator", image: "images/profilePics/chess.jpg" },
    { name: "Guest", image: "images/profilePics/beach.jpg" },
  ],
  setUser: (user: User) => set({ currentUser: user }),
  logout: () => set({ currentUser: null }),
}));
