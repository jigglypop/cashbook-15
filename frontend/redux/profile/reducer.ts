import { initialState } from ".";
import { CHANGEPROFILE } from "./actions";

export interface IProfileAction {
  type: string;
  key: string;
  value: string;
}
export function profileReducer(state = initialState, action: IProfileAction) {
  switch (action.type) {
    case CHANGEPROFILE:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
