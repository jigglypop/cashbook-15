import { $ } from "../../util/jQurey";
import { React } from "../../util/React";
import "./style.scss";

interface ILineInput {
  text: string;
  type?: string;
  labelText?: string;
  value?: string;
  color?: string;
  width?: string;
  fontsize?: string;
  onChange: (e: InputEl) => void;
}

export interface InputEl {
  target: {
    value: string;
  };
}

export default class LineInput extends React {
  public props: ILineInput;

  constructor($target: HTMLElement, ID: string, props: ILineInput) {
    super($target, "LineInput");
    this.ID = ID;
    this.props = props;
    this.init();
  }

  css() {
    return `    
      #line-input-${this.ID} {
        ${this.props.width ? `width: ${this.props.width}` : ""}
      }
  
      #line-input-${this.ID} {
        ${this.props.fontsize ? `font-size: ${this.props.fontsize}` : ""}
      }
    `;
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
            <div class="LineInput" id="LineInput-${this.ID}"  >
                <input id="line-input-${this.ID}" 
                ${this.props.type === "number" ? 'type="number"' : ""}
                value="${this.props.value ?? ""}" />
                ${
                  this.props.labelText
                    ? `<label id="line-input-label-${this.ID}" >${this.props.labelText}</label>`
                    : ""
                }
            </div>
        `;
  }

  componentDidMount() {
    const that = this;
    const LineInput = $(`#LineInput-${this.ID}`).get();
    const input: any = $(`#line-input-${this.ID}`).get();

    $(`#line-input-label-${this.ID}`).on("click", () => {
      if (input.value.length === 0) {
        $(LineInput).toggleClass("Hold");
      }
    });
    $(`#line-input-${this.ID}`).on("input", function (e: any) {
      if (e.target.value.length > 0) {
        $(LineInput).addClass("Hold");
      } else {
        $(LineInput).removeClass("Hold");
      }
      that.props.onChange(e);
    });

    if (this.props.value && LineInput) {
      $(LineInput).addClass("Hold");
    }
  }
}
