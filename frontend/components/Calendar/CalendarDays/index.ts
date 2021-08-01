import { Container } from "../../../util/Container";
import "./style.scss";

export default class CalendarDays extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CalendarDays");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
        <div id="calendar-day" >
          <div class="calendar-day-item red" >
            <h5>일</h5>
          </div>
            <div class="calendar-day-item" >
            <h5>월</h5>
          </div>
          <div class="calendar-day-item" >
            <h5>화</h5>
          </div>
          <div class="calendar-day-item" >
            <h5>수</h5>
          </div>
          <div class="calendar-day-item" >
            <h5>목</h5>
          </div>
          <div class="calendar-day-item" >
            <h5>금</h5>
          </div>
          <div class="calendar-day-item blue" >
            <h5>토</h5>
          </div>
        </div>`;
  }

  componentDidMount() {
    return {};
  }
}
