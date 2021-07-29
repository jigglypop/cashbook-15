import { store } from "../../..";
import api from "../../../api";
import { checkAndRoute } from "../../../redux/check/actions";
import { Container } from "../../../util/Container";
import "./style.scss";

export default class CallbackContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CallbackContainer");
    this.ID = ID;
    console.log("깃허브");
    this.init();
  }

  async componentWillMount() {
    const data = await api.github.getGithubApi();
    if (!data) return;
    await history.pushState({ data: "main" }, "", "/main");
    await store.check.dispatch(checkAndRoute(data.data.username, "main"));
    return {};
  }

  render() {
    return `
            <h1>잠시만 기다려주세요</h1>
        `;
  }

  componentDidMount() {
    return {};
  }
}
