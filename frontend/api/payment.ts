import request from "./utils/request";

const BASE_URL = "/api/payments";

export interface IWritePayment {
  value: string;
}

const readAll = () => {
  return request.get(BASE_URL);
};

const write = (data: IWritePayment) => {
  return request.post(BASE_URL, data);
};

const remove = (id: number) => {
  return request.delete(BASE_URL + id);
};

const payment = {
  readAll,
  write,
  remove,
};

export default payment;
