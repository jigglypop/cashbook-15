import { store } from "../../..";
import { IHeaderView } from "../../../App";
import { CalendarSVG } from "../../../common/SVG/CalendarSVG";
import { MainSVG } from "../../../common/SVG/MainSVG";
import { StatisticSVG } from "../../../common/SVG/StatisticSVG";
import { ICheck } from "../../../redux/check";
import { calendar, main, statistic } from "../../../redux/check/actions";
import { Container } from "../../../util/Container";
import { MinusMonth, PlusMonth } from "../../../util/getDate";
import { generateToday } from "../../../util/getPath";
import { $ } from "../../../util/jQurey";
import "./style.scss";

export default class HeaderView extends Container {
  public state = {
    title: "",
  };
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
    return `
      <div class="header-item" >
        <h4 class="header-button" id="main-title" >우아한 가계부</h4>
      </div>
      <div class="header-item" >
        ${
          this.check.path === "calendar"
            ? `<div class="header-button" id="calendar-front">
          <h4>앞</h4>
        </div>     
        <div class="header-button" id="calendar-back">
          <h4>뒤</h4>
        </div>`
            : ""
        }  
      </div>
      <div class="header-item" >
          <div class="header-button" >
            <h4>${this.props.username}</h4>
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

  componentDidMount() {
    const params = this.check.params;
    $("#calendar-front").on("click", function () {
      const minusMonth = MinusMonth(params);
      history.pushState({ data: "calendar" }, "", `/calendar/${minusMonth}`);
      store.check.dispatch(calendar(minusMonth));
    });
    $("#calendar-back").on("click", function () {
      const plusMonth = PlusMonth(params);
      history.pushState({ data: "calendar" }, "", `/calendar/${plusMonth}`);
      store.check.dispatch(calendar(plusMonth));
    });
    $("#main-title").on("click", function () {
      history.pushState({ data: "" }, "", "/");
      store.check.dispatch(main());
    });
    $("#home-navigation").on("click", function () {
      history.pushState({ data: "" }, "", "/main");
      store.check.dispatch(main());
    });
    $("#calendar-navigation").on("click", function () {
      const thisYearMonth = generateToday();
      history.pushState({ data: "calendar" }, "", `/calendar/${thisYearMonth}`);
      store.check.dispatch(calendar(Number(thisYearMonth)));
    });
    $("#statistic-navigation").on("click", function () {
      history.pushState({ data: "statistic" }, "", "/statistic");
      store.check.dispatch(statistic());
    });
  }
}
