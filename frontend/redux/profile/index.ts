import { createStore } from "../createStore";
import { profileReducer } from "./reducer";

export interface IProfile {
  img: string;
  userId: number;
}

export const initialState: IProfile = {
  img: "",
  userId: -1,
};

export const profile = createStore<IProfile>(initialState, profileReducer);
