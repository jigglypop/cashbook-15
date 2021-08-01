import { Container } from "../../../util/Container";

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
            <StatisticView/>
        `;
  }

  componentDidMount() {
    return {};
  }
}
