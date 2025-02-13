import { create } from "zustand";

interface TaskbarItem {
  id: string;
  title: string;
  icon: string;
}

interface TaskbarStore {
  menuOpen: boolean;
  toggleMenu: () => void;
  tasks: TaskbarItem[];
}

const useTaskbarStore = create<TaskbarStore>((set) => ({
  tasks: [],
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  addTask: (task: TaskbarItem) => {
    set((state) => {
      if (state.tasks.find((t) => t.id === task.id)) {
        return state;
      }
      return { tasks: [...state.tasks, task] };
    });
  },
  removeTask: (task: TaskbarItem) => {
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== task.id),
    }));
  },
}));

export default useTaskbarStore;
