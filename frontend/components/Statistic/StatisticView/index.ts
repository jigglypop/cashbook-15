import { Container } from "../../../util/Container";
import "./style.scss";

export default class StatisticView extends Container {
  public state = {
    title: "",
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "StatisticView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
            <h1>통계 뷰</h1>
        `;
  }

  componentDidMount() {
    return {};
  }
}
