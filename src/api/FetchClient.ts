import axios, { AxiosInstance } from "axios";

const fetchClient = (): AxiosInstance => {
  const defaultOptions: any = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access_token");
    // eslint-disable-next-line
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export default fetchClient();
