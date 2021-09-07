import { AuthActionCreators } from "./auth/action-creators";
import { JogActionCreators } from "./event/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...JogActionCreators,
};
