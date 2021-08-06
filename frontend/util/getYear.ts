import { store } from "..";
import { makeYearMonth } from "./getDate";
import { makeLengthTwo } from "./makeLengthTwo";

export const getYear = (date: string) => {
  const year = date.split("-")[0];
  return Number(year);
};

export const getYearMonthToString = () => {
  const { params } = store.check.getState();
  const _data = makeYearMonth(params);
  const yearString = _data[0].toString();
  const monthString = makeLengthTwo(_data[1]).toString();
  const yearmonth = Number(yearString + monthString);
  return yearmonth;
};
