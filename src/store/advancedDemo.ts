import { createStore } from "@lucid/index.ts";

type AdvancedDemoState = {
  count: number;
  increment: () => void;
  reset: () => void;
};

export const advancedDemoStore = createStore<AdvancedDemoState>(
  (set, get) => ({
    count: 0,

    increment: () => {
      const state = get() as AdvancedDemoState;
      const currentCount = state.count + 1;
      console.log("Store increment, novo count:", currentCount);
      set({ count: currentCount });
    },

    reset: () => {
      set({ count: 0 });
    },
  }),
  {
    name: "advanced-demo-store",
    persist: true,
    version: 1,
  },
);
