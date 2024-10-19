import { create } from "zustand";

type CounterState = {
  counter: number;
  actions: {
    incr: () => void;
  };
};

export const useCounter = create<CounterState>()((set) => ({
  counter: 0,
  actions: {
    incr: () => set((state) => ({ counter: state.counter + 1 })),
  },
}));
