import { AxiosResponse } from "axios";

import { API_URL, IApiJogs, ApiJog } from "./apiLayer";
import FetchClient from "./FetchClient";

class ApiJogs implements IApiJogs {
  getJogs = async (): Promise<AxiosResponse<ApiJog>> => {
    try {
      const response: AxiosResponse<ApiJog> = await FetchClient.get(
        `${API_URL.getJogs}`
      );

      return response;
    } catch (e) {
      throw new Error();
    }
  };
}
export default new ApiJogs();
