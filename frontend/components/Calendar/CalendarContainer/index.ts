import { Container } from "../../../util/Container";
import "./style.scss";

export default class CalendarContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CalendarContainer");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
    <CalendarDays />
    <CalendarView />`;
  }

  componentDidMount() {
    return {};
  }
}
