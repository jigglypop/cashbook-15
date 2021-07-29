import { store } from ".";
import "./App.scss";
import check from "./util/check";
import { Container } from "./util/Container";

export interface IHeaderView {
  username: string;
  path: string;
  params: number;
}

class App extends Container {
  constructor($target: HTMLElement) {
    super($target, "App", ["check"]);
    check();
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    const { username, path, params } = store.check.getState();
    return `
      <HeaderContainer :username="${username}" :path="${path}" :params="${params}" />
      <Router/>
      <Toast/>`;
  }

  componentDidMount() {
    return {};
  }
}

export default App;
