import { JogActionEnum, SetJogsAction } from "./types";
import { AppDispatch } from "../../index";
import { IJog } from "../../../models/IJog";

export const JogActionCreators = {
  setJogs: (payload: IJog[]): SetJogsAction => ({
    type: JogActionEnum.SET_JOGS,
    payload,
  }),
  createJog: (event: IJog) => async (dispatch: AppDispatch) => {
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
};
