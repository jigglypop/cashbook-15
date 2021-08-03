import { store } from ".";
import api from "./api";
import { setData } from "./redux/list/actions";
import check from "./util/check";
import { Container } from "./util/Container";
import { $ } from "./util/jQurey";
import { sortByDay } from "./util/sortByDay";

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

  async componentWillMount() {
    const { path } = store.check.getState();
    if (path !== "") {
      const _data = await api.records.getrecords();
      await store.list.dispatch(setData(sortByDay(_data.data)));
    }
    return {};
  }

  render() {
    const { username, path, params } = store.check.getState();
    return `
      <HeaderContainer :username="${username}" :path="${path}" :params="${params}" />
      <Router/>
      <Toast/>
      <FooterContainer/>
      <CardContainer/>`;
  }

  componentDidMount() {
    $(".CardContainerOuter").addClass("isNotDisplay");
  }
}

export default App;
