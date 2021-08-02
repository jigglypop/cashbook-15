import { categoryObjectKeyValue } from "../../constants/constants";
import { Component } from "../../util/Component";
import { Container } from "../../util/Container";
import "./style.scss";

interface ICategoryBadge {
  key: number;
}

export default class CategoryBadge extends Component {
  private props: ICategoryBadge;

  constructor($target: HTMLElement, ID: string, props: ICategoryBadge) {
    super($target, "CategoryBadge");
    this.props = props;
    this.ID = ID;
    this.init();
  }

  css() {
    return `
      .category-badge {
        box-shadow: 0_0_10px_var(--category-${this.props.key});
      }
      .category-badge:hover {
        box-shadow: 0_0_20px_var(--category-${this.props.key});
      }
    `;
  }

  render() {
    return `
            <div class="category-badge category-badge-${
              this.props.key
            }" id="category-badge-${this.ID}" >
              <h5>${categoryObjectKeyValue[this.props.key]}</h5>
            </div>
        `;
  }
}
