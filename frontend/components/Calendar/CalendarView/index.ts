import { Container } from "../../../util/Container";
import { divide } from "../../../util/divide";
import { getPath } from "../../../util/getPath";
import "./style.scss";

export default class CalendarView extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CalendarView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const [pathname, params] = getPath();
    const year = Number(params.toString().slice(0, 4));
    const month = Number(params.toString().slice(4, 7));
    const beforeLast = new Date(year, month - 1, 0);
    const nowLast = new Date(year, month, 0);
    const bDate = beforeLast.getDate();
    const bDay = beforeLast.getDay();

    const nDate = nowLast.getDate();
    const nDay = nowLast.getDay();

    const beforeDates = [];
    const nowDates = [...Array(nDate + 1).keys()].slice(1);
    const afterDates = [];

    if (bDay !== 6) {
      for (let i = 0; i < bDay + 1; i++) {
        beforeDates.unshift(bDate - i);
      }
    }

    for (let i = 1; i < 7 - nDay; i++) {
      afterDates.push(i);
    }
    const dates = beforeDates.concat(nowDates, afterDates);
    const DayComponent: string[] = [];
    dates.forEach((date, i) => {
      DayComponent[i] = `<div class="date">${date}</div>`;
    });
    const DividedDay = divide(7, DayComponent);
    console.log(DividedDay);
    let dayComponent = "";
    for (const week of DividedDay) {
      let temp = '<div class="week-item" >';
      for (const day of week) {
        temp += day + "\n";
      }
      temp += "</div>\n";
      dayComponent += temp;
    }
    return `
            <h1>캘린더뷰</h1>
            <div id="calendar" >
              ${dayComponent}
            </div>
        `;
  }

  componentDidMount() {
    return {};
  }
}
