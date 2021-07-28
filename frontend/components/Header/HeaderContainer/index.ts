import { Container } from "../../../util/Container";
import "./style.scss";

export default class HeaderContainer extends Container {
  public state = {
    title: "",
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "HeaderContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `<HeaderView />`;
  }

  componentDidMount() {
    return {};
  }
}
