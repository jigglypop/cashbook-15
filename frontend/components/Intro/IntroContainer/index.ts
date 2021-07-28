import { Container } from "../../../util/Container";
import "./style.scss";

export default class IntroContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "IntroContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `<IntroView />`;
  }

  componentDidMount() {
    return {};
  }
}
