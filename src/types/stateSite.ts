import { Site } from "../interfaces/Site";
export type StateSite = {
  storeSites: Array<Site>;
  page: number;
  limit: number;
  filters: object;
};
