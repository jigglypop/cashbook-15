import { initialState } from ".";
import { SETFILTER, SETLIST } from "./actions";
export function listReducer(state = initialState, action: any) {
  console.log(action.type, action.filter);
  switch (action.type) {
    case SETLIST:
      return {
        ...state,
        data: action.data,
      };
    case SETFILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}
