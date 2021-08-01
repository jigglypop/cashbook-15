import { createStore } from "../createStore";
import { listReducer } from "./reducer";

export interface ICategory {
  id: number;
  value: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPayment {
  id: number;
  value: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IListItem {
  id: number;
  type: string;
  amount: number;
  content: string;
  date: number;
  month: number;
  userId: number;
  categoryId: number;
  paymentId: number;
  createdAt: Date;
  updatedAt: Date;
  category: ICategory;
  payment: IPayment;
}

export interface IList {
  filter: string;
  data: any;
}

export const initialState: IList = {
  filter: "all",
  data: null,
};

export const list = createStore<IList>(initialState, listReducer);
