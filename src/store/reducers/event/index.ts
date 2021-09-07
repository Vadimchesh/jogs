import { JogAction, JogActionEnum, JogState } from "./types";

const initialState: JogState = {
  jogs: [],
};

export default function JogReducer(
  state = initialState,
  action: JogAction
): JogState {
  switch (action.type) {
    case JogActionEnum.SET_JOGS:
      return { ...state, jogs: action.payload };
    default:
      return state;
  }
}
