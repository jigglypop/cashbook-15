import { CloseSVG } from "../../../common/SVG/CloseSVG";
import { credits } from "../../../constants/constants";
import { Container } from "../../../util/Container";
import { toggleCredit } from "../../../util/goRouter";
import { $ } from "../../../util/jQurey";
import "./style.scss";

export default class CardView extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CardView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return ``;
  }

  render() {
    return `
    <div class="close-svg" id="close-svg">
      ${CloseSVG()}
    </div>
    <div class="cardview-item button" id="cardview-button-item" >
      ${credits
        .map((credit) => {
          return `<div class="move-carousel" id="carousel-${credit.key}" >#${credit.value}</div>`;
        })
        .join("\n")}
    </div>
    <div class="cardview-item">
      <CreditCarousel/>
    </div>
    `;
  }

  componentDidMount() {
    $("#close-svg").on("click", toggleCredit);
    $("#cardview-button-item").on("click", function (e: any) {
      if (e.target.className === "move-carousel") {
        const id = e.target.id;
        const key = id?.split("-")[1];
        const nums = Number(key);

        const creditWidth = $("body").val("--credit-width");
        const width_px = creditWidth?.replace("px", "");
        const width = Number(width_px ? width_px : 100);
        $(".carousel-slide").css("transform", `translateX(-${width * nums}px)`);
      }
    });
  }
}
