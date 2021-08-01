import { createStore } from "../createStore";
import { registerReducer } from "./reducer";

export interface IRegister {
  username: string;
  email: string;
  password: string;
}

export const initialState: IRegister = {
  username: "",
  email: "",
  password: "",
};

export const register = createStore<IRegister>(initialState, registerReducer);
