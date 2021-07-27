import { store } from "../..";
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
          <div class="header-button" id="home-navigation" >홈</div>
          <div class="header-button" id="calendar-navigation">달력</div>
          <div class="header-button" id="statistic-navigation">통계</div>
      </div>
`;
  }

  componentDidMount() {
    $("#main-title").on("click", function () {
      history.pushState({ data: '' }, 'title을 pushState로', '/')
      store.router.dispatch(main())
    })
    $("#home-navigation").on("click", function () {
      history.pushState({ data: '' }, 'title을 pushState로', '/')
      store.router.dispatch(main())
    })
    $("#calendar-navigation").on("click", function () {
      history.pushState({ data: 'calendar' }, 'title을 pushState로', '/calendar')
      store.router.dispatch(calendar())
    })
    $("#statistic-navigation").on("click", function () {
      history.pushState({ data: 'statistic' }, 'title을 pushState로', '/statistic')
      store.router.dispatch(statistic())
    })
  }
}
