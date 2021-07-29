import { Container } from "./util/Container";
import { getPath } from "./util/getPath";

class Router extends Container {
  constructor($target: HTMLElement) {
    super($target, "Router");
    this.init();
  }

  componentWillMount() {
    return {};
  }

  switch(path: string) {
    if (path === "") {
      return `<IntroContainer/>`;
    } else if (path === "main") {
      return `<MainContainer/>`;
    } else if (path === "github") {
      return `<CallbackContainer/>`;
    } else if (path === "statistic") {
      return `<StatisticContainer/>`;
    } else if (path === "calendar") {
      return `<CalendarContainer />`;
    }
  }

  render() {
    const [pathname, _] = getPath();
    return `${this.switch(pathname.toString())}`;
  }

  componentDidMount() {
    return {};
  }
}

export default Router;
