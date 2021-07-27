import { store } from "../..";
import { CalendarSVG } from "../../common/SVG/CalendarSVG";
import { MainSVG } from "../../common/SVG/MainSVG";
import { StatisticSVG } from "../../common/SVG/StatisticSVG";
import { calendar, main, statistic } from "../../redux/router/actions";
import { Container } from "../../util/Container";
import { $ } from "../../util/jQurey";
import "./style.scss";


export default class Header extends Container {
  public state = {
    title: "",
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "Header");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {
    };
  }

  render() {
    return `
      <div class="header-item" >
        <h4 class="header-button" id="main-title" >우아한 가계부</h4>
      </div>
      <div class="header-item" >
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
    $("#main-title").on("click", function () {
      history.pushState({ data: '' }, '', '/')
      store.router.dispatch(main())
    })
    $("#home-navigation").on("click", function () {
      history.pushState({ data: '' }, '', '/')
      store.router.dispatch(main())
    })
    $("#calendar-navigation").on("click", function () {
      history.pushState({ data: 'calendar' }, '', '/calendar')
      store.router.dispatch(calendar())
    })
    $("#statistic-navigation").on("click", function () {
      history.pushState({ data: 'statistic' }, '', '/statistic')
      store.router.dispatch(statistic())
    })
  }
}
