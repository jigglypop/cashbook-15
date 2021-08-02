import { Container } from "../../util/Container";
import { $ } from "../../util/jQurey";
import { CheckSVG } from "../SVG/CheckSVG";
import "./style.scss";

interface ISmallButton {
  text: string;
  flag: string;
  onClick: () => void;
}

export default class SmallButton extends Container {
  private props: ISmallButton;

  constructor($target: HTMLElement, ID: string, props: ISmallButton) {
    super($target, "SmallButton");
    this.props = props;
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
      <button class="small-button" id="${this.ID}" >
        ${CheckSVG()}
      </button>`;
  }
  onClickAndCheck() {
    const checkSVG = $("#checksvg").get();
    if (checkSVG.style.stroke === "var(--primary1)") {
      this.props.onClick();
    }
  }

  componentDidMount() {
    $(`#SmallButtonOuter-${this.ID}`).on(
      "click",
      this.onClickAndCheck.bind(this)
    );
  }
}
