import { Component } from "../../../util/Component";
import "./style.scss";

export default class IntroView extends Component {
  constructor($target: HTMLElement, ID: string) {
    super($target, "IntroView");
    this.ID = ID;
    this.init();
  }

  css() {
    return ``;
  }

  render() {
    return `<h1>로그인페이지</h1>`;
  }
}
