import { createStore } from "../createStore";
import { loginReducer } from "./reducer";

export interface ILogin {
  username: string;
  password: string;
}

export const initialState: ILogin = {
  username: "",
  password: "",
};

export const login = createStore<ILogin>(initialState, loginReducer);
