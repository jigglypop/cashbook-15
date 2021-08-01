import { categoryObjectKeyValue } from "../../constants/constants";
import { Container } from "../../util/Container";
import "./style.scss";

interface ICategoryBadge {
  key: number;
}

export default class CategoryBadge extends Container {
  private props: ICategoryBadge;

  constructor($target: HTMLElement, ID: string, props: ICategoryBadge) {
    super($target, "CategoryBadge");
    this.props = props;
    this.ID = ID;
    this.init();
  }

  componentWillMount() {
    return {};
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

  componentDidMount() {
    return {};
  }
}
