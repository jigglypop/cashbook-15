import { store } from "../../..";
import { changeWriteRecords } from "../../../redux/writerecords/actions";
import { toggleCredit } from "../../../util/goRouter";
import { $ } from "../../../util/jQurey";
import { React } from "../../../util/React";
import "./style.scss";

interface ICreditCard {
  key: number;
  value: string;
  category: number;
}

export default class CreditCard extends React {
  public props: ICreditCard;
  constructor($target: HTMLElement, ID: string, props: ICreditCard) {
    super($target, "CreditCard");
    this.props = props;
    this.ID = ID;
    this.init();
  }

  css() {
    return `
      #card-bg-${this.ID} {
        background: var(--category-badge-${this.props.category});
      }
      
      #credit-title-${this.ID} {
        color:var(--category-${this.props.category});
        text-shadow: 0_0_10px_var(--category-${this.props.category});
      }
    `;
  }

  componentWillMount() {
    return {
      changePaymentId: (e: any) => {
        store.writerecords.dispatch(
          changeWriteRecords("paymentId", e.target.value)
        );
      },
      submitPaymentId: () => {
        toggleCredit();
      },
    };
  }

  render() {
    const { username } = store.check.getState();
    return `
      <div class="credit-card-inner" id="credit-card-inner-${this.ID}" >
        <div class="card-bg" id="card-bg-${this.ID}" >
        </div>
        <img class="card-chip" id="card-chip-${
          this.ID
        }" src="/public/image/chip.png" />
        <h2 class="card-user" id="card-user-${this.ID}" >${username}</h2>
        <h2 class="card-secret" id="card-secret-${
          this.ID
        }">****-****-****-1234</h2>
        <img class="card-master" id="card-master-${
          this.ID
        }" src="/public/image/master.png" />
      </div>
      ${
        Number(this.props.key) !== 4
          ? `<h2 class="credit-title" id="credit-title-${this.ID}">${this.props.value}</h2>`
          : `<h2 class="credit-title write" >카드 이름 직접 입력</h2>
          <div class="credit-write-item" >
            <LineInput @onChange="changePaymentId" :labelText="카드 이름을 입력해주세요" />
            <GlassButton @onClick="submitPaymentId" :text="제출" :width="240px" :height="40px" :margin="10px" />
          </div>`
      }

      `;
  }

  componentDidMount() {
    const that = this;
    $(`.CardContainerOuter`).on("mousemove", function (rotate: any) {
      const x = (innerWidth / 2 - rotate.pageX) / 10;
      const y = (innerHeight / 2 - rotate.pageY) / 10;
      $(`#credit-card-inner-${that.ID}`).css(
        "transform",
        `rotateY(${x}deg) rotateX(${y}deg)`
      );
      $(`#card-chip-${that.ID}`).css("transform", "translate3d(0, 0, 20px)");
      $(`#card-user-${that.ID}`).css("transform", "translate3d(0, 0, 40px)");
      $(`#card-secret-${that.ID}`).css("transform", "translate3d(0, 0, 60px)");
      $(`#card-master-${that.ID}`).css("transform", "translate3d(0, 0, 80px)");
    });
    $(`.CardContainerOuter`).on("mouseout", function () {
      $(`#credit-card-inner-${that.ID}`).css(
        "transform",
        `rotateY(0deg) rotateX(0deg)`
      );
    });
    $(`#credit-card-inner-${that.ID}`).on("click", () => {
      if (Number(this.props.key) !== 4) {
        store.writerecords.dispatch(
          changeWriteRecords("paymentId", this.props.value)
        );
        toggleCredit();
      }
    });
  }
}
