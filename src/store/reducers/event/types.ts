import { IJog } from "../../../models/IJog";

export interface JogState {
  jogs: IJog[];
}

export enum JogActionEnum {
  SET_JOGS = "SET_JOGS",
}

export interface SetJogsAction {
  type: JogActionEnum.SET_JOGS;
  payload: IJog[];
}

export type JogAction = SetJogsAction;
