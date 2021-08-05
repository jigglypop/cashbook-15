import { store } from "..";
import cache from "../util/cache";
import request from "./utils/request";

const BASE_URL = "/api/auth";

const check = () => {
  const token = cache.get("token");
  return request.get(BASE_URL + "/check", token);
};

const login = () => {
  const token = cache.get("token");
  const data = store.login.getState();
  return request.post(BASE_URL + "/login", data, token);
};

const register = () => {
  const token = cache.get("token");
  const data = store.register.getState();
  return request.post(BASE_URL + "/register", data, token);
};

const profile = () => {
  const token = cache.get("token");
  const data = store.profile.getState();
  return request.put(BASE_URL, data, token);
};

const auth = {
  check,
  login,
  register,
  profile,
};

export default auth;
