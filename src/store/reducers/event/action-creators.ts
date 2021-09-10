import api from "../../../api";
import { IJog } from "../../../models/IJog";
import { AppDispatch } from "../../index";
import { JogActionEnum, SetJogsAction } from "./types";
import { Jogs } from "../../../api/apiLayer";

export const JogActionCreators = {
  setJogs: (payload: Jogs): SetJogsAction => ({
    type: JogActionEnum.SET_JOGS,
    payload,
  }),

  createJog:
    (event: IJog) =>
    (dispatch: AppDispatch): void => {
      try {
        const jogs = localStorage.getItem("jogs") || "[]";
        const json = JSON.parse(jogs) as IJog[];
        json.push(event);
        localStorage.setItem("events", JSON.stringify(jogs));
      } catch (e) {
        console.log(e);
      }
    },

  getJogs:
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
      try {
        const response = await api.ApiJogs.getJogs();
        const jogs = response.data.response;
        dispatch(JogActionCreators.setJogs(jogs));
        localStorage.setItem("jogs", JSON.stringify(response));
      } catch (e) {
        console.log(e);
      }
    },
};
