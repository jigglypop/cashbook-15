import { createStore } from "../createStore";
import { writerecordsReducer } from "./reducer";

export interface IWriteRecords {
  type: string;
  amount: number;
  content: string;
  date: number;
  month: number;
  year: number;
  userId: number;
  categoryId: number;
  paymentId: number;
}

export const initialState: IWriteRecords = {
  type: "expense",
  year: -1,
  amount: -1,
  content: "",
  date: -1,
  month: -1,
  userId: -1,
  categoryId: 1,
  paymentId: -1,
};

export const writerecords = createStore<IWriteRecords>(
  initialState,
  writerecordsReducer
);
