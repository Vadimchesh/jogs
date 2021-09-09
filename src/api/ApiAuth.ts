import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ApiUserLogin, API_URL, IApiAuth, ROOT_URL } from "./apiLayer";

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

class ApiAuth implements IApiAuth {
  login = async (): Promise<AxiosResponse<ApiUserLogin>> => {
    try {
      const response: AxiosResponse<ApiUserLogin> = await axios.post(
        `${ROOT_URL}${API_URL.login}`,
        {
          uuid: "hello",
        }
      );

      return response;
    } catch (e) {
      throw new Error();
    }
  };
}
export default new ApiAuth();
