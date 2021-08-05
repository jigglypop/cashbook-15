import { store } from "../../..";
import api from "../../../api";
import { setYearCategory } from "../../../redux/yearcategory/actions";
import { Container } from "../../../util/Container";
import { $ } from "../../../util/jQurey";
import { dot } from "../../../util/makeLengthTwo";
import "./style.scss";

export interface ICategoryItem {
  categoryAmount: number;
  categoryId: number;
  expense: number;
}

export default class RecordItem extends Container {
  public props: ICategoryItem;

  constructor($target: HTMLElement, ID: string, props: ICategoryItem) {
    super($target, "CategoryItem");
    this.ID = ID;
    this.props = props;
    this.init();
  }

  componentWillMount() {
    return {};
  }

  render() {
    let ratio = this.props.categoryAmount / this.props.expense;
    if (isNaN(ratio)) {
      ratio = 0;
    }
    return `
        <div class="categoryitem" id="categoryitem-${this.props.categoryId}">
          <div class="categoryitem-item left"  >
            <CategoryBadge :key="${this.props.categoryId}" />
            <h4>${(Math.abs(ratio) * 100).toFixed(2) + "%"}</h4>
          </div>
          <div class="categoryitem-item">
            <h4></h4>
          </div>
          <div class="categoryitem-item right">
            <h4>${dot(this.props.categoryAmount)} 원</h4>
          </div>
        </div>
    `;
  }

  async setYearCategory() {
    const data = await api.yearmonth.getyearcategory(this.props.categoryId);
    if (data) {
      await store.yearcategory.dispatch(
        setYearCategory(data.data, this.props.categoryId)
      );
    }
  }

  componentDidMount() {
    $(`#categoryitem-${this.props.categoryId}`).on(
      "click",
      this.setYearCategory.bind(this)
    );
  }
}
