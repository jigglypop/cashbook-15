import { initialState } from ".";
import { CHANGELOGIN } from "./actions";

export interface ILoginAction {
  type: string;
  key: string;
  value: string;
}
export function loginReducer(state = initialState, action: ILoginAction) {
  switch (action.type) {
    case CHANGELOGIN:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
