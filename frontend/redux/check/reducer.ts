import { initialState } from ".";
import {
  CALENDAR,
  CHECK,
  CHECKANDROUTE,
  INIT,
  INTRO,
  MAIN,
  STATISTIC,
} from "./actions";

export interface ICheckAction {
  type: string;
  username: string;
  id: string;
  path: string;
  params: number;
}
export function checkReducer(state = initialState, action: ICheckAction) {
  switch (action.type) {
    case INIT:
      return state;
    case CHECK:
      return {
        ...state,
        username: action.username,
      };
    case CHECKANDROUTE:
      return {
        ...state,
        username: action.username,
        id: action.id,
        path: action.path,
        params: action.params,
      };
    case INTRO:
      return {
        ...state,
        path: "",
      };
    case MAIN:
      return {
        ...state,
        path: "main",
      };
    case STATISTIC:
      return {
        ...state,
        path: "statistic",
      };
    case CALENDAR:
      return {
        ...state,
        path: "calendar",
        params: action.params,
      };
    default:
      return state;
  }
}
