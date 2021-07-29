import cache from "../util/cache";
import { createToast } from "../util/createToast";
import request from "./utils/request";

const BASE_URL = "/api/auth";

const check = () => {
  const token = cache.get("token");
  createToast("체크");
  return request.get(BASE_URL + "/check", token);
};
const auth = {
  check,
};

export default auth;
