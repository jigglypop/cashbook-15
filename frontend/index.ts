import App from "./App";
import GlassButton from "./common/GlassButton/GlassButton";
import LineInput from "./common/LineInput/LineInput";
import Toast from "./common/Toast";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Main from "./components/Main";
import Statistic from "./components/Statistic";
import "./index.scss";
import createStore from "./redux";
import Router from "./Router";
import { $ } from "./util/jQurey";


export const Modules: any = {
  App,
  GlassButton,
  LineInput,
  Header,
  Main,
  Statistic,
  Calendar,
  Router,
  Toast
};

export const store: any = createStore();
const app: any = new App($("#root").get());
store.instance.setInstance(`App-${app.ID}`, app);
