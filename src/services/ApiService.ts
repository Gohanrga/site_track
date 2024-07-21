import axiosClient from "../plugins/axios";

export default class ApiService {
  async get(url: string, params: object = {}) {
    return axiosClient.get(url, { params });
  }
}
