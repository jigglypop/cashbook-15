import { Container } from "../../../util/Container";
import { toggleCredit } from "../../../util/goRouter";
import { $ } from "../../../util/jQurey";
import "./style.scss";

export default class CardContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CardContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
      <CardView/>
      `;
  }

  componentDidMount() {
    $(".CardContainerOuter").on("click", function (e: any) {
      if (e.target.className === "CardContainerOuter") {
        toggleCredit();
      }
    });
  }
}
