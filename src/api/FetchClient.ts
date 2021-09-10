import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ROOT_URL } from "./apiLayer";

const fetchClient = (): AxiosInstance => {
  const defaultOptions: any = {
    baseURL: ROOT_URL,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config: AxiosRequestConfig) {
    const token = localStorage.getItem("access_token");
    // eslint-disable-next-line
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export default fetchClient();
