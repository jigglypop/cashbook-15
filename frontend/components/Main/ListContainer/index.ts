import { Container } from "../../../util/Container";
import "./style.scss";

export default class ListContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "ListContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
      <ListHeader/>
      <ListView />
      `;
  }

  componentDidMount() {
    return {};
  }
}
