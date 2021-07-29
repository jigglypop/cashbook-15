import { Component } from "../../../util/Component";
import "./style.scss";

export default class CallbackView extends Component {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CallbackView");
    this.ID = ID;
    this.init();
  }

  css() {
    return ``;
  }

  render() {
    return `
            <h1>잠시만 기다려주세요</h1>
        `;
  }
}
