import { store } from "../../..";
import { Container } from "../../../util/Container";
import "./style.scss";

export default class MainContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "MainContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const { username } = store.check.getState();
    return `
          <h1>메인 컨테이너</h1>
          <h2>${username}</h2>
          <MainView/>
      `;
  }

  componentDidMount() {
    return {};
  }
}
