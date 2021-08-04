import { store } from "../../..";
import { Container } from "../../../util/Container";
import { divide } from "../../../util/divide";
import { getPath } from "../../../util/getPath";
import { dot } from "../../../util/makeLengthTwo";
import { makeDateDiv } from "./makeDateDiv";
import { makeDayComponent } from "./makeDayComponent";
import "./style.scss";

export default class CalendarView extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CalendarView", ["list"]);
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const { data } = store.list.getState();
    let calcdate: any = null;
    let all = 0;
    let income = 0;
    let expense = 0;
    if (data) {
      calcdate = data[1];
      all = data[3];
      income = data[4];
      expense = data[5];
    }

    const path = getPath();
    const params = path[1];
    const year = Number(params.toString().slice(0, 4));
    const month = Number(params.toString().slice(4, 7));
    const beforeLast = new Date(year, month - 1, 0);
    const nowLast = new Date(year, month, 0);
    const bDay = beforeLast.getDay();
    const nDate = nowLast.getDate();
    const nDay = nowLast.getDay();
    const beforeDates = [];
    const nowDates = [...Array(nDate + 1).keys()].slice(1);
    const afterDates = [];

    if (bDay !== 6) {
      for (let i = 0; i < bDay + 1; i++) {
        beforeDates.unshift(-1);
      }
    }
    for (let i = 1; i < 7 - nDay; i++) {
      afterDates.push(-1);
    }
    const isSameMonth = new Date().getMonth() + 1 === month;

    const dates = beforeDates.concat(nowDates, afterDates);
    const DayComponent: string[] = makeDateDiv(dates, calcdate, isSameMonth);

    const DividedDay = divide(7, DayComponent);
    const dayComponent = makeDayComponent(DividedDay);

    return `
        <div id="calendar" >
          <div class="calendar-title" >
            <div class="calendar-item" >
              <h4>합계: ${dot(all)}원<h4>
            </div>
            <div class="calendar-item" >
              <h4>수입: ${dot(income)}원</h4>
              <h4>지출: ${dot(Math.abs(expense))}원</h4>
            </div>
          </div>
          ${dayComponent}
        </div>`;
  }

  componentDidMount() {
    return {};
  }
}
