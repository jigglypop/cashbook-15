import { createStore } from "../createStore";
import { routerReducer } from "./reducer";

interface IRouter {
  path: string;
  params: number;
}

export const initialState: IRouter = {
  path: "",
  params: 0,
};

export const router = createStore<IRouter>(initialState, routerReducer);
