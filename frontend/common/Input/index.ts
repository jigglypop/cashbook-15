import { Container } from "../../util/Container";
import { $ } from "../../util/jQurey";
import "./style.scss";

interface IInput {
  text: string;
  type?: string;
  placeholder?: string;
  labelText?: string;
  value?: string;
  onChange: (e: InputEl) => void;
}
export interface InputEl {
  target: {
    value: string;
  };
}

export default class Input extends Container {
  public props: IInput;

  constructor($target: HTMLElement, ID: string, props: IInput) {
    super($target, "Input");
    this.ID = ID;
    this.props = props;
    this.init();
  }
  componentWillMount() {
    return {};
  }

  render() {
    return `
            <input
            ${this.props.type ? `type=${this.props.type}` : ""}
            class="Input" id="input-${this.ID}"
            value="${this.props.value ?? ""}"
            placeholder="${this.props.placeholder ?? ""}"></input>
        `;
  }
  componentDidMount() {
    const that = this;
    $(`#input-${this.ID}`).on("input", function (e: any) {
      that.props.onChange(e);
    });
  }
}
