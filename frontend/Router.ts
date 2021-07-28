import { Container } from "./util/Container";
import { getPath } from "./util/getPath";

class Router extends Container {
  constructor($target: HTMLElement) {
    super($target, "Router", ["router"]);
    this.init();
  }

  componentWillMount() {
    return {};
  }

  switch(path: string) {
    if (path === "") {
      return `<Main/>`;
    } else if (path === "statistic") {
      return `<Statistic/>`;
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
