import { Container } from "../../../util/Container";
import "./style.scss";

export default class IntroContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "IntroContainer");
    this.ID = ID;
    this.init();
  }

  async componentWillMount() {
    return {};
  }

  render() {
    return `
    <h1>로그인페이지</h1>

    <IntroView />
    `;
  }

  componentDidMount() {
    return {};
  }
}
