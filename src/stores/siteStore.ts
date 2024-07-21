import { defineStore } from "pinia";
import { StateSite } from "../types/stateSite";
import ApiService from "../services/ApiService";
import { Site } from "../interfaces/Site";
import useLoaderStore from "./loaderStore";
const apiService = new ApiService();
const loaderStore = useLoaderStore();

const useSiteStore = defineStore("site", {
  state: (): StateSite => ({
    storeSites: [],
    page: 1,
    limit: 10,
    filters: {},
  }),
  getters: {
    getStoreSites: (state): Array<Site> => state.storeSites,
    getPage: (state): number => state.page,
    getLimit: (state): number => state.limit,
    getFilters: (state): object => state.filters,
    getSite: (state): Function => {
      return (id: string) => state.storeSites.find((site) => site.id === id);
    },
  },
  actions: {
    /**
     *
     * @param page
     * @param limit
     * @param filters
     */
    async fetchSites(
      page: number = 1,
      limit: number = 10,
      filters: object = {}
    ): Promise<void> {
      this.page = page;
      this.limit = limit;
      this.filters = filters;
      const params = {
        _expand: "client",
        _page: this.page,
        _limit: this.limit,
        ...this.filters,
      };
      try {
        loaderStore.handleLoaderGlobal(true);
        const response = await apiService.get("/sites", params);
        if (response.status === 200) {
          const { data } = response;
          this.storeSites = data.map((site: Site) => {
            const { client, contacts, address, id, title } = site;

            const siteTemp: Site = {
              id,
              title,
              contacts,
              address,
              client,
            };
            return siteTemp;
          });
          loaderStore.handleLoaderGlobal(false);
        } else {
          this.storeSites = [];
          loaderStore.handleLoaderGlobal(false);
        }
      } catch (error) {
        loaderStore.handleLoaderGlobal(false);
        this.storeSites = [];
      }
    },
    setSites(sites: Array<Site>) {
      this.storeSites = sites;
    },
  },
});

export default useSiteStore;
