import { OlympicRingsTitleSVG } from "../../../common/SVG/OlympicRingsTitleSVG";
import { $ } from "../../../util/jQurey";
import { React } from "../../../util/React";
import "./style.scss";

export default class IntroContainer extends React {
  public state = {
    toggle: false,
  };
  constructor($target: HTMLElement, ID: string) {
    super($target, "IntroContainer");
    this.ID = ID;
    this.init();
  }

  css() {
    return `

    .IntroContainerOuter {
      background-image: url('/public/image/background.png');
    }

    #intro-container {
      background-image: url('/public/image/tokyo.png');
    }

    `;
  }

  async componentWillMount() {
    return {};
  }

  render() {
    return `
      <div id="intro-container" >
        <div class="olympic-ring-outer" id="olympic-ring-outer" >
          <div class="olympic-ring" id="olympic-ring" >
            ${OlympicRingsTitleSVG}
          </div>
        </div>
        <h1 class="tokyo" id="tokyo" >TOKYO</h1>
        <h1 class="tokyo" id="olympics" >OLYMPICS</h1>
        <h1 class="tokyo" id="edition" >EDITTION</h1>

      </div>

        <div class="intro-inner" >

          <h1 class="intro-title">WOOWA CASHBOOK</h1>
          <h4 class="dummy-id" >관람용 아이디/비밀번호 : woowa / 123456</h4>
        ${
          this.state.toggle
            ? `
            <div id="toggle-login" class="goto-flag" >기존 아이디가 있으신가요? <span>로그인</span></div>
            <RegisterView/>`
            : `
            <div id="toggle-register" class="goto-flag" >처음이신가요? <span>회원가입</span></div>
            <LoginView/>`
        }
        </div>
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

    const that = this;
    $(`.IntroContainerOuter`).on("mousemove", function (rotate: any) {
      const x = (innerWidth / 2 - rotate.pageX) / 30;
      const y = (innerHeight / 2 - rotate.pageY) / 30;
      $(`#intro-container`).css(
        "transform",
        `rotateY(${x}deg) rotateX(${y}deg)`
      );
    });
    $(`.IntroContainerOuter`).on("mouseover", function () {
      $(`#tokyo`).css("transform", "translate3d(0, 0, 80px)");
      $(`#olympics`).css("transform", "translate3d(0, 0, 80px)");
      $(`#edition`).css("transform", "translate3d(0, 0, 80px)");
      $(`#olympic-ring-outer`).css("transform", "translate3d(0, 0, 40px)");
      $(`#intro-container`).css("transition", `all .05s ease-in`);
    });

    $(`.IntroContainerOuter`).on("mouseout", function () {
      $(`#intro-container`).css("transform", `rotateY(0deg) rotateX(0deg)`);
      $(`#intro-inner`).css("transform", "translate3d(0, 0, 0)");
      $(`#tokyo`).css("transform", "translate3d(0, 0, 0)");
      $(`#olympics`).css("transform", "translate3d(0, 0, 0)");
      $(`#edition`).css("transform", "translate3d(0, 0, 0)");
    });
  }
}
