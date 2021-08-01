import { Month, Year } from "./getDate";
import { makeLengthTwo } from "./makeLengthTwo";

export const getPath = () => {
  const path = location.pathname.split("/");
  const pathname = path[1];
  const params = path[2] ? Number(path[2]) : 0;
  return [pathname, params];
};

export const getCode = () => {
  const query = location.search;
  const code = query.replace("?", "").split("=");
  return code[1];
};

export const generateToday = () => {
  const now = new Date();
  const month = Month(now) + 1;
  const _month = makeLengthTwo(month);
  const year = Year(now).toString();
  return year + _month;
};
