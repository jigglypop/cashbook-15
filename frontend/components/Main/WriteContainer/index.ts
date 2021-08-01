import { Container } from "../../../util/Container";
import "./style.scss";

export default class WriteContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "WriteContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
        <WriteView />
      `;
  }

  componentDidMount() {
    return {};
  }
}
