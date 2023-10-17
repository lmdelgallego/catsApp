import axios, { AxiosRequestConfig } from "axios";

export interface ApiClientConfig extends AxiosRequestConfig {
  baseUrl: string;
  apiKey: string;
}

const createApiClient = (config: ApiClientConfig) => axios.create({
  ...config,
  baseURL: config.baseUrl,
  headers: {
    "x-api-key": config.apiKey,
    "Content-Type": "application/json",
  },
})

export default createApiClient;