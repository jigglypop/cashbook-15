import { Container } from "../../../util/Container";
import { dot } from "../../../util/makeLengthTwo";
import "./style.scss";

export interface IRecordItem {
  amount: number;
  categoryValue: string;
  categoryId: number;
  content: string;
  paymentValue: string;
  paymentId: number;
  type: string;
}

export default class RecordItem extends Container {
  public props: IRecordItem;

  constructor($target: HTMLElement, ID: string, props: IRecordItem) {
    super($target, "RecordItem");
    this.ID = ID;
    this.props = props;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
        <div class="recorditem">
        <div class="recorditem-item left">
          <CategoryBadge :key="${this.props.categoryId}" />
          <h4>${this.props.content}</h4>
        </div>
        <div class="recorditem-item payment">
          <h4>${this.props.paymentValue}</h4>
        </div>
        <div class="recorditem-item right">
          <h4>${dot(this.props.amount)} 원</h4>
        </div>
        </div>
    `;
  }

  componentDidMount() {
    return {};
  }
}
