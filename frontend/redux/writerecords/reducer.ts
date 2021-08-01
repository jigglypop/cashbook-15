import { initialState } from ".";
import { CHANGEWRITERECORDS } from "./actions";

export interface IWriteAction {
  type: string;
  key: string;
  value: string;
}

export function writerecordsReducer(
  state = initialState,
  action: IWriteAction
) {
  switch (action.type) {
    case CHANGEWRITERECORDS:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
