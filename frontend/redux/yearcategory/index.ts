import { IYearCategory } from "../../../src/models/YearCategory";
import { createStore } from "../createStore";
import { yearcategoryReducer } from "./reducer";

export interface IYearCategories {
  categoryId: number;
  data: IYearCategory;
}

export const initialState: IYearCategories = {
  categoryId: 1,
  data: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
  },
};

export const yearcategory = createStore<IYearCategories>(
  initialState,
  yearcategoryReducer
);
