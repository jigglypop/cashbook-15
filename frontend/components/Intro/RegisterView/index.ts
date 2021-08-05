import { store } from "../../..";
import api from "../../../api";
import { GITHUB_URL } from "../../../constants/constants";
import { changeLogin } from "../../../redux/login/actions";
import { changeRegister } from "../../../redux/register/actions";
import check from "../../../util/check";
import { Container } from "../../../util/Container";
import { createToast } from "../../../util/createToast";
import { goMain } from "../../../util/goRouter";
import "./style.scss";

export default class RegisterView extends Container {
  public state = {
    errorText: "",
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "RegisterView");
    this.ID = ID;
    this.init();
  }
  componentWillMount() {
    return {
      changeUsername: (e: any) => {
        store.register.dispatch(changeRegister("username", e.target.value));
      },
      changeEmail: (e: any) => {
        store.register.dispatch(changeRegister("email", e.target.value));
      },
      changePassword: (e: any) => {
        store.register.dispatch(changeRegister("password", e.target.value));
      },
      loginWoowaApi: async () => {
        await store.login.dispatch(changeLogin("username", "woowa"));
        await store.login.dispatch(changeLogin("password", "123456"));
        const data = await api.auth.login();
        if (data.status >= 400) {
          this.setState({
            errorText: data.message,
          });
        } else {
          await goMain();
          await check();
          await createToast("관람용 아이디 로그인");
        }
      },
      registerApi: async () => {
        const data = await api.auth.register();
        if (data.status >= 400) {
          this.setState({
            errorText: data.message,
          });
        } else {
          await goMain();
          await check();
          await createToast("회원가입");
        }
      },
    };
  }
  render() {
    return `
    <Input :placeholder="아이디" @onChange="changeUsername" />
    <Input :placeholder="이메일" @onChange="changeEmail" />
    <Input :placeholder="비밀번호" :type="password" @onChange="changePassword" />
    <GlassButton :text="회원가입" @onClick="registerApi" :background="linear-gradient(45deg, #bc4e9c, #f80759" :color="white"/>
    <a href="${GITHUB_URL}" >
      <button class="github-button"  >GITHUB 로그인/ 회원가입 </button>
    </a>
    <GlassButton :text="관람용 아이디로 로그인" @onClick="loginWoowaApi"  :background="linear-gradient(45deg,  #bc4e9c, #f80759" :color="white" />
    <h6 class="errormessage" >${this.state.errorText}</h6>
    `;
  }
  componentDidMount() {
    return;
  }
}
