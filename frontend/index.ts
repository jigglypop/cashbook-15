import App from "./App";
import GlassButton from "./common/GlassButton";
import Input from "./common/Input";
import LineInput from "./common/LineInput";
import Toast from "./common/Toast";
import CalendarContainer from "./components/Calendar/CalendarContainer";
import CalendarView from "./components/Calendar/CalendarView";
import CallbackContainer from "./components/Callback/CallbackContainer";
import CallbackView from "./components/Callback/CallbackView";
import HeaderContainer from "./components/Header/HeaderContainer";
import HeaderView from "./components/Header/HeaderView";
import IntroContainer from "./components/Intro/IntroContainer";
import IntroView from "./components/Intro/IntroView";
import MainContainer from "./components/Main/MainContainer";
import MainView from "./components/Main/MainView";
import StatisticContainer from "./components/Statistic/StatisticContainer";
import StatisticView from "./components/Statistic/StatisticView";
import "./index.scss";
import createStore from "./redux";
import Router from "./Router";
import { $ } from "./util/jQurey";

export const Modules: any = {
  App,
  GlassButton,
  Input,
  LineInput,
  HeaderContainer,
  HeaderView,
  StatisticContainer,
  StatisticView,
  CalendarContainer,
  CalendarView,
  IntroContainer,
  IntroView,
  MainContainer,
  MainView,
  CallbackContainer,
  CallbackView,
  Router,
  Toast,
};

export const store: any = createStore();
const app: any = new App($("#root").get());
store.instance.setInstance(`App-${app.ID}`, app);
