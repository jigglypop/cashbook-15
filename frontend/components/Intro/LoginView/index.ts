import { store } from "../../..";
import api from "../../../api";
import { GITHUB_URL } from "../../../constants/constants";
import { changeLogin } from "../../../redux/login/actions";
import check from "../../../util/check";
import { Container } from "../../../util/Container";
import { createToast } from "../../../util/createToast";
import { goMain } from "../../../util/goRouter";
import "./style.scss";

export default class LoginView extends Container {
  public state = {
    errorText: "",
  };
  constructor($target: HTMLElement, ID: string) {
    super($target, "LoginView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {
      changeUsername: (e: any) => {
        store.login.dispatch(changeLogin("username", e.target.value));
      },
      changePassword: (e: any) => {
        store.login.dispatch(changeLogin("password", e.target.value));
      },

      loginApi: async () => {
        const data = await api.auth.login();
        if (data.status >= 400) {
          this.setState({
            errorText: data.message,
          });
        } else {
          await goMain();
          await check();
          await createToast("로그인");
        }
      },
    };
  }

  render() {
    return `
    <Input :placeholder="아이디" @onChange="changeUsername" />
    <Input :placeholder="비밀번호" :type="password" @onChange="changePassword" />
    <GlassButton :text="로그인" @onClick="loginApi"  :background="linear-gradient(45deg,  #bc4e9c, #f80759" :color="white" />
    <a href="${GITHUB_URL}" >
      <button class="github-button" >GITHUB 로그인/ 회원가입 </button>
    </a>
    <h6 class="errormessage" >${this.state.errorText}</h6>
    `;
  }

  componentDidMount() {
    return;
  }
}
