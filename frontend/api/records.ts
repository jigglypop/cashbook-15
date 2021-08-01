import { store } from "..";
import cache from "../util/cache";
import { makeYearMonth } from "../util/getDate";
import request from "./utils/request";

const BASE_URL = "/api/records";

const writerecords = () => {
  const token = cache.get("token");
  const data = store.writerecords.getState();
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
