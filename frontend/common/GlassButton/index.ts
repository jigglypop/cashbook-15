import { Container } from "../../util/Container";
import { $ } from "../../util/jQurey";
import "./style.scss";

interface IGlassButton {
  text: string;
  onClick: () => void;
}

export default class GlassButton extends Container {
  private props: IGlassButton;

  constructor($target: HTMLElement, ID: string, props: IGlassButton) {
    super($target, "GlassButton");
    this.props = props;
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
            <button class="glass-button" id="${this.ID}" >${this.props.text}</button>
        `;
  }

  componentDidMount() {
    $(`#GlassButtonOuter-${this.ID}`).on("click", this.props.onClick);
  }
}
