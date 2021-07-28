import { HTTP_METHOD } from "./method";
import { BASE_URL } from "../../util/constants";

const read = (url: string, token?: string) =>
  fetch(BASE_URL + url, HTTP_METHOD.GET(token)).then((res) => res.json());

const post = (url: string, data: any, token?: string) =>
  fetch(BASE_URL + url, HTTP_METHOD.POST(data, token)).then((res) =>
    res.json()
  );

const put = (url: string, data: any, token?: string) =>
  fetch(BASE_URL + url, HTTP_METHOD.PUT(data, token)).then((res) => res.json());

const remove = (url: string, token?: string) =>
  fetch(BASE_URL + url, HTTP_METHOD.DELETE(token));

const request = {
  read,
  post,
  put,
  remove,
};

export default request;
