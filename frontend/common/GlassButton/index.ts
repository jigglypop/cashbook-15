import { $ } from "../../util/jQurey";
import { React } from "../../util/React";
import "./style.scss";

interface IGlassButton {
  text: string;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  margin?: string;
  onClick: () => void;
}

export default class GlassButton extends React {
  private props: IGlassButton;

  constructor($target: HTMLElement, ID: string, props: IGlassButton) {
    super($target, "GlassButton");
    this.props = props;
    this.ID = ID;
    this.init();
  }
  css() {
    return `
      .glass-button-${this.ID} {
        ${
          this.props.background
            ? `background: ${this.props.background};\n`
            : `background: var(--header-color);\n`
        }
        ${
          this.props.color
            ? `color: ${this.props.color};\n`
            : `color: var(--app);\n`
        }
        ${
          this.props.margin ? `margin: ${this.props.margin};\n` : `margin: 0;\n`
        }
      }
    `;
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
            <button class="glass-button glass-button-${this.ID}"  id="${
      this.ID
    }" 
            ${
              this.props.width && this.props.height
                ? `style="width:${this.props.width};height:${this.props.height};"`
                : `style="width:250px;height:40px;"`
            }>${this.props.text}</button>
        `;
  }

  componentDidMount() {
    $(`#GlassButtonOuter-${this.ID}`).on("click", this.props.onClick);
  }
}
