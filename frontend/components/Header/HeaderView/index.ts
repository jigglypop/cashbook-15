import { store } from "../../..";
import { IHeaderView } from "../../../App";
import { CalendarSVG } from "../../../common/SVG/CalendarSVG";
import { GoOutSVG } from "../../../common/SVG/GoOutSVG";
import { MainSVG } from "../../../common/SVG/MainSVG";
import { StatisticSVG } from "../../../common/SVG/StatisticSVG";
import { ICheck } from "../../../redux/check";
import { initCheck } from "../../../redux/check/actions";
import { Container } from "../../../util/Container";
import { createToast } from "../../../util/createToast";
import { makeYearMonth } from "../../../util/getDate";
import {
  goBackMonth,
  goCalendar,
  goFrontMonth,
  goIntro,
  goMain,
  goStatistic,
} from "../../../util/goRouter";
import { $ } from "../../../util/jQurey";
import "./style.scss";

export default class HeaderView extends Container {
  public props: IHeaderView;
  public check: ICheck;

  constructor($target: HTMLElement, ID: string, props: IHeaderView) {
    super($target, "HeaderView");
    this.ID = ID;
    this.props = props;
    this.check = store.check.getState();
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const [year, month] = makeYearMonth(this.check.params.toString());
    return `
      <div class="header-item" >
        <h4 class="header-button" id="main-title" >우아한 가계부</h4>
      </div>
      <div class="header-item" >
        <div class="header-button" id="calendar-front">
          <h4><</h4>
        </div>
        <div class="header-button" id="calendar-front">
          <h1>${month}월</h1>
          <h4>${year}</h4>
        </div>    
        <div class="header-button" id="calendar-back">
          <h4>></h4>
        </div>
      </div>
      <div class="header-item" >
          <div class="header-button login" >
            <h4 id="login-id">${
              this.props.username ? this.props.username : ""
            }</h4>
            <h4 id="logout-button" >${
              this.props.username ? GoOutSVG("var(--white-text)") : ""
            }</h4>
          </div>      
          <div class="header-button" id="home-navigation">
            ${MainSVG}
          </div>
          <div class="header-button" id="calendar-navigation">
            ${CalendarSVG}
          </div>
          <div class="header-button" id="statistic-navigation">
            ${StatisticSVG}
          </div>
      </div>
`;
  }
  goMain() {
    goMain();
  }

  goCalendar() {
    goCalendar();
  }

  goStatistic() {
    goStatistic();
  }
  async goLogout() {
    await store.check.dispatch(initCheck());
    await localStorage.clear();
    await goIntro();
    await createToast("로그아웃");
  }
  componentDidMount() {
    const goFront = () => {
      const params = this.check.params;
      goFrontMonth(params);
    };
    const goBack = () => {
      const params = this.check.params;
      goBackMonth(params);
    };
    $("#calendar-front").on("click", goFront);
    $("#calendar-back").on("click", goBack);
    $("#main-title").on("click", this.goMain);
    $("#home-navigation").on("click", this.goMain);
    $("#calendar-navigation").on("click", this.goCalendar);
    $("#statistic-navigation").on("click", this.goStatistic);
    $("#logout-button").on("click", this.goLogout);
  }
}
