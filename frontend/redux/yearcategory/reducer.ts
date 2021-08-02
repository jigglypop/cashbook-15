import { initialState } from ".";
import { IYearCategory } from "../../../src/models/YearCategory";
import { SETID, SETYEARCATEGORY } from "./actions";

export interface IYearCategoryAction {
  type: string;
  data: IYearCategory;
  id: number;
}
export function yearcategoryReducer(
  state = initialState,
  action: IYearCategoryAction
) {
  switch (action.type) {
    case SETYEARCATEGORY:
      return {
        ...state,
        data: action.data,
        categoryId: action.id,
      };
    case SETID:
      return {
        ...state,
        categoryId: action.id,
      };
    default:
      return state;
  }
}
