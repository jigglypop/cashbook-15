import { store } from "..";
import cache from "../util/cache";
import { makeYearMonth } from "../util/getDate";
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
  return request.post(BASE_URL, data, token);
};

const getrecords = () => {
  const token = cache.get("token");
  const { params } = store.check.getState();
  const data = makeYearMonth(params);
  return request.get(BASE_URL + `/?month=${data[1]}`, token);
};

const records = {
  writerecords,
  getrecords,
};

export default records;
