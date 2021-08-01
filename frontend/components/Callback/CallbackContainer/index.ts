import api from "../../../api";
import check from "../../../util/check";
import { Container } from "../../../util/Container";
import { goMain } from "../../../util/goRouter";
import "./style.scss";

export default class CallbackContainer extends Container {
  constructor($target: HTMLElement, ID: string) {
    super($target, "CallbackContainer");
    this.ID = ID;
    this.init();
  }

  async componentWillMount() {
    const data = await api.github.getGithubApi();
    if (!data) return;
    await goMain();
    await check();
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
