import { store } from "..";
import cache from "../util/cache";
import { makeYearMonth } from "../util/getDate";
import { getYearMonthToString } from "../util/getYear";
import { makeLengthTwo } from "../util/makeLengthTwo";
import request from "./utils/request";

const BASE_URL = "/api/records";

const writerecords = () => {
  const token = cache.get("token");
  const data = store.writerecords.getState();
  const amount_abs = Math.abs(Number(data.amount));
  if (data.type === "income") {
    data.amount = amount_abs * 1;
  } else {
    data.amount = amount_abs * -1;
  }
  const yearmonth = getYearMonthToString();
  data.month = yearmonth;
  return request.post(BASE_URL, data, token);
};

const getrecords = () => {
  const token = cache.get("token");
  const yearmonth = getYearMonthToString();
  return request.get(BASE_URL + `/?month=${yearmonth}`, token);
};

const records = {
  writerecords,
  getrecords,
};

export default records;
