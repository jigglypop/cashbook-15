import { GITHUB_URL } from "../../../constants/constants";
import { Component } from "../../../util/Component";
import "./style.scss";

export default class LoginView extends Component {
  constructor($target: HTMLElement, ID: string) {
    super($target, "LoginView");
    this.ID = ID;
    this.init();
  }

  css() {
    return ``;
  }

  render() {
    return `
    <a href="${GITHUB_URL}">GITHUB</a>
    `;
  }
}
