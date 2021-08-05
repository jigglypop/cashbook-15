import { store } from "../../..";
import { IHeaderView } from "../../../App";
import { CalendarSVG } from "../../../common/SVG/CalendarSVG";
import { HambergerSVG } from "../../../common/SVG/HambergerSVG";
import { MainSVG } from "../../../common/SVG/MainSVG";
import { OlympicRingsSVG } from "../../../common/SVG/OlympicRingsSVG";
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
    const { img } = this.check;

    return `
      <div class="header-item left" >
        <div class="header-button-item">
          ${OlympicRingsSVG}
        </div>
        <div class="header-button-item">
          <h4 id="main-title" >WOOWA CASHBOOK</h4>
        </div>
      </div>
      <div class="header-item center" >
        <div class="header-button goback" id="calendar-front">
          <h4><</h4>
        </div>
        <div class="header-button days" id="calendar-front">
          <h1 id="month-title" >${month}<span id="month-title-month">월</span></h1>
          <h4 id="year-title">${year}</h4>
        </div>    
        <div class="header-button goback" id="calendar-back">
          <h4>></h4>
        </div>
      </div>
      <div class="header-item right" id="header-icons">
          <div class="header-button login" id="avatar-button" >
            <Avatar :width="40px" :height="40px" ${
              img !== "" ? `:profileImage="${img}"` : ""
            }/>
            <h4 id="login-id">${
              this.props.username ? this.props.username : ""
            }</h4>

          </div>
          <div class="header-svg isnothamberger" >
            <div  class="header-button" id="home-navigation">
              ${MainSVG}
            </div>
          </div>
          <div class="header-svg isnothamberger" >
            <div class="header-button" id="calendar-navigation">
              ${CalendarSVG}
            </div>
          </div>
          <div class="header-svg isnothamberger" >
            <div class="header-button" id="statistic-navigation">
              ${StatisticSVG}
            </div>
          </div>
          <div class="header-svg ishamberger" id="hamberger" >
            <div class="header-button" id="calendar-navigation">
              ${HambergerSVG()}
            </div>
          </div>
      </div>
      <div class="header-item hamberger" id="header-hamberger">
          <div class="header-svg" >
            <div  class="header-button" id="home-navigation-hamberger">
              ${MainSVG}
            </div>
          </div>
          <div class="header-svg" >
            <div class="header-button" id="calendar-navigation-hamberger">
              ${CalendarSVG}
            </div>
          </div>
          <div class="header-svg" >
            <div class="header-button" id="statistic-navigation-hamberger">
              ${StatisticSVG}
            </div>
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

  toggleProfile() {
    $(".ProfileViewOuter").toggleClass("dropProfile");
  }
  toggleHamberger() {
    $("#header-hamberger").toggleClass("isHambergetOpen");
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
    $("#home-navigation-hamberger").on("click", this.goMain);
    $("#calendar-navigation-hamberger").on("click", this.goCalendar);
    $("#statistic-navigation-hamberger").on("click", this.goStatistic);
    $("#logout-button").on("click", this.goLogout);
    $("#avatar-button").on("click", this.toggleProfile);
    $("#hamberger").on("click", this.toggleHamberger);
  }
}
