import { Container } from "../../util/Container";
import "./style.scss";

export default class Calendar extends Container {

  constructor($target: HTMLElement, ID: string) {
    super($target, "Calendar");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
            <h1>캘린더</h1>
        `;
  }

  componentDidMount() {}
}
