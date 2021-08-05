import { MoonSVG } from "../../../common/SVG/MoonSVG";
import { SunSVG } from "../../../common/SVG/SunSVG";
import cache from "../../../util/cache";
import { Container } from "../../../util/Container";
import { $ } from "../../../util/jQurey";
import { isDark, setDarkMode } from "../../../util/setDisplay";
import "./style.scss";

export default class FooterView extends Container {
  public state = {
    toggle: isDark(),
  };

  constructor($target: HTMLElement, ID: string) {
    super($target, "FooterView");
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    return `
      <div class="footer-item" >
        <h5 class="footer-text" >2020 TOKYO OLYMPIC ANNIVERSARY EDITION</h5>
      </div>
      <div class="footer-item color" >
        <div class="colorpicker-button color-1" id="color-1" >
          <h4></h4>
        </div>
        <div class="colorpicker-button color-2" id="color-2" >
          <h4></h4>
        </div>
        <div class="colorpicker-button color-3" id="color-3">
          <h4></h4>
        </div>
        <div class="colorpicker-button color-4" id="color-4">
          <h4></h4>
        </div>
        <div id="darkmode-button" >
          ${this.state.toggle ? `${SunSVG}` : `${MoonSVG}`}
        </div>
      </div>
`;
  }

  componentDidMount() {
    $("#darkmode-button").on("click", () => {
      this.setState({
        toggle: !this.state.toggle,
      });
      cache.set("dark", this.state.toggle.toString());
      setDarkMode();
    });
    $("#color-1").on("click", () => {
      cache.set("color", "1");
      setDarkMode();
    });
    $("#color-2").on("click", () => {
      cache.set("color", "2");
      setDarkMode();
    });
    $("#color-3").on("click", () => {
      cache.set("color", "3");
      setDarkMode();
    });
    $("#color-4").on("click", () => {
      cache.set("color", "4");
      setDarkMode();
    });
  }
}
