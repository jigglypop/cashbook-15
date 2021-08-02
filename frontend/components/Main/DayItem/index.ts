import { store } from "../../..";
import { IListItem } from "../../../redux/list";
import { Container } from "../../../util/Container";
import { makeYearMonth } from "../../../util/getDate";
import "./style.scss";

export interface IDayItem {
  day: number;
  getData: (key: number) => IListItem[];
}

export default class DayItem extends Container {
  public props: IDayItem;

  constructor($target: HTMLElement, ID: string, props: IDayItem) {
    super($target, "DayItem");
    this.ID = ID;
    this.props = props;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const [year, month] = makeYearMonth(
      store.check.getState().params.toString()
    );
    const data = this.props.getData(this.props.day);
    return `
        <div>
          <div class="day-title-wrapper">
            <h4 class="day-title" >${year}년 ${month}월 ${this.props.day}일</h4>
          </div>
          ${data
            ?.map((item) => {
              return `<RecordItem :amount="${item.amount}" :categoryValue="${item.category.value}" :categoryId="${item.category.id}" :content="${item.content}" :paymentValue="${item.payment.value}" :type="${item.type}" />`;
            })
            .join("\n")}
        </div>
    `;
  }

  componentDidMount() {
    return {};
  }
}
