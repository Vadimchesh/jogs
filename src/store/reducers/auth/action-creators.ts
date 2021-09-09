import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
} from "./types";
import { AppDispatch } from "../../index";
import api from "../../../api";

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  login: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await api.ApiAuth.login();
      if (response) {
        localStorage.setItem(
          "access_token",
          response.data.response.access_token
        );
        dispatch(AuthActionCreators.setIsAuth(true));
      } else {
        dispatch(AuthActionCreators.setError("Некорректный токен"));
      }
      dispatch(AuthActionCreators.setIsLoading(false));
    } catch (e) {
      dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
    }
  },
};
