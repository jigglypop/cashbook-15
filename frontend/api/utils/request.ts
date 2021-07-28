import { HTTP_METHOD } from "./method";
import { BASE_URL } from "../../util/constants";

const read = (url: string) => fetch(BASE_URL + url).then((res) => res.json());

const post = (url: string, data: any) =>
  fetch(BASE_URL + url, HTTP_METHOD.POST(data)).then((res) => res.json());

const put = (url: string, data: any) =>
  fetch(BASE_URL + url, HTTP_METHOD.PUT(data)).then((res) => res.json());

const remove = (url: string) => fetch(BASE_URL + url, HTTP_METHOD.DELETE());

const request = {
  read,
  post,
  put,
  remove,
};

export default request;
