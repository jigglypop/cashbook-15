import { BASE_URL } from "../../constants/constants";
import cache from "../../util/cache";
import { HTTP_METHOD } from "./method";

const requestGet = async (url: string, token?: string) => {
  const res = await fetch(BASE_URL + url, HTTP_METHOD.GET(token));
  const data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return data;
};

const requestPost = async (url: string, data: any, token?: string) => {
  const res = await fetch(BASE_URL + url, HTTP_METHOD.POST(data, token));
  const _data = await res.json();
  const _token = res.headers.get("token");
  if (_token) {
    cache.set("token", _token);
  }
  return _data;
};
const requestPut = (url: string, data: any, token?: string) =>
  fetch(BASE_URL + url, HTTP_METHOD.PUT(data, token)).then((res) => res.json());

const requestDelete = (url: string, token?: string) =>
  fetch(BASE_URL + url, HTTP_METHOD.DELETE(token));

const request = {
  get: requestGet,
  post: requestPost,
  put: requestPut,
  delete: requestDelete,
};

export default request;
