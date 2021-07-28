import App from "./App";
import GlassButton from "./common/GlassButton/GlassButton";
import LineInput from "./common/LineInput/LineInput";
import Toast from "./common/Toast";
import CalendarContainer from "./components/Calendar/CalendarContainer";
import CalendarView from "./components/Calendar/CalendarView";
import HeaderContainer from "./components/Header/HeaderContainer";
import HeaderView from "./components/Header/HeaderView";
import IntroContainer from "./components/Intro/IntroContainer";
import IntroView from "./components/Intro/IntroView";
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
  HeaderContainer,
  HeaderView,
  Main,
  Statistic,
  CalendarContainer,
  CalendarView,
  IntroContainer,
  IntroView,
  Router,
  Toast,
};

export const store: any = createStore();
const app: any = new App($("#root").get());
store.instance.setInstance(`App-${app.ID}`, app);
