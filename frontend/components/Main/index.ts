import { Container } from "../../util/Container";
import "./style.scss";

export default class Main extends Container {

  constructor($target: HTMLElement, ID: string) {
    super($target, "Main");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
            <h1>메인</h1>
        `;
  }

  componentDidMount() {}
}
