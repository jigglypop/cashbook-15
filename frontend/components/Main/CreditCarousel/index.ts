import { credits } from "../../../constants/constants";
import { $ } from "../../../util/jQurey";
import { React } from "../../../util/React";
import "./style.scss";

interface ICreditCarousel {
  key: number;
  value: string;
  category: number;
}

export default class CreditCarousel extends React {
  public props: ICreditCarousel;
  constructor($target: HTMLElement, ID: string, props: ICreditCarousel) {
    super($target, "CreditCarousel");
    this.props = props;
    this.ID = ID;
    this.init();
  }

  css() {
    const creditWidth = $("body").val("--credit-width");
    const nums = creditWidth?.replace("px", "");
    const width = Number(nums ? nums : 100);

    return `
      .carousel-inner {
        margin-left: ${width}px;
      }
    `;
  }

  componentWillMount() {
    const creditWidth = $("body").val("--credit-width");
    const nums = creditWidth?.replace("px", "");
    const width = Number(nums ? nums : 100);
    $(".carousel-inner").css("transform", `translateX(-${width}px)`);
    return {};
  }

  render() {
    return `
    <div class="carousel-slide" >
        ${credits
          .map((credit) => {
            return `<CreditCard :key="${credit.key}" :value="${credit.value}" :category="${credit.category}" />`;
          })
          .join("\n")}
    </div>
`;
  }

  componentDidMount() {
    return {};
  }
}
