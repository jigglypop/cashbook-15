import { Month, Year } from "./getDate";

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
  let month = (Month(now) + 1).toString();
  if (month.length === 1) {
    month = "0" + month;
  }
  const year = Year(now).toString();
  return year + month;
};
