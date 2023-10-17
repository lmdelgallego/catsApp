import { AxiosResponse } from "axios";
import createApiClient from "./axiosHttp";

const apiClient = createApiClient({
  baseUrl: import.meta.env.VITE_CAT_APP_API_URL || "",
  apiKey: import.meta.env.VITE_CAT_APP_API_URL || "",
});

export const get = <T>(url: string, config = {}): Promise<AxiosResponse<T>> => apiClient.get(url, config);

export default {
  get
}