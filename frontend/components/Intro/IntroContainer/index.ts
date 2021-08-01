import { Container } from "../../../util/Container";
import { $ } from "../../../util/jQurey";
import "./style.scss";

export default class IntroContainer extends Container {
  public state = {
    toggle: false,
  };
  constructor($target: HTMLElement, ID: string) {
    super($target, "IntroContainer");
    this.ID = ID;
    this.init();
  }

  async componentWillMount() {
    return {};
  }

  render() {
    return `
    ${
      this.state.toggle
        ? `
        <h1 class="intro-title">우아한 가계부</h1>
        <h1 class="intro-flag">회원가입</h1>
        <div id="toggle-login" class="goto-flag" >기존 아이디가 있으신가요? <span>로그인</span></div>
        <RegisterView/>`
        : `
        <h1 class="intro-title">우아한 가계부</h1>
        <h1 class="intro-flag">로그인</h1>
        <div id="toggle-register" class="goto-flag" >처음이신가요? <span>회원가입</span></div>
        <LoginView/>`
    }
    `;
  }

  componentDidMount() {
    $("#toggle-register").on("click", () => {
      this.setState({
        toggle: !this.state.toggle,
      });
    });
    $("#toggle-login").on("click", () => {
      this.setState({
        toggle: !this.state.toggle,
      });
    });
  }
}
