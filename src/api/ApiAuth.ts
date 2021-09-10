import axios, { AxiosResponse } from "axios";

import { API_URL, ApiUserLogin, IApiAuth, ROOT_URL } from "./apiLayer";

const axiosApiInstance = axios.create();

class ApiAuth implements IApiAuth {
  login = async (): Promise<AxiosResponse<ApiUserLogin>> => {
    try {
      const response: AxiosResponse<ApiUserLogin> = await axiosApiInstance.post(
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
