import { Jogs } from "../../../api/apiLayer";

export interface JogState {
  jogs: Jogs;
}

export enum JogActionEnum {
  SET_JOGS = "SET_JOGS",
}

export interface SetJogsAction {
  type: JogActionEnum.SET_JOGS;
  payload: Jogs;
}

export type JogAction = SetJogsAction;
