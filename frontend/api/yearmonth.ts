import { store } from "..";
import cache from "../util/cache";
import { makeYearMonth } from "../util/getDate";
import { makeLengthTwo } from "../util/makeLengthTwo";
import request from "./utils/request";

const BASE_URL = "/api/yearcategory";

const getyearcategory = (categoryId: number) => {
  const token = cache.get("token");
  const { params, id } = store.check.getState();
  const [year] = makeYearMonth(params);
  const yearCategoryId =
    year.toString() + makeLengthTwo(categoryId) + id.toString();
  return request.get(BASE_URL + `/${yearCategoryId}`, token);
};

const records = {
  getyearcategory,
};

export default records;
