import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const fetchClient = (): AxiosInstance => {
  const defaultOptions: any = {
    baseURL: process.env.REACT_APP_API_PATH,
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
