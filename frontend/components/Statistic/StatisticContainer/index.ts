import { Container } from "../../../util/Container";
import "./style.scss";

export default class StatisticContainer extends Container {
  public state = {
    title: "",
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "StatisticContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
            <h1>통계 컨테이너</h1>
            <StatisticView/>
        `;
  }

  componentDidMount() {
    return {};
  }
}
