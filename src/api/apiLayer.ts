import { AxiosResponse } from "axios";
import { IJog } from "../models/IJog";

export interface IDelivery {
  ApiJogs: IApiJogs;
  ApiAuth: IApiAuth;
}

export interface IApiAuth {
  login: () => Promise<AxiosResponse<ApiUserLogin>>;
}

export interface IApiJogs {
  getJogs: () => Promise<AxiosResponse<ApiJog>>;
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

export type ApiJog = {
  response: Jogs;
  timestamp: number;
};

export type Jogs = {
  jogs: IJog[];
  users: any;
};

export const ROOT_URL = "https://jogtracker.herokuapp.com";

export const API_URL = {
  login: "/api/v1/auth/uuidLogin",
  getJogs: "/api/v1/data/sync",
};
