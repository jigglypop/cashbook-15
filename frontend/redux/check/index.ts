import { generateToday } from "../../util/getPath";
import { createStore } from "../createStore";
import { checkReducer } from "./reducer";

export interface ICheck {
  id: number;
  username: string;
  path: string;
  params: number;
}

export const initialState: ICheck = {
  id: -1,
  username: "",
  path: "",
  params: Number(generateToday()),
};

export const check = createStore<ICheck>(initialState, checkReducer);
