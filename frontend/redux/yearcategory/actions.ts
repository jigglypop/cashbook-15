import { IYearCategory } from "../../../src/models/YearCategory";

export const SETYEARCATEGORY = "SETYEARCATEGORY";
export const SETID = "SETID";

export const setYearCategory = (data: IYearCategory, id: number) => ({
  type: SETYEARCATEGORY,
  data: data,
  id: id,
});

export const setYearCategoryId = (id: number) => ({
  type: SETID,
  id: id,
});
