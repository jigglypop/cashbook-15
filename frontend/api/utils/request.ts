import { HTTP_METHOD } from "./method";
import { BASE_URL } from "../../util/constants";

const requestGet = (url: string, token?: string) =>
  fetch(BASE_URL + url, HTTP_METHOD.GET(token)).then((res) => res.json());

const requestPost = (url: string, data: any, token?: string) =>
  fetch(BASE_URL + url, HTTP_METHOD.POST(data, token)).then((res) =>
    res.json()
  );

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
