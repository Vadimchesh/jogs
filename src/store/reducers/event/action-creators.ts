import api from "../../../api";
import { IJog } from "../../../models/IJog";
import { AppDispatch } from "../../index";
import { JogActionEnum, SetJogsAction } from "./types";

export const JogActionCreators = {
  setJogs: (payload: IJog[]): SetJogsAction => ({
    type: JogActionEnum.SET_JOGS,
    payload,
  }),
  createJog:
    (event: IJog) =>
    (dispatch: AppDispatch): void => {
      try {
        const events = localStorage.getItem("events") || "[]";
        const json = JSON.parse(events) as IJog[];
        json.push(event);
        dispatch(JogActionCreators.setJogs(json));
        localStorage.setItem("events", JSON.stringify(json));
      } catch (e) {
        console.log(e);
      }
    },
  getJogs:
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        const response = await api.ApiJogs.getJogs();
        // dispatch(JogActionCreators.setJogs(response));
        localStorage.setItem("events", JSON.stringify(response));
      } catch (e) {
        console.log(e);
      }
    },
};
