import { AxiosResponse } from "axios";

export interface IDelivery {
  ApiJogs: IApiJogs;
  ApiAuth: IApiAuth;
}

export interface IApiAuth {
  login: () => Promise<AxiosResponse<ApiUserLogin>>;
}

export interface IApiJogs {
  login: () => Promise<AxiosResponse<ApiUserLogin>>;
}

export type ApiUserLogin = {
  response: {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    created_at: number;
  };
  timestamp: number;
};

export const ROOT_URL = "https://jogtracker.herokuapp.com";

export const API_URL = {
  login: "/api/v1/auth/uuidLogin",
};
