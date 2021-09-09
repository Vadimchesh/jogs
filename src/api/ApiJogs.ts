import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ApiUserLogin, API_URL, IApiAuth } from "./apiLayer";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  const { accessToken } = useTypedSelector(state => state.auth);
  const token = accessToken;

  if (token) {
    newConfig.headers["Authorization"] = "Bearer " + token;
  }

  return newConfig;
});

class ApiJogs implements IApiAuth {
  login = async (): Promise<AxiosResponse<ApiUserLogin>> => {
    try {
      const response: AxiosResponse<ApiUserLogin> = await axios.post(
        `${API_URL.login}`,
        {
          line: "",
        }
      );

      return response;
    } catch (e) {
      throw new Error();
    }
  };
}
export default new ApiJogs();
