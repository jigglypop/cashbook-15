import { initialState } from ".";
import { CALENDAR, CHECK, CHECKANDROUTE, MAIN, STATISTIC } from "./actions";

export function checkReducer(state = initialState, action: any) {
  switch (action.type) {
    case CHECK:
      return {
        ...state,
        username: action.username,
      };
    case CHECKANDROUTE:
      return {
        ...state,
        username: action.username,
        path: action.path,
        params: action.params,
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
