import { Container } from "../../../util/Container";
import "./style.scss";
export default class ListView extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "ListView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
        <h1>리스트뷰</h1>
    `;
  }

  componentDidMount() {
    return {};
  }
}
