import { Container } from "../../../util/Container";
import "./style.scss";

export default class CardView extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CardView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
      <h1>카드 뷰</h1>
      `;
  }

  componentDidMount() {
    return {};
  }
}
