import { IHeaderView } from "../../../App";
import { Container } from "../../../util/Container";
import "./style.scss";

export default class FooterContainer extends Container {
  public props: IHeaderView;

  constructor($target: HTMLElement, ID: string, props: IHeaderView) {
    super($target, "FooterContainer");
    this.ID = ID;
    this.props = props;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `<FooterView />`;
  }

  componentDidMount() {
    return {};
  }
}
