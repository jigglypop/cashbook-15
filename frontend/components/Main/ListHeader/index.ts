import { store } from "../../..";
import { setFilter } from "../../../redux/list/actions";
import { Container } from "../../../util/Container";
import { $ } from "../../../util/jQurey";
import { dot } from "../../../util/makeLengthTwo";
import "./style.scss";

export default class ListHeader extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "ListHeader", ["list"]);
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const { filter, data } = store.list.getState();
    let all = 0;
    let income = 0;
    let expense = 0;
    let all_count = 0;
    let income_count = 0;
    let expense_count = 0;
    if (data) {
      all = data[3];
      income = data[4];
      expense = data[5];
      all_count = data[6];
      income_count = data[7];
      expense_count = data[8];
    }
    return `
          <div class="calendar-title" >
            <div class="calendar-item" >
              <label for="radio-all" >합계 (${all_count}): ${dot(all)}원</label>
              <input name="income-expense" type="radio" id="radio-all" class="income-expense-radio" ${
                filter === "all" ? "checked" : ""
              } />
            </div>
            <div class="calendar-item" >
              <label for="radio-income" >수입 (${income_count}): ${dot(
      income
    )}원 </label>
              <input name="income-expense" type="radio" id="radio-income" class="income-expense-radio" ${
                filter === "income" ? "checked" : ""
              }/>
              <label for="radio-expense" >지출 (${expense_count}): ${dot(
      Math.abs(expense)
    )}원</label>
              <input name="income-expense" type="radio" id="radio-expense" class="income-expense-radio" ${
                filter === "expense" ? "checked" : ""
              }/>
            </div>
          </div>
    `;
  }

  componentDidMount() {
    const radios = document.querySelectorAll("input[name='income-expense']");
    radios.forEach((item: any) => {
      $(item).on("change", function (e: any) {
        const tag = e.target.id.split("-");
        store.list.dispatch(setFilter(tag[1]));
      });
    });
    return {};
  }
}
