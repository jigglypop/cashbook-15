import { store } from "../../..";
import { Container } from "../../../util/Container";
import { toggleCredit } from "../../../util/goRouter";
import "./style.scss";

export default class CreditSelector extends Container {
  public type: string;
  constructor($target: HTMLElement, ID: string) {
    super($target, "CreditSelector", ["writerecords"]);
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {
      onPayment: () => {
        toggleCredit();
      },
    };
  }

  render() {
    const { paymentId } = store.writerecords.getState();

    return `
          <h6 class="write-text" >결제수단</h6>
          <div class="credit-selector" >
            <GlassButton :text="선택" @onClick="onPayment" :width="60px" :height="25px" />
            <h5 class="credit-card-name" >${
              paymentId === -1 ? "선택없음" : paymentId
            }</h5>
          </div>

    `;
  }

  componentDidMount() {
    return ``;
  }
}
