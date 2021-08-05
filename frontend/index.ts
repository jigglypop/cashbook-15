import App from "./App";
import CategoryBadge from "./common/CategoryBadge";
import GlassButton from "./common/GlassButton";
import Input from "./common/Input";
import LineInput from "./common/LineInput";
import SmallButton from "./common/SmallButton";
import Toast from "./common/Toast";
import CalendarContainer from "./components/Calendar/CalendarContainer";
import CalendarDays from "./components/Calendar/CalendarDays";
import CalendarView from "./components/Calendar/CalendarView";
import CallbackContainer from "./components/Callback/CallbackContainer";
import CallbackView from "./components/Callback/CallbackView";
import HeaderContainer from "./components/Header/HeaderContainer";
import IntroContainer from "./components/Intro/IntroContainer";
import IntroView from "./components/Intro/IntroView";
import LoginView from "./components/Intro/LoginView";
import RegisterView from "./components/Intro/RegisterView";
import CategorySelector from "./components/Main/CategorySelector";
import DayItem from "./components/Main/DayItem";
import ListContainer from "./components/Main/ListContainer";
import ListHeader from "./components/Main/ListHeader";
import ListView from "./components/Main/ListView";
import MainContainer from "./components/Main/MainContainer";
import MainView from "./components/Main/MainView";
import RecordItem from "./components/Main/RecordItem";
import WriteContainer from "./components/Main/WriteContainer";
import WriteView from "./components/Main/WriteView";
import CategoryItem from "./components/Statistic/CategoryItem";
import FilteredCategory from "./components/Statistic/FilteredCategory";
import LineChart from "./components/Statistic/LineChart";
import LineView from "./components/Statistic/LineView";
import PieView from "./components/Statistic/PieView";
import StatisticContainer from "./components/Statistic/StatisticContainer";
import StatisticView from "./components/Statistic/StatisticView";
import FooterContainer from "./components/Footer/FooterContainer";
import FooterView from "./components/Footer/FooterView";
import CardContainer from "./components/Main/CardContainer";
import CardView from "./components/Main/CardView";
import Avatar from "./common/Avatar";
import CreditCard from "./components/Main/CreditCard";
import CreditSelector from "./components/Main/CreditSelector";
import CreditCarousel from "./components/Main/CreditCarousel";
import ProfileView from "./components/Header/ProfileView";
import HeaderView from "./components/Header/HeaderView";

import "./index.scss";
import createStore from "./redux";
import Router from "./Router";
import { $ } from "./util/jQurey";
import { setDarkMode } from "./util/setDisplay";

export const Modules: any = {
  App,
  Avatar,
  GlassButton,
  Input,
  LineInput,
  HeaderContainer,
  HeaderView,
  StatisticContainer,
  StatisticView,
  CalendarContainer,
  CalendarView,
  CalendarDays,
  IntroContainer,
  IntroView,
  MainContainer,
  MainView,
  CallbackContainer,
  CallbackView,
  Router,
  Toast,
  RegisterView,
  LoginView,
  WriteContainer,
  WriteView,
  ListContainer,
  ListView,
  CategorySelector,
  SmallButton,
  DayItem,
  RecordItem,
  CategoryBadge,
  PieView,
  LineView,
  CategoryItem,
  LineChart,
  FilteredCategory,
  ListHeader,
  FooterContainer,
  FooterView,
  CardContainer,
  CardView,
  CreditCard,
  CreditSelector,
  CreditCarousel,
  ProfileView,
};
setDarkMode();
export const store: any = createStore();
const app: any = new App($("#root").get());
store.instance.setInstance(`App-${app.ID}`, app);
