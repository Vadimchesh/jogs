import { AxiosResponse } from "axios";

import { API_URL, ApiUserLogin, IApiJogs } from "./apiLayer";
import FetchClient from "./FetchClient";

class ApiJogs implements IApiJogs {
  private _getJogs = async (): Promise<AxiosResponse<ApiUserLogin>> => {
    try {
      const response: AxiosResponse<ApiUserLogin> = await FetchClient.get(
        `${API_URL.getJogs}`
      );

      return response;
    } catch (e) {
      throw new Error();
    }
  };
  public get getJogs() {
    return this._getJogs;
  }
  public set getJogs(value) {
    this._getJogs = value;
  }
}
export default new ApiJogs();
