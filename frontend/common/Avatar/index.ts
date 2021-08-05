import { store } from "../..";
import { SERVER_URL } from "../../constants/constants";
import { Component } from "../../util/Component";
import { React } from "../../util/React";
import "./style.scss";

interface IAvatar {
  profileImage: string;
  width?: string;
  height?: string;
  boxShadow?: string;
}

export default class Avatar extends React {
  public props = {
    profileImage: "",
    width: "40px",
    height: "40px",
    boxShadow: "2px_2px_10px_var(--text)",
  };

  constructor($target: HTMLElement, ID: string, props: IAvatar) {
    super($target, "Avatar", ["check"]);
    this.ID = ID;
    if (props.profileImage !== undefined) {
      this.props.profileImage = props.profileImage;
    }
    if (props.width && props.height) {
      this.props.width = props.width;
      this.props.height = props.height;
    }
    if (props.boxShadow) {
      this.props.boxShadow = props.boxShadow;
    }
    this.init();
  }

  css() {
    return `
        #avatar-img-${this.ID} {
            width: ${this.props.width};
            height: ${this.props.height};
            box-shadow: ${this.props.boxShadow};
        }
        #Avatar-${this.ID} {
            width: ${this.props.width};
            height: ${this.props.height};
        }`;
  }

  componentWillMount() {
    return ``;
  }

  render() {
    const { img } = store.check.getState();
    return `
            <div id="Avatar-${this.ID}" class="border-div blob white" >
                <div class="box" >
                    <img id="avatar-img-${this.ID}" src="${
      img === null || img === "" ? "/public/image/avatar.png" : img
    }" class="avatar-img admin" />
                </div>
            </div>
        `;
  }

  componentDidMount() {
    return ``;
  }
}