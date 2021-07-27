import { Container } from "./util/Container";

class Router extends Container {
  constructor($target: HTMLElement) {
    super($target, "Router", ["router"]);
    this.init();
  }

  componentWillMount() {
    return {}
  }

  switch(path: string, params: number) {
    if (path === "/") {
      return `<Main/>`
    } else if (path === "/statistic") {
      return `<Statistic/>`
    } else if (path === "/calendar") {
      return `<Calendar/>`
    }
  }

  render() {
    return `
           <h1>라우터일까요</h1>
           ${this.switch(location.pathname, 0)}
        `;
  }

  componentDidMount() {}
}

export default Router;
