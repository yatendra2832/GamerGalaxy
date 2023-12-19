import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstnace = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5db3719e1c3c497db56bb1422b96fd88",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstnace
      .get<FetchResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };
}

export default APIClient;
