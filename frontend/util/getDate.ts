export const Year = (date: Date) => {
  return date.getFullYear();
};

export const Month = (date: Date) => {
  return date.getMonth();
};

export const MakeLengthTwoAndNumber = (year: number, month: number) => {
  const _year = year.toString();
  let _month = month.toString();
  if (_month.length === 1) {
    _month = "0" + _month;
  }
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
