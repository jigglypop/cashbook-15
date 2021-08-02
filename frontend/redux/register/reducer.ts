import { initialState } from ".";
import { CHANGEREGISTER } from "./actions";

export interface IRegisterAction {
  type: string;
  key: string;
  value: string;
}
export function registerReducer(state = initialState, action: IRegisterAction) {
  switch (action.type) {
    case CHANGEREGISTER:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
