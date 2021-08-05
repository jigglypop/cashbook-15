import { store } from "../../..";
import api from "../../../api";
import { CloseSVG } from "../../../common/SVG/CloseSVG";
import { GoOutSVG } from "../../../common/SVG/GoOutSVG";
import { initCheck } from "../../../redux/check/actions";
import { changeProfile } from "../../../redux/profile/actions";
import check from "../../../util/check";
import { createToast } from "../../../util/createToast";
import { goIntro } from "../../../util/goRouter";
import { $ } from "../../../util/jQurey";
import { React } from "../../../util/React";
import "./style.scss";

export default class ProfileView extends React {
  public state = {
    errorText: "",
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "ProfileView");
    this.ID = ID;
    this.init();
  }

  css() {
    return ``;
  }

  componentWillMount() {
    return {
      changeProfile(e: any) {
        store.profile.dispatch(changeProfile("img", e.target.value));
      },
      profileApi: async () => {
        const data = await api.auth.profile();
        if (data.status >= 400) {
          this.setState({
            errorText: data.message,
          });
        } else {
          await check();
          await createToast("프로필 업데이트");
        }
      },
    };
  }

  render() {
    const { username, id, img } = store.check.getState();
    if (id) {
      store.profile.dispatch(changeProfile("userId", Number(id)));
    }
    return `
      <div class="profile-item left" >
          <Avatar :width="100px" :height="100px" />
          <h4 id="login-id">${username ? username : ""}</h4>
      </div>
      <div class="profile-svg logout" id="logout-button" >
        <div class="profile-button">
          ${username ? GoOutSVG() : ""}
        </div>
      </div>
      <div class="profile-toggle" id="toggle-button" >
        ${CloseSVG()}
      </div>
      <LineInput :labelText="프로필 URL 변경" :text="프로필 변경 URL" @onChange="changeProfile" :value="${
        img === null ? "" : img
      }" />
      <GlassButton :text="프로필 변경" @onClick="profileApi" :width="240px" :height="40px" :margin="20px" :background="var(--thumb-gradient)" />
      <h4 class="error">${this.state.errorText}</h4>
`;
  }

  async goLogout() {
    await store.check.dispatch(initCheck());
    await localStorage.clear();
    await goIntro();
    await createToast("로그아웃");
  }

  toggleProfile() {
    $(".ProfileViewOuter").toggleClass("dropProfile");
  }

  componentDidMount() {
    $("#logout-button").on("click", this.goLogout);
    $("#toggle-button").on("click", this.toggleProfile);
  }
}
