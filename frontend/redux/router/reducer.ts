import { initialState } from ".";
import { CALENDAR, MAIN, STATISTIC } from "./actions";

export function routerReducer(state = initialState, action: any) {
  switch (action.type) {
    case MAIN:
      return {
        ...state,
        path: ""
      };
    case STATISTIC:
      return {
        ...state,
        path: "statistic"
      };
    case CALENDAR:
      return {
        ...state,
        path: "calendar"
      };
    default:
      return state;
  }
}