import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./instance";

export default class API {
  static async get<D>(url: string, option?: AxiosRequestConfig): Promise<D> {
    return axiosInstance({ url, method: "GET", ...option });
  }
  static post<T, D>(
    url: string,
    params: T,
    option?: AxiosRequestConfig,
  ): Promise<D> {
    return axiosInstance({ url, method: "POST", params, ...option });
  }
}
