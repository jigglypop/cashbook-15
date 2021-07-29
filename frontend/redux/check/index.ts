import { generateToday } from "../../util/getPath";
import { createStore } from "../createStore";
import { checkReducer } from "./reducer";

export interface ICheck {
  username: string;
  path: string;
  params: number;
}

export const initialState: ICheck = {
  username: "",
  path: "",
  params: Number(generateToday()),
};

export const check = createStore<ICheck>(initialState, checkReducer);
