import { Container } from "../../../util/Container";

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
      <PieView/>
      <LineView/>
      <FilteredCategory/>
    `;
  }

  componentDidMount() {
    return {};
  }
}
