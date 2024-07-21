import { defineStore } from "pinia";
import { StateSideBar } from "../types/stateSideBar";
const useSidebarStore = defineStore("sidebar", {
  state: (): StateSideBar => ({
    isOpen: false,
  }),
  getters: {
    getIsOpen: (state): boolean => state.isOpen,
  },
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});

export default useSidebarStore;
