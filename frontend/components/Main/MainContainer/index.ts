import { Container } from "../../../util/Container";
import "./style.scss";

export default class MainContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "MainContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
          <WriteContainer/>
          <h6 id="write-errortext" ></h6>
          <ListContainer/>
      `;
  }

  componentDidMount() {
    return {};
  }
}
