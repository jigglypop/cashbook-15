import { makeLengthTwo } from "./makeLengthTwo";

export const Year = (date: Date) => {
  return date.getFullYear();
};

export const Month = (date: Date) => {
  return date.getMonth();
};
export const Day = (date: Date) => {
  return date.getDate();
};

export const MakeLengthTwoAndNumber = (year: number, month: number) => {
  const _year = year.toString();
  const _month = makeLengthTwo(month);
  return Number(_year + _month);
};

export const PlusMonth = (params: number) => {
  let year = Number(params.toString().slice(0, 4));
  let month = Number(params.toString().slice(4, 6));
  if (month === 12) {
    year += 1;
    month = 1;
  } else {
    month += 1;
  }
  return MakeLengthTwoAndNumber(year, month);
};

export const MinusMonth = (params: number) => {
  let year = Number(params.toString().slice(0, 4));
  let month = Number(params.toString().slice(4, 6));
  if (month === 1) {
    year -= 1;
    month = 12;
  } else {
    month -= 1;
  }
  return MakeLengthTwoAndNumber(year, month);
};

export const makeYearMonth = (params: string) => {
  const year = Number(params.toString().slice(0, 4));
  const month = Number(params.toString().slice(4, 7));
  return [year, month];
};
