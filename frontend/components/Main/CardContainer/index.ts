import { Container } from "../../../util/Container";
import "./style.scss";

export default class CardContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CardContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
      <CardView/>
      `;
  }

  componentDidMount() {
    return {};
  }
}
