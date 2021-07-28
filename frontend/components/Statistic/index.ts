import { Container } from "../../util/Container";
import "./style.scss";

export default class Statistic extends Container {
  public state = {
    title: "",
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "Statistic");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
            <h1>통계</h1>
        `;
  }

  componentDidMount() {
    return {};
  }
}
