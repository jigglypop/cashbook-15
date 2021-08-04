import { IHeaderView } from "../../../App";
import { Container } from "../../../util/Container";
import "./style.scss";

export default class HeaderContainer extends Container {
  public props: IHeaderView;

  constructor($target: HTMLElement, ID: string, props: IHeaderView) {
    super($target, "HeaderContainer");
    this.ID = ID;
    this.props = props;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
    <HeaderView :username="${this.props.username}" :path="${this.props.path}" :params="${this.props.params}" />`;
  }

  componentDidMount() {
    return {};
  }
}
