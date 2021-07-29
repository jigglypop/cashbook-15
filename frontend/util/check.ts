import { store } from "..";
import api from "../api";
import { checkAndRoute } from "../redux/check/actions";
import cache from "./cache";

const check = async () => {
  // 토큰 받기
  const token = await cache.get("token");
  if (token) {
    const data = await api.auth.check();
    const path = location.pathname.split("/");
    const pathname = path[1];
    const params = path[2] ? Number(path[2]) : 0;
    const username = data.data.username;
    store.check.dispatch(checkAndRoute(username, pathname.toString(), params));
  }
};

export default check;
