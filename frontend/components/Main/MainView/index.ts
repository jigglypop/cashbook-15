import { store } from "../../..";
import { statistic } from "../../../redux/router/actions";
import { Container } from "../../../util/Container";
import { $ } from "../../../util/jQurey";
import "./style.scss";

export default class MainView extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "MainView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const { username } = store.check.getState();
    return `
        <h1>메인 뷰</h1>
        <h2>${username}</h2>
        <button id="statistic-button" >통계로</button>
    `;
  }

  componentDidMount() {
    $("#statistic-button").on("click", function () {
      history.pushState({ data: "statistic" }, "", "/statistic");
      store.check.dispatch(statistic());
    });
    return {};
  }
}
