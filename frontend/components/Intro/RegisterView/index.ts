import { store } from "../../..";
import api from "../../../api";
import { GITHUB_URL } from "../../../constants/constants";
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
      registerApi: async () => {
        const data = await api.auth.register();
        if (data.status >= 400) {
          this.setState({
            errorText: data.message.split(":")[1],
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
    <GlassButton :text="회원가입" @onClick="registerApi" />
    <a href="${GITHUB_URL}" >
      <button class="github-button" >GITHUB 로그인/ 회원가입 </button>
    </a>
    <h6>${this.state.errorText}</h6>
    `;
  }
  componentDidMount() {
    return;
  }
}