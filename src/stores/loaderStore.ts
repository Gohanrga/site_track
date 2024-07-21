import { defineStore } from "pinia";
import { StateLoader } from "../types/stateLoader";

const useLoaderStore = defineStore("loader", {
  state: (): StateLoader => ({
    storeLoadingGlobal: false,
    storeLoadingLocal: false,
  }),
  getters: {
    loadingGlobal: (state): boolean => {
      return state.storeLoadingGlobal;
    },
    loadingLocal: (state): boolean => {
      return state.storeLoadingLocal;
    },
  },
  actions: {
    handleLoaderGlobal(value: boolean): void {
      this.storeLoadingGlobal = value;
    },
    handleLoaderLocal(value: boolean): void {
      this.storeLoadingLocal = value;
    },
  },
});

export default useLoaderStore;
